import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import AFRAME from 'aframe';
import AFRAMEEXTRAS from 'aframe-extras';
import anime from "animejs";
// import THREE from 'three';

// import HotArtwork from "./HotArtwork.vue";
import {LMap, LTileLayer, LMarker, LIcon} from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

let app = createApp(App);
app.use(router)
app.use(AFRAME)
app.use(AFRAMEEXTRAS)
app.use(anime)
app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-icon', LIcon);
// app.use(THREE)
app.mount('#app')

// createApp(HotArtwork).mount('#app')
