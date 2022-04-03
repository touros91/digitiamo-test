<template>
  <div class="container info-container" v-if="response">
    <div class="row d-flex justify-content-evenly flex-wrap">
      <div class="card-info col-xs-12 col-md-3 mt-4">
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
      <div class="card-info bg-white col-xs-12 col-md-3 mt-4">
        <div class="title response">
          <h6>RESPONSE</h6>
        </div>
        <div class="border-y">
          <h6>HTTP {{ response.status }} OK</h6>
        </div>
        <div class="border-b">
          <h6>Response Time: {{ time }}ms</h6>
        </div>
        <div>
          <h6>Server: Apache/2.2.14 (Win 32)</h6>
        </div>
      </div>
      <div class="card-info bg-white col-xs-12 col-md-3 mt-4">
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
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  background-color: #f0f0f0;
  height: 500px;
  word-wrap: break-word;
  padding-right: 0;
  padding-left: 0;
  border-radius: 10px;
  border: 1px solid #ececec;

  div {
    width: 100%;
    background-color: #d9d9d9;
    padding: 10px;
  }

  p {
    font-size: 15px;
  }

  .title {
    background-color: #f0f0f0;
    border: none;
    margin: 10px 0 20px 0;
  }

  .title.response {
    background-color: white;
    padding: 10px 0 0 10px;
  }

  .bg-white {
    background-color: white;
  }

  .border-y {
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }

  .border-b {
    border-bottom: 2px solid white;
  }
}
</style>