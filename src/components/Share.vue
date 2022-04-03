<template>
  <!-- component which shows URL link  -->
  <div class="share text-center" v-if="response">
    <h3 class="my-4">SHARE</h3>
    <a :href="response.config.url"> {{ response.config.url }}</a>
  </div>
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/common.scss";

.share {
  margin-bottom: 20px;
  a {
    background-color: #ececec;
    padding: 10px 15px;
    border-radius: 25px;
    color: $black;
    text-decoration: none;
  }
}
</style>