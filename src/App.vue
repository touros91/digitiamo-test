<template>
  <div id="app">
    <SpeedCircle />
  </div>
</template>

<script>
import SpeedCircle from "./components/SpeedCircle.vue";

export default {
  name: "App",
  components: {
    SpeedCircle,
  },
};
</script>
<style lang="scss">
@import "./assets/style/common.scss";
</style>
