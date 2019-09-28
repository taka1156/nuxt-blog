<template>
  <div class="p5-bgimage">
    <vue-p5
        @preload="preload"
        @setup="setup"
        @draw="draw"
        class="bgimg"
    >
    </vue-p5>
  </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  name: "p5-example",
  components: {
    "vue-p5": VueP5
  },
  data(){
     return {
        rotateImage: null,
        logoList: ['vue.svg', 'javascript.svg', 'php.svg', 'python.svg', 'markdown.svg'],
        startTime: Date.now(),
        currentTime: Date.now(),
    }
  },
  computed: {
    msSinceStart() {
      return this.currentTime - this.startTime;
    },
    logoRotationAngle() {
      return (this.msSinceStart * 0.0001 % Math.PI * 2)*4;
    }
  },
  methods: {
        preload(sketch) {
            let rnd = Math.floor(Math.random() * 5);
            this.rotateImage = sketch.loadImage(require("static/" + this.logoList[rnd]));
        },

        setup(sketch) {
            sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
        },

        draw(sketch) {
            this.currentTime = Date.now();
            sketch.background(255, 255, 255);
            sketch.texture(this.rotateImage);
            sketch.rotateX(this.logoRotationAngle);
            sketch.rotateY(this.logoRotationAngle);
            sketch.rotateZ(this.logoRotationAngle);
            sketch.beginShape();
            sketch.plane(350,350);
            sketch.endShape(sketch.CLOSE);
        }
    }
};
</script>

<style scoped>
    .bgimg{
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>
