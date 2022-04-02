<template>
  <div class="container">
    <div class="row">
      <div class="col-12 my-4 status" v-if="response">
        <h1>{{ response.status }}</h1>
        <p>{{ responseStatusCodes[response.status] }}</p>
      </div>
      <div class="col-12 my-4 status" v-else>
        <h1>{{ error }}</h1>
        <p>{{ responseStatusCodes[error] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
    },
    error: {
      type: Number,
    },
  },
  data() {
    return {
      responseStatusCodes: {
        200: "Everything is fine!",
        302: "Found",
        400: "Bad Request",
        404: "Not Found",
        500: "Internal Server Error",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.status {
  text-align: center;
}
</style>