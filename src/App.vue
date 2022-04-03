<template>
  <div id="app">
    <MainComponent />
  </div>
</template>

<script>
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: {
    MainComponent,
  },
};
</script>
<style lang="scss">
@import "./assets/style/common.scss";

#app {
  padding: 10px 0 40px 0;
}
</style>
