<template>
  <div style="height: 500px; width: 1000px">
    <l-map :zoom="0" :center="[250, 500]"
           :options="{ crs: L.CRS.Simple, zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false, touchZoom: false, dragging: false }">
      <l-image-overlay :url="imageUrl" :bounds="imageBounds"></l-image-overlay>
      <div v-for="(item,index) in hotArtwork1" :key="index">
        <l-polyline style="background: transparent" :lat-lngs="pathPointsTransformed"></l-polyline>
        <l-marker style="background: transparent" :lat-lng="[540-item.position.y, item.position.x+10]">
          <l-icon style="background: transparent" :icon-url="item.img" :icon-size="[80, 100]" :icon-anchor="[40, 80]"
                  :staticAnchor="[16, 37]"></l-icon>
        </l-marker>
      </div>

    </l-map>
  </div>
</template>
<script>
export default {
  name: 'testView',
  data() {
    return {
      hotArtwork1: [
        {id: '14', position: {x: 692, y: 260}, img: require('@/assets/Group 40.png')},
        {id: '10', position: {x: 760, y: 350}, img: require('@/assets/Group 42.png')},
        {id: '15', position: {x: 465, y: 340}, img: require('@/assets/Group 43.png')},
        {id: '12', position: {x: 295, y: 250}, img: require('@/assets/Group 44.png')},
        {id: '11', position: {x: 190, y: 310}, img: require('@/assets/Group 45.png')}
      ]
    }
  }
}
</script>

<script setup>
import {LMap, LImageOverlay, LMarker, LIcon, LPolyline} from '@vue-leaflet/vue-leaflet';
import {computed, ref} from 'vue';
import L from 'leaflet';

