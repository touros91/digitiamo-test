<template>
  <div class="container info-container" v-if="response">
    <div class="row d-flex gx-5 justify-content-evenly flex-wrap">
      <div class="card col-xs-12 col-md-3 mt-4">
        <div>
          <h6>URL INFO</h6>
        </div>
        <div>
          <h6>
            DOMAIN: <br />
            {{ response.config.url }}
          </h6>
        </div>
        <div>
          <h6>
            SCHEME: <br />
            HTTP
          </h6>
        </div>
        <div>
          <h6>
            PATH: <br />
            posts
          </h6>
        </div>
      </div>
      <div class="card col-xs-12 col-md-3 mt-4">
        <div>
          <h6>RESPONSE</h6>
        </div>
        <div>
          <h6>HTTP: {{ response.status }} OK</h6>
        </div>
        <div>
          <h6>RESPONSE TIME: {{ time }}ms</h6>
        </div>
        <div>
          <h6>SERVER: Apache/2.2.14 (Win 32)</h6>
        </div>
      </div>
      <div class="card col-xs-12 col-md-3 mt-4">
        <div>
          <h6>RESPONSE</h6>
        </div>
        <div>
          <h6>HTTP: {{ response.status }} OK</h6>
        </div>
        <div>
          <h6>
            DATE:
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
          <h6>SERVER: Apache/2.2.14 (Win 32)</h6>
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

<style lang="scss">
.card {
  background-color: #ececec;
  width: 200px;
  height: 500px;

  div {
    padding: 20px;
    border: 1px solid white;
    background-color: rgb(179, 176, 176);
  }
}
</style>