<template>
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

        <HttpResponse :response="response" :time="time" />
      </div>
    </div>
    <Share :response="response" />
  </div>
</template>

<script>
import axios from "axios";
import Status from "./Status.vue";
import HttpResponse from "./HttpResponse.vue";
import Share from "./Share.vue";

export default {
  components: {
    Status,
    HttpResponse,
    Share,
  },
  data() {
    return {
      apiRequests: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      url: "https://jsonplaceholder.typicode.com/posts",
      response: null,
      time: null,
      error: null,
    };
  },
  methods: {
    async httpRequest() {
      const startTime = new Date().getTime();
      try {
        const res = await axios.get(`${this.url}`);

        if (!res) {
          throw new Error("Error! Please try again.");
        }

        this.response = res;
        const endTime = new Date().getTime();
        this.time = Math.round((endTime - startTime) / 2);
        console.log(this.response);
        console.log(this.time);
      } catch (error) {
        this.error = error.response.status;
        console.log(`Error: ${error.message}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  max-width: 600px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 8px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;

  .width-select {
    appearance: none;
    padding: 0 5px;
    text-align: center;
    border: none;
  }

  input {
    background-color: #f0f0f0;
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