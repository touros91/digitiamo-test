<template>
  <!-- select, input and button where to make an HTTP request  -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Status :response="response" :error="error" />
        <div class="input-container">
          <select class="width-select">
            <option v-for="(request, index) in apiRequests" :key="index">
              {{ request }}
            </option>
          </select>
          <input
            type="text"
            class="form-control input"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="url"
          />
          <button
            type="button"
            class="btn btn-primary send"
            @click="httpRequest"
          >
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="d-block d-md-none"
            />
            <span class="d-none d-md-block">SEND</span>
          </button>
        </div>
        <!-- component which shows HTTP response info  -->
        <HttpResponse :response="response" :time="time" />
      </div>
    </div>
    <!-- component which shows URL link  -->
    <Share :response="response" />
    <!-- component which shows timing stats about the response on mobile -->
    <SpeedCircle v-if="response" :time="time" />
  </div>
</template>

<script>
import axios from "axios";
import Status from "./Status.vue";
import HttpResponse from "./HttpResponse.vue";
import Share from "./Share.vue";
import SpeedCircle from "./SpeedCircle.vue";

export default {
  components: {
    Status,
    HttpResponse,
    Share,
    SpeedCircle,
  },
  data() {
    return {
      apiRequests: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      url: "https://jsonplaceholder.typicode.com/posts",
      response: null,
      time: null,
      error: null,
      swipe: true,
    };
  },
  methods: {
    // method which makes an Axios call
    async httpRequest() {
      // taking initial request starting time
      const startTime = new Date().getTime();
      try {
        const res = await axios.get(`${this.url}`);

        if (!res) {
          throw new Error("Error! Please try again.");
        }

        this.response = res;

        // taking ending request time and make calculation of final time
        const endTime = new Date().getTime();
        this.time = Math.round((endTime - startTime) / 2);
      } catch (error) {
        this.error = error.response.status;
        console.log(`Error: ${error.message}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/common.scss";

.input-container {
  max-width: 600px;
  background-color: $bg-color-light;
  border-radius: 10px;
  padding: 8px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: $bg-color-light;

  .width-select {
    appearance: none;
    padding: 0 5px;
    text-align: center;
    border: none;
  }

  input {
    background-color: $bg-color-light;
    border: none;
  }

  .send {
    padding: 7px 25px;
  }

  .width-select,
  button {
    border-radius: 7px;
  }
}
</style>