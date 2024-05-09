<script>
// import aframeScene from "@/components/AframeScene.vue";

export default {
  name: 'mainPage',
  components: {
    // aframeScene
  },
  mounted() {
    // const scene = document.querySelector('a-scene'); // 获取场景元素
    // const modelEntity = document.createElement('a-entity'); // 创建模型实体元素
    // modelEntity.setAttribute('gltf-model', '../assets/3dShading.glb'); // 设置模型文件路径
    // scene.appendChild(modelEntity); // 将模型实体添加到场景中
  }
}
</script>

<template>
  <div style="width: 100vw;height: 100vh">
    <!--    <aframe-scene></aframe-scene>-->
    <img style="position: absolute;z-index: 1" src="./assets/xuanzhuan.png" alt=""/>
    <div
        style="position: relative;z-index: 2;display: flex;color: white;top: 5%;left: 5%;flex-direction: column;width: 80%">
      <div style="font-size: 70px;width: 40%;font-weight: bold">Exhibition Hall Overview</div>
    </div>
    <div style="position: relative;z-index: 2;display: flex;color: white;top: 5%;left: 3%;flex-direction: column">
      <div style="display: flex;flex-direction: row;margin-top: 3%;gap: 1%">
        <img src="./assets/button.png" alt=""/>
        <div style="display: flex;flex-direction: column">
          <div style="width: 53%;font-size: 30px">There are a total of 18 exhibition halls on the second floor of the
            exhibition hall
          </div>
          <div style="display: flex;flex-direction: row;margin-top: 2%;align-items: center">
            <p style="font-size: 60px">9&nbsp;&nbsp;</p>
            <div style="width: 45%;font-size: 30px;">exhibitions are currently opening</div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Centaur, serif;
  background: transparent;
}
</style>