<template>
<!--  <a-scene>-->
<!--    <a-assets>-->
<!--      <a-asset-item id="mymodel" src="http://121.40.140.72:8889/debay_copyglass.glb"></a-asset-item>-->
<!--&lt;!&ndash;      <a-asset-item id="mtl-material" src="http://121.40.140.72:8889/3dShadingall.mtl"></a-asset-item>&ndash;&gt;-->
<!--    </a-assets>-->
<!--    &lt;!&ndash;    <a-entity line="start: 0 1 0; end: 2 0 -5; color: red"&ndash;&gt;-->
<!--    &lt;!&ndash;              line__2="start: 0 4 5; end: 0 8 6; color: green"></a-entity>&ndash;&gt;-->
<!--        <a-gltf-model src="#mymodel" position="-0.5 0.5 -3" scale="0.7 0.7 0.7"></a-gltf-model>-->

<!--&lt;!&ndash;    <a-entity obj-model="obj: #mymodel; mtl: #mtl-material" position="0 1.5 -2" scale="0.7 0.7 0.7"></a-entity>&ndash;&gt;-->
<!--    &lt;!&ndash;    <a-entity gltf-model="#my-model" position="0 1.5 -3" scale="2 2 2"></a-entity>&ndash;&gt;-->
<!--    &lt;!&ndash;    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>&ndash;&gt;-->
<!--    &lt;!&ndash;    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>&ndash;&gt;-->
<!--    &lt;!&ndash;    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>&ndash;&gt;-->
<!--    &lt;!&ndash;    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>&ndash;&gt;-->
<!--  </a-scene>-->
  <img src="../assets/xuanzhuan.gif" alt=""/>
</template>
<script>
import 'aframe';
import 'aframe-extras';

export default {
  name: 'AframeScene',
  data() {
    return {
      // modelUrl: require('@/assets/3dShading.glb')
    }
  },
  methods: {}
}
</script>
<style scoped>
a-box {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} </style>