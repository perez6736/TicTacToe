<template>
  <section>
    Game start!
    <div class="menu-container">
      <div class="top-left item"></div>
      <div class="top-middle item"></div>
      <div class="top-right item"></div>
      <div class="middle-left item"></div>
      <div class="middle-middle item"></div>
      <div class="middle-right item"></div>
      <div class="bottom-left item"></div>
      <div class="bottom-middle item"></div>
      <div class="bottom-right item"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {},
  methods: {},
};
</script>

<style>
body {
  margin: 0;
}
section {
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f3f4f6;
}
.menu-container {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  width: 600px;
  height: 600px;

  background-color: white;
  padding: 2rem;

  border-radius: 12px;

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.1),
    0 4px 10px rgba(0, 0, 0, 0.05);
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  font-weight: bold;
}

.top-left {
  border-right: 2px solid black;
  border-bottom: 2px solid black;
}
.top-middle {
  border-right: 2px solid black;
  border-bottom: 2px solid black;
}
.top-right {
  border-bottom: 2px solid black;
}
.middle-left {
  border-right: 2px solid black;
  border-bottom: 2px solid black;
}
.middle-middle {
  border-right: 2px solid black;
  border-bottom: 2px solid black;
}
.middle-right {
  border-bottom: 2px solid black;
}
.bottom-left {
  border-right: 2px solid black;
}
.bottom-middle {
  border-right: 2px solid black;
}

.menu-button {
  cursor: pointer;
  transition: all 0.2s ease;
}

.menu-button:hover {
  background-color: #f8f8f8;
}
</style>
