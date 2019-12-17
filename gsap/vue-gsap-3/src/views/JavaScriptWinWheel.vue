<template>
<div class="win-wheel-container">
  <canvas id='canvas' width="500" height="500" @click="startSpin();">
    Canvas not supported, use another browser.
  </canvas>
  <p class="prize" v-if="prize != null">{{ prize }}</p>
</div>
</template>

<script>
// let Winwheel = require('@/assets/js/Winwheel.js')
import Winwheel from '@/assets/js/Winwheel.js'
export default {
  data () {
    return {
      theWheel: null,
      prize: null
    }
  },
  mounted () {
    /* eslint-disable no-new */
    this.theWheel = new Winwheel({
      'numSegments': 8, // Number of segments
      'outerRadius': 212, // The size of the wheel.
      'centerX': 217, // Used to position on the background correctly.
      'centerY': 219,
      'textFontSize': 28, // Font size.
      'responsive': true,
      'segments': // Definition of all the segments.
      [
        { 'fillStyle': '#eae56f', 'text': 'Prize 1' },
        { 'fillStyle': '#89f26e', 'text': 'Prize 2' },
        { 'fillStyle': '#7de6ef', 'text': 'Prize 3' },
        { 'fillStyle': '#e7706f', 'text': 'Prize 4' },
        { 'fillStyle': '#eae56f', 'text': 'Prize 5' },
        { 'fillStyle': '#89f26e', 'text': 'Prize 6' },
        { 'fillStyle': '#7de6ef', 'text': 'Prize 7' },
        { 'fillStyle': '#e7706f', 'text': 'Prize 8' }
      ],
      'animation': // Definition of the animation
      {
        'type': 'spinToStop',
        'duration': 5,
        'spins': 8,
        'callbackFinished': this.displayPrize
      },
      'pointerGuide': // Specify pointer guide properties.
        {
          'display': true,
          'strokeStyle': 'black',
          'lineWidth': 5
        }
    })
  },
  methods: {
    displayPrize (indicatedSegment) {
      this.prize = indicatedSegment.text
    },
    startSpin () {
      this.theWheel.stopAnimation(false)

      // Reset the rotation angle to less than or equal to 360 so spinning again works as expected.
      // Setting to modulus (%) 360 keeps the current position.
      this.theWheel.rotationAngle = this.theWheel.rotationAngle % 360

      // Start animation.
      this.theWheel.startAnimation()
    }
  }
}
</script>

<style>
.win-wheel-container {
  min-height: 100vh;
}
.prize {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
}
</style>
