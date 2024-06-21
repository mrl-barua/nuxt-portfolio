<script setup></script>
<template>
  <section class="col-1"><sidebar /></section>
  <section class="col-11 content">
    <div class="container-fluid">
      <div class="centered-content"><h2>Projects</h2></div>
    </div>
  </section>
</template>

<style scoped>
/* CSS RESPONSIVE GLOBAL STYLES START */
* {
  box-sizing: border-box;
}

[class*="col-"] {
  float: left;
  /* border: 1px solid red; */
}

.row::after {
  content: "";
  clear: both;
}
h2 {
  margin-bottom: 10px;
  font-size: 46px;
}

p {
  margin: 10px 0;
}

.centered-content {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 100vh;
}
</style>
