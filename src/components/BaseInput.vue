<template>
  <div class="input-container">
    <select
      class="form-select width-select"
      aria-label="Default select example"
    >
      <option v-for="(request, index) in apiRequests" :key="index">
        {{ request }}
      </option>
    </select>
    <input
      type="text"
      class="form-control input"
      :value="url"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
    <button type="button" class="btn btn-primary send">SEND</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://jsonplaceholder.typicode.com/posts",
      apiRequests: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    };
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  max-width: 600px;
  background-color: #ececec;
  border-radius: 5px;
  padding: 8px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  background-color: #ececec;
}

input {
  background-color: #ececec;
  border: none;
}

.width-select {
  width: 80px;
  appearance: none;
}

.send {
  padding: 7px 25px;
}

.width-select,
button {
  border-radius: 7px;
}
</style>