<template>
  <!-- component which shows timing stats about the response on mobile -->

  <!-- swipe up and bottom functionality -->
  <div
    class="mobile-container d-sm-block d-md-none"
    :class="this.isSwiped ? 'swipedUp' : ''"
  >
    <div class="swipe">
      <div @click="isSwiped === false ? (isSwiped = true) : (isSwiped = false)">
        <button v-touch:swipe="swipeHandler" class="swiper"></button>
      </div>
    </div>

    <!-- speed animation stats  -->
    <div class="time-container" v-if="isSwiped">
      <h2 class="px-4 mt-4">Timing Analysis</h2>
      <div class="circle" v-if="isSwiped">
        <div class="dot"></div>
        <div class="speed-600 speed-size text-center">600</div>
        <div class="speed-700 speed-size text-center">700</div>
        <div class="speed-800 speed-size text-center">800</div>

        <h4 class="text-center">720</h4>
        <h5 class="text-center">Great!</h5>
        <h2 class="text-center">Page Load</h2>
        <h3 class="text-center">{{ time }}s</h3>
      </div>
      <div class="circle2" v-if="isSwiped">
        <div class="dot"></div>
        <div class="speed-600 speed-size text-center">600</div>
        <div class="speed-700 speed-size text-center">700</div>
        <div class="speed-800 speed-size text-center">800</div>
        <h4 class="text-center">720</h4>
        <h5 class="text-center">Great!</h5>
        <h2 class="first-interaction">First Interaction</h2>
        <h3 class="text-center">{{ time }}s</h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    swipe: {
      type: Boolean,
    },
    time: {
      type: Number,
    },
  },
  data() {
    return {
      isSwiped: this.swipe,
    };
  },
  methods: {
    swipeHandler(direction) {
      direction === "top"
        ? (this.isSwiped = true)
        : direction === "bottom"
        ? (this.isSwiped = false)
        : "";
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/common.scss";

.mobile-container {
  position: fixed;
  background: $white;
  width: 100%;
  height: 100vh;
  transition: all 0.5s;
  top: calc(100% - 40px);
  left: 0;
  overscroll-behavior: contain;
  &.swipedUp {
    top: 0px;
  }

  .swipe {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    border-top: 1px solid $bg-color-dark-grey;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    cursor: pointer;
  }

  .swiper {
    width: 200px;
    height: 10px;
    background: $bg-color-dark-grey;
    border: none;
    border-radius: 10px;
    margin-top: 15px;
  }
}

// speed animation stats
.dot {
  position: absolute;
  top: 94px;
  left: 83px;
  width: 30px;
  height: 30px;
  background: $white;
  border: 4px solid;
  border-radius: 50%;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-name: orbit;
  animation-duration: 2s;
}
.circle,
.circle2 {
  width: 200px;
  height: 200px;
  position: relative;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 70px;
  background-image: radial-gradient(
      red 0,
      red 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(#00d7a7 0, #00d7a7 50%, transparent 50%, transparent 100%),
    radial-gradient($white 0, $white 60%, transparent 60%),
    conic-gradient(
      orange 10deg,
      #00d7a7 130deg,
      $white 130deg,
      $white 230deg,
      red 230deg,
      orange 360deg
    );
  background-size: 11% 11%, 11% 11%, 100% 100%, 100% 100%;
  background-repeat: no-repeat;
  background-position: 9.2% 82.3%, 90.8% 82.3%, center center, center center;
  border-radius: 50%;
  border-style: none;

  @keyframes orbit {
    0% {
      transform: rotate(0deg) translate(-100px) rotate(0deg);
    }
    100% {
      transform: rotate(160deg) translate(-100px) rotate(-160deg);
    }
  }

  h2 {
    color: $bg-color-dark-grey;
    padding-top: 60px;
  }

  h4 {
    padding-top: 50px;
  }

  .first-interaction {
    width: 300px;
    padding-left: 12px;
  }
}

.circle2 {
  margin-top: 100px;
}

.speed-size {
  font-size: 12px;
}

.speed-600 {
  position: absolute;
  top: -25px;
  left: 92px;
}
.speed-700 {
  position: absolute;
  top: 30px;
  right: -25px;
}
.speed-800 {
  position: absolute;
  top: 130px;
  right: -29px;
}
</style>