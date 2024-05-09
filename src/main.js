import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import AFRAME from 'aframe';
import AFRAMEEXTRAS from 'aframe-extras';
// import THREE from 'three';

// import HotArtwork from "./HotArtwork.vue";

let app = createApp(App);
app.use(router)
app.use(AFRAME)
app.use(AFRAMEEXTRAS)
// app.use(THREE)
app.mount('#app')

// createApp(HotArtwork).mount('#app')
