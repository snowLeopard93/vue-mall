<template>
  <div class="toolBar">
    <div class="toolBar-left">
      <slot name="leftToolBar">
        <a-button type="primary" @click="refreshBtnClick">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
        </a-button>
      </slot>
    </div>
    <div class="toolBar-right">
      <slot name="rightToolBar">
        <div class="searchForm-item">
          <a-input
            :placeholder="searchInputPlaceholder"
            v-model="searchParamName"
            @pressEnter="changeSearchParamName"
          />
        </div>
        <a-button type="primary" @click="searchBtnClick">
          <a-icon type="search" />
        </a-button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyToolBar",
  props: {
    searchInputPlaceholder: {
      type: String,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      searchParamName: ""
    };
  },
  methods: {
    changeSearchParamName() {
      const value = this.searchParamName;
      this.$emit("handleChangeSearchParamName", value);
    },
    refreshBtnClick() {
      this.$emit("handleRefresh");
    },
    searchBtnClick() {
      const value = this.searchParamName;
      this.$emit("handleSearchBtnClick", value);
    }
  }
};
</script>

<style scoped>
.toolBar {
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
}

.toolBar-left {
  width: 30%;
  display: inline-block;
}

.toolBar-right {
  width: 70%;
  display: inline-block;
  float: right;
  text-align: right;
}
</style>
