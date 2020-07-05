<template>
  <div class="p5Bg">
    <vue-p5
      class="bgimg"
      @preload="preload"
      @setup="setup"
      @draw="draw"
    ></vue-p5>
    <div class="bg-color" />
  </div>
</template>

<script>
import VueP5 from 'vue-p5';

export default {
  name: 'P5Bg',
  components: {
    'vue-p5': VueP5
  },
  data() {
    return {
      rotateImage: null,
      logoList: ['vue', 'javascript', 'php', 'python', 'markdown'],
      startTime: Date.now(),
      currentTime: Date.now()
    };
  },
  computed: {
    msSinceStart() {
      return this.currentTime - this.startTime;
    },
    logoRotationAngle() {
      return ((this.msSinceStart * 0.0001) % Math.PI) * 8;
    }
  },
  methods: {
    preload(sketch) {
      let rnd = Math.floor(Math.random() * 5);
      this.rotateImage = sketch.loadImage(
        require(`@/assets/${this.logoList[rnd]}.svg`)
      );
    },
    setup(sketch) {
      sketch.createCanvas(
        sketch.windowWidth,
        sketch.windowHeight,
        sketch.WEBGL
      );
    },
    draw(sketch) {
      this.currentTime = Date.now();
      sketch.background(255, 255, 255);
      sketch.texture(this.rotateImage);
      sketch.rotateX(this.logoRotationAngle);
      sketch.rotateY(this.logoRotationAngle);
      sketch.rotateZ(this.logoRotationAngle);
      sketch.beginShape();
      sketch.plane(350, 350);
      sketch.endShape(sketch.CLOSE);
    }
  }
};
</script>

<style scoped>
.bgimg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
}

.bg-color {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(255, 255, 255, 0.935);
}
</style>
