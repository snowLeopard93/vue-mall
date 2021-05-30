<template>
  <div>
    <a-carousel
      autoplay
      :dotPosition="carouselConfig.dotPosition"
      :dots="carouselConfig.dots"
    >
      <div v-for="noticeItem in noticeList" :key="noticeItem.key">
        <h3>{{ noticeItem.noticeTitle }}</h3>
      </div>
    </a-carousel>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "NoticeList",
  data() {
    return {
      carouselConfig: {
        // 指示点位置
        dotPosition: "bottom",
        // 是否显示指示点
        dots: true
      }
    };
  },
  computed: mapState({
    noticeList: state => state.notice.noticeList
  }),
  mounted() {
    this.getNoticeData();
  },
  methods: {
    getNoticeData() {
      this.$store.dispatch("notice/getNoticeList");
    }
  }
};
</script>
<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
