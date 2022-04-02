<template>
  <div id="app">
    <BaseInput />
    <SpeedCircle />
  </div>
</template>

<script>
import BaseInput from "./components/BaseInput.vue";
import SpeedCircle from "./components/SpeedCircle.vue";

export default {
  name: "App",
  components: {
    BaseInput,
    SpeedCircle,
  },
};
</script>
<style lang="scss">
@import "./assets/style/common.scss";
</style>
