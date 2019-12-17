<template>
  <div class="container">
    <div class="boxes">
      <div class="box"></div>
      <div class="second-box"></div>
      <div class="third-box"></div>
    </div>

    <div class="circles">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>

    <button type="button" @click="runAnimations()">Run animation</button>
    <button type="button" id="pause-circles" @click="pauseCircles()">Pause</button>
    <button type="button" id="play-circles" @click="playCircles()">Play</button>
  </div>
</template>

<script>
/* eslint-disable new-cap */
import gsap from 'gsap'
export default {
  data () {
    return {
      circles: null
    }
  },
  methods: {
    runAnimations () {
      const timeline = new gsap.timeline()

      timeline.to('.box', {
        duration: 2,
        x: 200,
        rotation: 90,
        backgroundColor: '#560563',
        ease: 'back'
      })

      gsap.set('.second-box, .third-box', { transformOrigin: '50% 50%' })
      gsap.to('.second-box, .third-box', { duration: 10, rotation: 360 })
      gsap.from('.second-box', { duration: 5, opacity: 0, scale: 0.3, ease: 'back' })

      this.circles = gsap.from('.circle', { duration: 7, opacity: 0, y: 150, stagger: 0.25 })
    },

    pauseCircles () {
      document.querySelector('#pause-circles').onclick = () => this.circles.pause()
    },
    playCircles () {
      document.querySelector('#play-circles').onclick = () => this.circles.play()
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.box,
.second-box,
.third-box {
  height: 60px;
  width: 60px;
}

.box {
  background-color: aqua;
}

.second-box {
  background-color: royalblue;
}

.third-box {
  background-color:green;
}

.circle {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: yellowgreen;
}

button {
  background-color: black;
  color: white;
  margin-top: 20px;
  padding: 10px;
}
</style>
