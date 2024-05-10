<template>
  <div style="width: 100vw" ref="canvasWrapper"></div>
</template>

<script>
import p5 from 'p5';

export default {
  name: 'ArtworkColor',
  mounted() {
    this.sketch = new p5((p) => {
      let colors = ["#ff0000", "#feb30f", "#0aa4f7", "#000000", "#ffffff"];
      let weights = [1, 2, 2, 2, 2];
      let agents = [];
      let nAgents = 500;

      p.setup = () => {
        p.createCanvas(1920, 1080);
        p.colorMode(p.HSB, 360, 100, 100);
        p.rectMode(p.CENTER);
        p.strokeCap(p.SQUARE);
        // p.background(0, 0, 0);

        for (let i = 0; i < nAgents; i++) {
          agents.push(new Agent(p.width * 0.40, p.height * 0.50 + p.randomGaussian() * 20));
          agents.push(new Agent(p.width * 0.60, p.height * 0.50 + p.randomGaussian() * 20));
        }
      };

      p.draw = () => {
        if (p.frameCount > 5000) {
          p.noLoop();
        }

        agents.forEach(agent => {
          agent.update();
        });

        p.stroke(0, 0, 100);
        // p.noFill();
        // p.strokeWeight(20);
        // p.rect(p.width / 2, p.height / 2, 700, 500);
        // p.strokeWeight(2);
        // p.rect(p.width * 0.60, p.height / 2, 1, 500);
        // p.rect(p.width * 0.40, p.height / 2, 1, 500);
      };

      class Agent {
        constructor(x0, y0) {
          this.p = p.createVector(x0, y0);
          this.pOld = p.createVector(this.p.x, this.p.y);
          this.step = 1;
          this.scale = 5;
          this.direction = p.random(0, 1) > 0.5 ? 1 : -1;
          this.color = generateColor(10);
          this.strokeWidth = 5 + 5 * p.sin(p.frameCount);
        }

        update() {
          this.p.x += this.direction * vectorField(this.p.x, this.p.y, this.scale).x * this.step;
          this.p.y += this.direction * vectorField(this.p.x, this.p.y, this.scale).y * this.step;

          if (this.p.x >= p.width / 2 + 800 || this.p.x <= p.width / 2 - 800 ||
              this.p.y <= p.height / 2 - 600 || this.p.y >= p.height / 2 + 600) {
            this.step = 0;
          }

          if (this.p.y < 100 || this.p.y > p.height - 100) {
            this.direction *= -p.random(0.9, 1.1);
          }

          p.strokeWeight(this.strokeWidth);
          p.stroke(this.color);
          p.line(this.pOld.x, this.pOld.y, this.p.x, this.p.y);
          this.pOld.set(this.p);
        }
      }

      function vectorField(x, y, scale) {
        x = p.map(x, 0, p.width, -scale, scale);
        y = p.map(y, 0, p.height, -scale, scale);

        let k1 = 5;
        let k2 = 3;

        let u = p.sin(k1 * y) + p.cos(k2 * y) + p.map(p.noise(x, y), 0, 1, -1, 1);
        let v = p.sin(k2 * x) - p.cos(k1 * x) + p.map(p.noise(x, y), 0, 1, -1, 1);

        if (u <= 0) {
          u = -u;
        }

        return p.createVector(u, v);
      }

      function generateColor(scale) {
        let temp = myRandom(colors, weights);
        return p.color(p.hue(temp) + p.randomGaussian() * scale,
            p.saturation(temp) + p.randomGaussian() * scale,
            p.brightness(temp) - scale,
            p.random(1, 100));
      }

      function myRandom(colors, weights) {
        let sum = weights.reduce((a, b) => a + b, 0);
        let rr = p.random(0, sum);
        for (let j = 0; j < weights.length; j++) {
          if (weights[j] >= rr) {
            return colors[j];
          }
          rr -= weights[j];
        }
      }

    }, this.$refs.canvasWrapper);
  },
  beforeUnmount() {
    this.sketch.remove();
  },
};
</script>

<style scoped>
.p5Canvas {
  width: 90vw;
}

#defaultCanvas0 {
  width: 90vw;
}

/* You can add styles specific to the canvas container here */
</style>