// Example path points
const pathPoints = [
  {x: 500, y: 390},
  {x: 510, y: 380},
  {x: 520, y: 370},
  {x: 515, y: 360},
  {x: 515, y: 350},
  {x: 522, y: 340},
  {x: 532, y: 331},
  {x: 542, y: 325},
  {x: 552, y: 321},
  {x: 562, y: 314},
  {x: 572, y: 316},
  {x: 582, y: 314},
  {x: 592, y: 310},
  {x: 602, y: 310},
  {x: 612, y: 311},
  {x: 622, y: 301},
  {x: 632, y: 291},
  {x: 642, y: 284},
  {x: 651, y: 274},
  {x: 661, y: 264},
  {x: 668, y: 254},
  {x: 674, y: 244},
  {x: 680, y: 234},
  {x: 690, y: 224},
  {x: 700, y: 226},
  {x: 699, y: 236},
  {x: 694, y: 246},
  {x: 684, y: 256},
  {x: 685, y: 255},
  {x: 695, y: 245},
  {x: 702, y: 235},
  {x: 703, y: 225},
  {x: 713, y: 215},
  {x: 723, y: 217},
  {x: 733, y: 212},
  {x: 743, y: 206},
  {x: 753, y: 214},
  {x: 763, y: 220},
  {x: 773, y: 222},
  {x: 781, y: 232},
  {x: 787, y: 242},
  {x: 793, y: 250},
  {x: 803, y: 250},
  {x: 798, y: 251},
  {x: 788, y: 252},
  {x: 778, y: 255},
  {x: 768, y: 253},
  {x: 758, y: 248},
  {x: 750, y: 249},
  {x: 750, y: 239},
  {x: 750, y: 229},
  {x: 750, y: 219},
  {x: 756, y: 209},
  {x: 761, y: 199},
  {x: 770, y: 190},
  {x: 780, y: 193},
  {x: 790, y: 194},
  {x: 800, y: 191},
  {x: 810, y: 190},
  {x: 809, y: 181},
  {x: 799, y: 171},
  {x: 792, y: 161},
  {x: 792, y: 157},
  {x: 782, y: 152},
  {x: 772, y: 152},
  {x: 762, y: 154},
  {x: 752, y: 156},
  {x: 742, y: 158},
  {x: 732, y: 160},
  {x: 722, y: 162},
  {x: 712, y: 162},
  {x: 702, y: 162},
  {x: 692, y: 166},
  {x: 682, y: 166},
  {x: 672, y: 166},
  {x: 662, y: 164},
  {x: 652, y: 152},
  {x: 642, y: 152},
  {x: 632, y: 152},
  {x: 624, y: 161},
  {x: 624, y: 171},
  {x: 624, y: 181},
  {x: 621, y: 191},
  {x: 618, y: 201},
  {x: 617, y: 211},
  {x: 617, y: 221},
  {x: 617, y: 231},
  {x: 620, y: 241},
  {x: 617, y: 251},
  {x: 617, y: 261},
  {x: 618, y: 271},
  {x: 617, y: 281},
  {x: 614, y: 291},
  {x: 604, y: 301},
  {x: 594, y: 310},
  {x: 584, y: 314},
  {x: 574, y: 316},
  {x: 564, y: 315},
  {x: 555, y: 309},
  {x: 545, y: 304},
  {x: 535, y: 300},
  {x: 525, y: 299},
  {x: 518, y: 290},
  {x: 513, y: 280},
  {x: 507, y: 270},
  {x: 502, y: 261},
  {x: 493, y: 255},
  {x: 498, y: 245},
  {x: 493, y: 235},
  {x: 483, y: 228},
  {x: 473, y: 228},
  {x: 468, y: 224},
  {x: 466, y: 214},
  {x: 465, y: 204},
  {x: 474, y: 200},
  {x: 477, y: 200},
  {x: 467, y: 201},
  {x: 457, y: 202},
  {x: 448, y: 208},
  {x: 446, y: 218},
  {x: 443, y: 228},
  {x: 440, y: 238},
  {x: 437, y: 248},
  {x: 428, y: 256},
  {x: 418, y: 257},
  {x: 408, y: 253},
  {x: 400, y: 243},
  {x: 395, y: 233},
  {x: 392, y: 223},
  {x: 391, y: 213},
  {x: 393, y: 216},
  {x: 395, y: 226},
  {x: 398, y: 236},
  {x: 403, y: 246},
  {x: 410, y: 256},
  {x: 417, y: 266},
  {x: 426, y: 276},
  {x: 434, y: 286},
  {x: 442, y: 296},
  {x: 452, y: 306},
  {x: 462, y: 307},
  {x: 472, y: 310},
  {x: 482, y: 312},
  {x: 492, y: 318},
  {x: 494, y: 328},
  {x: 490, y: 338},
  {x: 489, y: 348},
  {x: 489, y: 358},
  {x: 490, y: 368},
  {x: 490, y: 378},
  {x: 498, y: 388}
]


// Transform path points to be used with Leaflet
const pathPointsTransformed = computed(() => {
  return pathPoints.map(point => [540 - point.y, point.x + 10]);
});
// const hotArtwork1 = [
//   {id: '14', position: {x: 692, y: 260}, img: require('@/assets/Group 40.png')},
//   {id: '10', position: {x: 760, y: 350}, img: require('@/assets/Group 42.png')},
//   {id: '15', position: {x: 465, y: 340}, img: require('@/assets/Group 43.png')},
//   {id: '12', position: {x: 295, y: 250}, img: require('@/assets/Group 44.png')},
//   {id: '11', position: {x: 190, y: 310}, img: require('@/assets/Group 45.png')}
// ]

// Use Vue's asset URL handling for the map image and marker icon
const imageUrl = new URL('@/assets/map.jpg', import.meta.url).href;
// const markerIconUrl = new URL('@/assets/HotArtwork/test.jpg', import.meta.url).href; // Change this to your custom marker image path

// Define the bounds of the image on the map
const imageBounds = ref([
  [0, 0],       // Coordinates for the bottom-left corner
  [500, 1000]   // Coordinates for the top-right corner
]);
</script>

<style>
/* Ensure the map container has a defined height and width */
#map {
  height: 100%;
}

svg {
  background: transparent;
}

.leaflet-marker-icon {
  background: transparent;
}
</style>
