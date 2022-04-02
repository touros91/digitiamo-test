<template>
  <div class="circle">
    <div class="dot"></div>
  </div>
</template>


<script>
export default {};
</script>

<style >
.dot {
  position: absolute;
  top: 94px;
  left: 86px;
  width: 30px;
  height: 30px;
  background: white;
  border: 4px solid;
  border-radius: 50%;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-name: orbit;
  animation-duration: 2s;
}
.circle {
  width: 200px;
  height: 200px;
  position: relative;
  top: 50px;
  left: 50px;
  background-image: radial-gradient(
      red 0,
      red 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(#00d7a7 0, #00d7a7 50%, transparent 50%, transparent 100%),
    radial-gradient(white 0, white 60%, transparent 60%),
    conic-gradient(
      orange 10deg,
      #00d7a7 130deg,
      white 130deg,
      white 230deg,
      red 230deg,
      orange 360deg
    );
  background-size: 11% 11%, 11% 11%, 100% 100%, 100% 100%;
  background-repeat: no-repeat;
  background-position: 9.2% 82.3%, 90.8% 82.3%, center center, center center;
  border-radius: 50%;
  border-style: none;
}
@keyframes orbit {
  0% {
    transform: rotate(0deg) translate(-100px) rotate(0deg);
  }
  100% {
    transform: rotate(150deg) translate(-100px) rotate(-150deg);
  }
}
</style>