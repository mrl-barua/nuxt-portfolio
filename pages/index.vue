<script setup>
import { ref, onMounted } from "vue";

const fullNames = ["MARLO BARUA", "A WEB DEVELOPER", "A SOFTWARE DEVELOPER"];
const animatedName = ref("");
let currentWordIndex = 0;
let currentLetterIndex = 0;
let timeoutId = null; // For managing timeouts

const updateAnimatedName = (action) => {
  if (action === "add") {
    animatedName.value += fullNames[currentWordIndex][currentLetterIndex++];
    timeoutId = setTimeout(() => updateName(), 150);
  } else {
    animatedName.value = animatedName.value.slice(0, -1);
    timeoutId = setTimeout(() => updateName(), 200);
  }
};

const updateName = () => {
  if (currentLetterIndex < fullNames[currentWordIndex].length) {
    updateAnimatedName("add");
  } else if (animatedName.value.length > 0) {
    updateAnimatedName("remove");
  } else {
    moveToNextWord();
  }
};

const moveToNextWord = () => {
  currentWordIndex = (currentWordIndex + 1) % fullNames.length;
  currentLetterIndex = 0;
  timeoutId = setTimeout(() => updateName(), 200);
};

onMounted(() => {
  updateName();
});

onUnmounted(() => {
  clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
});
</script>
<template>
  <section class="col-1"><sidebar /></section>
  <section class="col-11">
    <div class="container-fluid">
      <div class="col-12">
        <div class="centered-content">
          <h2>
            HELLO I AM <span class="moving">{{ animatedName }}</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            porro a quam ipsam alias consequuntur quisquam rem ut ullam eaque et
            perferendis pariatur ipsa ea deserunt soluta laboriosam inventore
            tempora!
          </p>
        </div>
      </div>
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
