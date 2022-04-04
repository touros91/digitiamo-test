<template>
  <!-- info about HTTP Request -->
  <div class="info-container" v-if="response">
    <div class="d-flex sliding-info">
      <!-- URL info  -->
      <div class="card-info mt-4">
        <div class="title">
          <h6>URL INFO</h6>
        </div>
        <div>
          <h5>DOMAIN</h5>
          <p>{{ response.config.url }}</p>
        </div>
        <div class="border-y">
          <h5>SCHEME</h5>
          <p>{{ response.config.url }}</p>
        </div>
        <div>
          <h5>PATH</h5>
          <p>{{ response.config.url }}</p>
        </div>
      </div>
      <!-- Response info  -->
      <div class="card-info bg-white mt-4">
        <div class="title response">
          <h6>RESPONSE</h6>
        </div>
        <div class="border-y">
          <h6>HTTP {{ response.status }} OK</h6>
        </div>
        <div class="border-b">
          <h6>Response Time: {{ time }}s</h6>
        </div>
        <div>
          <h6>Server: Apache/2.2.14 (Win 32)</h6>
        </div>
      </div>
      <div class="card-info bg-white mt-4">
        <div class="title response">
          <h6>RESPONSE</h6>
        </div>
        <div class="border-y">
          <h6>HTTP {{ response.status }} OK</h6>
        </div>
        <div class="border-b">
          <h6>
            Date:
            {{
              new Date().getDate() +
              "/" +
              (new Date().getMonth() + 1) +
              "/" +
              new Date().getFullYear()
            }}
          </h6>
        </div>
        <div>
          <h6>Server: Apache/2.2.14 (Win 32)</h6>
        </div>
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
    time: {
      type: [Number, String],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/common.scss";

.info-container {
  width: 100%;
  overflow: hidden;
}
.sliding-info {
  overflow: hidden;
  overflow-x: auto;
  @include flex(space-between);
  gap: 10px;
}
.card-info {
  background-color: $bg-color-light;
  height: 500px;
  word-wrap: break-word;
  padding-right: 0;
  padding-left: 0;
  border-radius: 10px;
  border: 1px solid $bg-color-light;
  min-width: 350px;

  div {
    width: 100%;
    background-color: $bg-color-dark-grey;
    padding: 10px;
  }

  p {
    font-size: 15px;
  }

  .title {
    background-color: $bg-color-light;
    border: none;
    margin: 10px 0 20px 0;
  }

  .title.response {
    background-color: $white;
    padding: 10px 0 0 10px;
  }

  .bg-white {
    background-color: $white;
  }

  .border-y {
    border-top: 2px solid $white;
    border-bottom: 2px solid $white;
  }

  .border-b {
    border-bottom: 2px solid $white;
  }
}
</style>