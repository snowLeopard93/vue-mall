<template>
  <div style="text-align: center;">
    <IconFont type="icon-icon-404" style="font-size: 100px;" />
    <NotFoundSvg />
  </div>
</template>

<script>
import NotFoundSvg from "@/assets/images/404.svg";

export default {
  name: "NotFound",
  components: {
    NotFoundSvg
  }
};
</script>

<style scoped></style>
