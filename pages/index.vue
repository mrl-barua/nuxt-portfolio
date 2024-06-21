<script setup>
import { ref, onMounted } from "vue";

const fullNames = ["MARLO BARUA", "WEB DEVELOPER", "SOFTWARE DEVELOPER"];
const animatedName = ref("");
let currentWordIndex = 0; // Index for the current word in the fullNames array
let currentLetterIndex = 0; // Index for the current letter in the current word

onMounted(() => {
  function showLetterByLetter() {
    if (currentLetterIndex < fullNames[currentWordIndex].length) {
      animatedName.value += fullNames[currentWordIndex][currentLetterIndex];
      currentLetterIndex++;
      setTimeout(showLetterByLetter, 150);
    } else {
      // Wait a bit before starting to remove letters
      setTimeout(removeLetterByLetter, 150);
    }
  }

  function removeLetterByLetter() {
    if (animatedName.value.length > 0) {
      animatedName.value = animatedName.value.substring(
        0,
        animatedName.value.length - 1
      );
      setTimeout(removeLetterByLetter, 200);
    } else {
      // Move to the next word or loop back to the first word
      currentWordIndex = (currentWordIndex + 1) % fullNames.length;
      currentLetterIndex = 0; // Reset letter index for the new word
      setTimeout(showLetterByLetter, 200); // Start showing the next word
    }
  }

  showLetterByLetter();
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
  border: 1px solid red;
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

.container {
  height: 100vh;
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
