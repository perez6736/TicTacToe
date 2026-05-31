<template>
  <section>
    <div class="menu-container">
      <div class="top-left item">Tic</div>
      <div class="top-middle item">Tac</div>
      <div class="top-right item">Toe</div>
      <div
        class="middle-left item menu-button"
        v-if="!showDifficulties"
        @click="clickPlayer1"
      >
        1 Player
      </div>
      <div class="middle-left item menu-button" v-else>Easy</div>
      <div class="middle-middle item" v-if="!showDifficulties"></div>
      <div class="middle-middle item menu-button" v-else>Medium</div>
      <div
        class="middle-right item menu-button"
        v-if="!showDifficulties"
        @click="clickPlayer2"
      >
        2 Player
      </div>
      <div class="middle-right item menu-button" v-else>Hard</div>
      <div class="bottom-left item"></div>
      <div class="bottom-middle item"></div>
      <div class="bottom-right item"></div>

      <!-- <div class="menu-title">Tic Tac Toe</div>
      <div class="menu-options">
        <div class="options-container">
          <div class="options-option">1 Player</div>
          <div class="options-option">2 Player</div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { showDifficulties: false };
  },
  methods: {
    clickPlayer1() {
      this.showDifficulties = !this.showDifficulties;
    },
    clickPlayer2() {
      // start game with 2 players
    },
  },
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
