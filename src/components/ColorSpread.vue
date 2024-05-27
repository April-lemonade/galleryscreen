<template>
  <div style="align-items: center;display: flex" ref="canvasWrapper" id="canvas-1"></div>
</template>

<script>
import p5 from 'p5';

// const c = document.getElementById("canvas-1");
// const ctx = c.getContext("2d");
// ctx.scale(2,2);
export default {
  name: 'ColorSpread',
  mounted() {
    this.sketch = new p5((p) => {
      let img, paint;
      let STARTX = 0;
      let STARTY = 0;
      let frontier = [];
      let grid = [];
      let colors = [];
      let scale = 6;

      class Vertex {
        constructor(x, y, color = [0, 0, 0, 0]) {
          this.x = x;
          this.y = y;
          this.color = color;
          this.filled = false;
          this.neighbors = [];
        }
      }

      p.preload = () => {
        img = p.loadImage(require('../assets/HotArtwork/sample.jpg'), _img => {
          paint = p.createImage(_img.width, _img.height);
          STARTX = p.int(_img.width / 2);
          STARTY = p.int(_img.height / 2);

          grid = Array.from({length: _img.height}, () =>
              Array.from({length: _img.width}, () => null)
          );

          for (let y = 0; y < _img.height; y++) {
            for (let x = 0; x < _img.width; x++) {
              const color = _img.get(x, y);
              colors.push(color);
              grid[y][x] = new Vertex(x, y, color);
            }
          }

          for (let y = 0; y < _img.height; y++) {
            for (let x = 0; x < _img.width; x++) {
              for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                  let ny = y + dy;
                  let nx = x + dx;
                  if (0 <= ny && ny < _img.height && 0 <= nx && nx < _img.width && (dy !== 0 || dx !== 0)) {
                    grid[y][x].neighbors.push(grid[ny][nx]);
                  }
                }
              }
            }
          }
          colors.reverse();
          paint.loadPixels();
          let startColor = colors.pop();
          paint.set(STARTX, STARTY, startColor);
          paint.updatePixels();
          grid[STARTY][STARTX].filled = true;
          grid[STARTY][STARTX].color = startColor;
          frontier = grid[STARTY][STARTX].neighbors;
        });
      }

      p.setup = () => {
        p.frameRate(Infinity);
        p.createCanvas(img.width * scale, img.height * scale);
        // p.image(img, 0, 0);
      }

      p.draw = () => {
        if (!frontier.length || colors.length === 0) return;
        // console.log("11")
        let c = colors.pop();
        let minDiff = Infinity;
        let bestPixel = null;

        for (let i = 0; i < frontier.length; i++) {
          let p = frontier[i];
          let diff = calcMin(p, c);
          if (diff < minDiff) {
            minDiff = diff;
            bestPixel = p;
          }
        }

        if (bestPixel) {
          paint.loadPixels();
          paint.set(bestPixel.x, bestPixel.y, c);
          paint.updatePixels();

          grid[bestPixel.y][bestPixel.x].color = c;
          grid[bestPixel.y][bestPixel.x].filled = true;

          frontier = frontier.filter(item => item !== bestPixel);
          for (let neighbor of bestPixel.neighbors) {
            if (!neighbor.filled && !frontier.includes(neighbor)) {
              frontier.push(neighbor);
            }
          }
        }
        p.scale(scale);
        p.image(paint, 0, 0);

      }

      function calcMin(pixel, c) {
        const diffs = pixel.neighbors.filter(n => n.filled).map(n => colorDiff(c, n.color));
        return Math.min(...diffs);
      }

      function colorDiff(c1, c2) {
        const rMean = (c1[0] + c2[0]) / 2;
        const r = c1[0] - c2[0];
        const g = c1[1] - c2[1];
        const b = c1[2] - c2[2];
        return Math.sqrt((((512 + rMean) * r * r) >> 8) + 4 * g * g + (((767 - rMean) * b * b) >> 8));
      }

    }, this.$refs.canvasWrapper);


  }
  ,
  beforeUnmount() {
    this.sketch.remove();
  },
}
</script>

<style scoped>

</style>