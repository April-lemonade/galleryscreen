<template>
  <!--  <map-test></map-test>-->
  <div class="container">
    <div class="left">
      <div>
        <div class="subtitle">
          Path through artwork
        </div>
        <div class="pathInfos">
          <div v-for="(item,key) in paths" :key="key" class="pathInfo">
            <div class="pathColor" :style='{ background: `linear-gradient(${item.color1}, ${item.color2})` }'></div>
            <div v-for="(i,index) in item.content" :key="index"
                 style="word-wrap: normal;font-size: 14px;margin-bottom: 40%;font-family: 'Centaur',serif;font-style: italic">
              {{ i }}
            </div>
          </div>
        </div>
      </div>
      <!--      <div class="subtitle">-->
      <!--        Most Participated-->
      <!--      </div>-->
      <!--      <div style="display: flex;flex-direction: column;align-items: flex-start">-->
      <!--        <div v-for="(item,index) in hotArtworks" :key="index">-->
      <!--          {{ item.id }}&nbsp;&nbsp;{{ item.name }}-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class="right">
      <div style="position: relative;z-index: 2;width: 100%">
        <!--        <map-view></map-view>-->
        <leaf-map></leaf-map>
      </div>
      <div
          style="position: absolute;z-index: 3;bottom: 9%;width: 60vw;display: flex;flex-direction: column;align-items: center;background: transparent">
        <p style="width: 80%;text-align: center; font-size: 60px;font-weight: bold;margin-bottom: 5%;;backdrop-filter: blur(5px);border-radius: 20px;box-shadow: 0 4px 4px rgba(255,255,255,0.15);background: transparent">
          Popular route recommendation
        </p>
        <div class="statistics">
          <div class="reminder">
            <div class="subtitle">What is the name of the route?</div>
            <div v-for="(item,index) in paths" :key="index" class="reminder_content">
              <div style="width: 55px;height: 15px"
                   :style="{ background: `linear-gradient(to left,${item.color1}, ${item.color2})` }"></div>
              <div>{{ item.name }}</div>
            </div>
          </div>
          <div class="reminder">
            <div class="subtitle">What is the proportion of visitors to popular routes?</div>
            <div class="reminder_content">
              <div v-for="(item,index) in paths" :key="index">
                <div
                    :style="{width:`${item.proportion*200}px`,height:`${item.proportion*200}px`,background: `linear-gradient(to left,${item.color1}, ${item.color2})`}"
                    style="border: solid 1px black;border-radius: 200px;text-align: center;align-items: center;display: flex;flex-direction: row;justify-content: center">
                  {{ item.proportion * 100 }}%
                </div>
              </div>
            </div>
          </div>
          <div class="reminder">
            <div class="subtitle">How long does each route take?</div>
            <div v-for="(item,index) in paths" :key="index" class="reminder_content"
                 style="align-items: flex-start;justify-content: flex-start">
              <div style="height: 15px"
                   :style="{ width:`${item.duration/30*200}px`,background: `linear-gradient(to left,${item.color1}, ${item.color2})` }"></div>
            </div>
          </div>
          <div class="reminder">
            <div class="subtitle">Where are the most popular exhibits located?
            </div>
            <img style="width: 30%" src="./assets/locbg.jpg" alt=""/>
            <!--            <div v-for="(item,index) in hotArtworks" :key="index"-->
            <!--                 style="display: flex;flex-direction: column;align-items: flex-start;width: 100%">-->
            <!--              {{ item.id }}&nbsp;&nbsp;{{ item.name }}-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
// import colorSpread from "@/components/ColorSpread.vue";
// import anime from "animejs";
// anime({
//   targets: 'div',
//   translateX: 250,
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 800
// });
import mapTest from "@/components/MapTest.vue";
import leafMap from "@/components/LeafMap.vue";

export default {
  name: 'testView',
  data() {
    return {
      paths: [
        {
          color1: '#B98333',
          color2: '#533B17',
          proportion: 0.4,
          name: 'path1',
          duration: 10,
          content: ['La partida de David', 'Cabeza femenina, de perfil hacia la izquierda', 'San Vicente Ferrer', 'Asta su Abuelo', 'Seis manos', 'Julia Domna', 'Figura femenina y amorcillo sobre nubes', 'Tampoco', 'Florero', 'Santa Catalina']
        },
        {
          color1: '#7297AC',
          color2: '#313D43',
          proportion: 0.2,
          name: 'path2',
          duration: 30,
          content: ['Santa Catalina', 'Los duques de Osuna y sus hijos', 'Florero', 'Tampoco', 'Isabel II, niña', 'Ignacio, hijo del artista'],
        },
        {
          color1: '#4F7C48',
          color2: '#1F301C',
          proportion: 0.3,
          name: 'path3',
          duration: 20,
          content: ['Botella del estuche de aseo de viaje de Fernando VII', 'Chasco, mala fiesta es esta', 'La Torre de las Damas en la Alhambra de Granada', 'Santa Ana, San Joaquín y la Virgen', 'Trece manos', 'Santa Catalina', 'Los duques de Osuna y sus hijos', 'Isabel II, niña', 'Figura femenina y amorcillo sobre nubes']
        }
      ],
      hotArtworks: [
        {id: '14', name: 'Santa Catalina', position: {x: 390, y: 210}, img: require('./assets/HotArtwork/test.jpg')},
        {
          id: '10',
          name: 'Figura femenina y amorcillo sobre nubes',
          position: {x: 493, y: 255},
          img: require('./assets/HotArtwork/test.jpg')
        },
        {
          id: '15',
          name: 'Los duques de Osuna y sus hijosa',
          position: {x: 417, y: 180},
          img: require('./assets/HotArtwork/test.jpg')
        },
        {id: '12', name: 'Tampoco', position: {x: 470, y: 230}, img: require('./assets/HotArtwork/test.jpg')},
        {id: '11', name: 'Isabel II, niña', position: {x: 480, y: 215}, img: require('./assets/HotArtwork/test.jpg')}
      ],
    }
  },
  components: {
    // colorSpread
    mapTest,
    leafMap
  },
}
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

* {
  margin: 0;
  padding: 0;
  font-family: Centaur, serif;
}

.container {
  color: white;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

.left {
  width: 10vw;
  margin-left: 5%;
  margin-right: 3%;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.right {
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
}

.pathInfos {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5%;
}

.pathColor {
  width: 20px;
  height: 95px;
  border-radius: 10px;
  margin-bottom: 20%;
  border: 1px solid black;
}

.subtitle {
  margin-bottom: 10%;
  font-size: 20px;
}

.pathInfo {
  width: 20%;
  display: flex;
  flex-direction: column;
  //align-items: center;
}

.statistics {
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  gap: 5%;
}

.reminder {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reminder_content {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10%;
  margin-bottom: 5%;
  align-items: center;
  justify-content: center;
}
</style>
