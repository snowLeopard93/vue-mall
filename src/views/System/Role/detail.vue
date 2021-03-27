<template>
  <div>
    <MyDetailDrawer :title="title">
      <template v-slot:content>
        <div class="roleDetail-box">
          <div class="roleDetail-label">角色名：</div>
          <div class="roleDetail-detail">{{ role.roleName }}</div>
          <div class="roleDetail-label">创建时间：</div>
          <div class="roleDetail-detail">{{ role.ctime }}</div>
          <div class="roleDetail-label">修改时间：</div>
          <div class="roleDetail-detail">{{ role.mtime }}</div>
        </div>
        <div class="roleDetail-long-box">
          <div class="roleDetail-label">角色描述：</div>
          <div class="roleDetail-long-detail">{{ role.desc }}</div>
        </div>
      </template>
    </MyDetailDrawer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RoleDetail",
  data() {
    return {
      title: "查看详情"
    };
  },
  computed: mapState({
    role: state => state.role.currentSelectRole
  }),
  methods: {}
};
</script>

<style scoped>
.roleDetail-box {
  display: flex;
  flex-wrap: wrap;
}

.roleDetail-label {
  width: 15%;
  text-align: right;
  margin-bottom: 10px;
}

.roleDetail-detail {
  width: 35%;
  margin-bottom: 10px;
}

.roleDetail-long-box {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.roleDetail-long-detail {
  width: 85%;
}
</style>
