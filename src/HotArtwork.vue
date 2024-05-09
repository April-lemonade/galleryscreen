<template>
  <div class="container">
    <div class="background">
      <img class="background-img" src="../src/assets/HotArtwork/artwork_img.png" alt=""/>
      <artwork-color style="opacity: 0.5" class="colorBlock"></artwork-color>
    </div>
    <div class="info">
      <div class="info-top">
        <div class="info-top-detail">
          <div class="info-top-detail-title">
            Where is the work located?
          </div>
          <img style="width: 60%;margin-bottom: 3%" src="./assets/HotArtwork/layout.png" alt=""/>
        </div>
        <div class="info-top-detail">
          <div class="info-top-detail-title">
            How many times is the exhibit viewed today?
          </div>
          <div style="display: flex;flex-direction: column;align-items: center">
            <img style="width: 60%;margin-right: 5%" src="./assets/HotArtwork/Viewers.png" alt=""/>
            <div style="font-weight: bold;font-size: 50px;margin-bottom: 3%">197</div>
          </div>
        </div>
        <div class="info-top-detail">
          <div class="info-top-detail-title" style="text-align: left;margin-left: 55%">
            About the work:
          </div>
          <table style="margin-bottom: 3%">
            <tr>
              <td>Name</td>
              <td>Historical Paintings</td>
            </tr>
            <tr>
              <td>Exhibits Contains</td>
              <td>134</td>
            </tr>
            <tr style="color: var(--highlightColor)">
              <td>Popularity</td>
              <td>141256</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="info-mid">
        <div class="info-mid-detail">
          <div class="info-mid-detail-title">
            <p>Popularity Diary</p>
          </div>
          <img style="margin-top: 5%;width: 60%" src="./assets/HotArtwork/PopularityDiary.jpg" alt=""/>
          <div class="info-mid-detail-title" style="margin-top: 20%;width: 100%">
            <p>Topic Colors</p>
          </div>
          <img style="bottom: 5%" src="./assets/HotArtwork/TopicColors.jpg" alt=""/>
        </div>
        <div class="info-mid-detail" style="width: 70%;margin-left: 5%;margin-right: 5%">
          <div style="height: 70%;display: flex;flex-direction: column;justify-content: flex-end;margin-bottom: 5%">
            <div style="font-size: 60px">Susana y los viejos</div>
            <div style="font-size: 40px;font-weight: bold">Crespi, Giuseppe Maria</div>
          </div>
          <div
              style="width: 60%;height: 30%;backdrop-filter: blur(5px);border-radius: 20px;box-shadow: 0 4px 4px rgba(255,255,255,0.15);display: flex;flex-direction: column;align-items: center">
            <div style="font-size: 30px;font-weight: bold;margin-left: 3%;margin-top: 2%;text-align: center">Content
            </div>
            <div
                style="font-size: 15px;font-weight: 100;text-align: left;margin: 3%;line-height: 30px">
              The artwork "Susana y los viejos" by Giuseppe Maria Crespi is a drawing from the 18th century. It is
              executed in sanguine on paper agarbanzado, which is a type of paper that has been treated with a solution
              of alum, gum, and chalk to make it more absorbent. The artwork depicts Susana, who is seated on a
              fountain, surrounded by elderly men.
            </div>
          </div>
        </div>
        <div class="info-mid-detail" style="display: flex;flex-direction: column;align-items: center;">
          <div class="info-mid-detail-title">
            <p>Among All Exhibits</p>
          </div>
          <div style="display: flex;flex-direction: column;align-items: center;gap: 10px;margin-top: 5%">
            <div class="info-mid-detail-title" style="width: 100%">Most Anticipated</div>
            <img style="width: 60%" alt="" :src="HotWork.img"/>
            <div style="font-style: italic">{{ HotWork.title }}</div>
            <div>{{ HotWork.author }}</div>
            <div style="color: #FF8743">Popularity: {{ HotWork.popularity }}</div>
          </div>
          <div style="display: flex;flex-direction: column;align-items: center;gap: 10px;margin-top: 20%">
            <div class="info-mid-detail-title" style="width: 100%">Most Anticipated</div>
            <img style="width: 60%" alt="" :src="LeastHot.img"/>
            <div style="font-style: italic">{{ LeastHot.title }}</div>
            <div>{{ LeastHot.author }}</div>
            <div style="color: #FF8743">Popularity: {{ LeastHot.popularity }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import artworkColor from "@/components/ArtworkColor.vue";

export default {
  name: 'HotArtwork',
  components: {
    artworkColor
  },
  data() {
    return {
      HotWork: {
        title: 'Santa Catalina',
        img: require('./assets/HotArtwork/hotest.jpeg'),
        author: 'Carducho, Vicente',
        popularity: 141256
      },
      LeastHot: {
        title: 'Cabeza de Tiberio / Ara',
        img: require('./assets/HotArtwork/lest.jpeg'),
        author: 'Anónimo',
        popularity: 41323
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  background: transparent;
  font-family: Centaur, serif;
}

body {
  --highlightColor: #FF8743;
  --bgColor: black;
  --lightFontWeight: 200;
}

.container {
  background: black;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
}

.background-img {
  width: 55%;
  position: absolute;
  z-index: 2;
  top: 15%;
}


.info {
  width: 100%;
  color: white;
  position: absolute;
  z-index: 3;
  //overflow: scroll;
}

.info-top {
  display: flex;
  flex-direction: row;
  height: 18vh;
  width: 100%;
  margin-left: 5%;
  align-items: center;
}

.info-top-detail {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
}

.info-top-detail-title {
  width: 100%;
  font-size: 25px;
  text-align: center;
  font-weight: 500;
  margin-top: 5%;
  margin-bottom: 1%;
}

td {
  font-weight: var(--lightFontWeight);
  text-align: left;
  border-right: solid var(--bgColor) 10px;
}

.info-mid {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 5vh;
  height: 70vh;
}

.info-mid-detail {
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //margin-left: 5%;
  text-align: center;
  align-items: center;
}

.info-mid-detail-title {
  width: 40%;
  text-align: center;
  font-weight: var(--lightFontWeight);
  margin-bottom: 3%;
}
</style>