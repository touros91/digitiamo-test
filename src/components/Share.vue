<template>
  <div class="down text-center col-12" v-if="response">
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
a {
  background-color: #ececec;
  padding: 10px 15px;
  border-radius: 25px;
  color: black;
  text-decoration: none;
}
</style>