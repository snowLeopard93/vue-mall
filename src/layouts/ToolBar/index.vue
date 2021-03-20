<template>
  <div class="toolBar">
    <div class="toolBar-left">
      <slot name="leftToolBar"></slot>
    </div>
    <div class="toolBar-right">
      <slot name="rightToolBar"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyToolBar"
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
