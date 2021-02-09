<template>
  <div>
    <a-menu
      :theme="menuTheme"
      :selected-keys="selectedKeys"
      :open-keys.sync="openKeys"
      mode="inline"
    >
      <a-sub-menu v-for="firstMenu in menuData" :key="firstMenu.path">
        <span slot="title">
          <a-icon v-if="firstMenu.meta.icon" :type="firstMenu.meta.icon" />
          <span>{{ firstMenu.meta.title }}</span>
        </span>
        <a-menu-item
          v-for="secondMenu in firstMenu.children"
          :key="secondMenu.path"
          @click="
            () => $router.push({ path: secondMenu.path, query: $route.query })
          "
        >
          {{ secondMenu.meta.title }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { check } from "../utils/auth";
export default {
  name: "SiderMenu",
  props: {
    menuTheme: {
      type: String,
      default: "dark"
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.selectedKeysMap = {};
    this.selectedPathMap = {};
    this.openKeysMap = {};
    const menuData = this.getMenuData(this.$router.options.routes);
    this.getAllPath(this.selectedPathMap[this.$route.path]);
    return {
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.openKeysMap[this.$route.path],
      menuData
    };
  },
  watch: {
    "$route.path": function(val) {
      this.selectedKeys = this.selectedKeysMap[val];
      this.openKeys = this.openKeysMap[val];
      this.getAllPath(this.selectedPathMap[val]);
    },
    collapsed: function(val) {
      if (val) {
        this.openKeys = [];
      } else {
        this.openKeys = this.openKeysMap[this.$route.path];
      }
    }
  },
  methods: {
    // 从路由中获取菜单
    getMenuData(routes = [], parentKeys = [], parent = [], selectedKey) {
      const menuData = [];
      for (let item of routes) {
        if (item.meta && item.meta.authority && !check(item.meta.authority)) {
          break;
        }
        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = parentKeys;
          this.selectedKeysMap[item.path] = [selectedKey || item.path];
          this.selectedPathMap[item.path] = [
            ...parent,
            {
              path: selectedKey || item.path,
              title: item.meta ? item.meta.title : ""
            }
          ];
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(
              item.children,
              [...parentKeys, item.path],
              [
                ...parent,
                { path: item.path, title: item.meta ? item.meta.title : "" }
              ]
            );
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey
                ? parent
                : [
                    ...parent,
                    {
                      path: item.path,
                      title: item.meta ? item.meta.title : ""
                    }
                  ],
              selectedKey || item.path
            );
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(
            ...this.getMenuData(
              item.children,
              [...parentKeys, item.path],
              [
                ...parent,
                { path: item.path, title: item.meta ? item.meta.title : "" }
              ]
            )
          );
        }
      }
      return menuData;
    },
    getAllPath(allPath = []) {
      this.$store.commit("chaneCurrentMenu", allPath);
    }
  }
};
</script>

<style scoped></style>
