<template>
  <div class="ict-container">
    <section class="section__about-ict">
      <h1 class="about-ict__heading">当社のICTコンサルティングについて</h1>
      <div class="ict-section">
        <div
          class="ict-section__item"
          v-for="(aboutIctData, index) in aboutIctDatas"
          :key="aboutIctData.id"
          :class="{'ict-reverse-layout': index % 2 === 1}"
        >
          <div class="ict-section__content">
            <h4 class="ict-section__title">{{ aboutIctData.title }}</h4>
            <p class="ict-section__detail" v-html="aboutIctData.detail"></p>
          </div>
          <div class="ict-section__image">
            <img class="ict__image--image" :src="aboutIctData.image" :alt="aboutIctData.title">
          </div>
        </div>
      </div>
    </section>
    <router-link class="ict-contact__link" to="/contact-us">まずはお気軽にご相談ください</router-link>
  </div>
</template>

<script>
export default {
  props: {
    aboutIctDatas: {
      type: Array, // 配列としてデータを渡す
      required: true
    }
  }
}
</script>


<style scoped>
.ict-container {
  display: flex;
  flex-direction: column;
  padding: 100px 200px;
}
.about-ict__heading {
  font-weight: bold;
  font-size: 2.4rem;
  text-align: center;
}
.ict-section__item {
  display: flex;
  margin-top: 100px;
  align-items: start; 
  justify-content: space-between; 
  margin-bottom: 100px;
  opacity: 0; /* 初期状態は透明 */
  transform: translateY(20px); /* 初期状態は上にずらす */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out; /* アニメーションの設定 */
}

.ict-section__item.visible {
  opacity: 1; /* 表示状態 */
  transform: translateY(0); /* 表示状態での位置 */
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ict-reverse-layout {
  flex-direction: row-reverse;
}

.ict-section__content,
.ict-section__image {
  width: 50%; 
  box-sizing: border-box; 
}

.ict-section__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.ict-section__title {
  font-weight: bold;
  font-size: 1.6rem;
}

.ict-section__detail {
  margin-top: 40px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.ict-section__image {
  width: 100%;
  height: auto;
  flex: 1;
  text-align: center;
}

.ict-section__image--image {
  width: 100%;
  height: auto;
}

.ict-contact__link {
  display: block;
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: #000;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  box-sizing: border-box; 
}
.ict-contact__link:hover {
  opacity: 0.7;
}


/* スマホサイズ用のスタイル */
@media screen and (max-width: 767px) {
  .ict-container {
    padding: 50px 20px; /* スマホでは内側の余白を狭く */
  }

  .ict-container__title {
    font-size: 2.5rem; /* スマホではタイトルのフォントサイズを小さく */
  }

  .ict-container__sub-title {
    font-size: 1.2rem; /* サブタイトルのフォントサイズを小さく */
  }
  .ict-section__item.visible {
    margin-bottom: 30px;
  }

  .ict-section__item {
    flex-direction: column; /* スマホサイズでは縦並び */
    margin-top: 20px; /* アイテム間の余白を狭く */
  }
  .ict-section__content,
  .ict-section__image {
    width: 100%;
  }
  .ict-section__item.reverse-layout {
    flex-direction: column; /* スマホサイズでは縦並び */
    margin-top: 20px;
  }
  .ict-section__content {
    order: 2; /* サービス内容を後に表示 */
  }
  .ict-section__image {
    order: 1; /* 画像を先に表示 */
    margin-top: 20px; /* 画像の上部の余白を追加 */
  }
  .ict-section__content {
    margin: 0; /* 横の余白をなくす */
    padding: 10px; /* 内側の余白を追加 */
  }
  .ict-section__title {
    font-size: 1.4rem; /* サービスタイトルのフォントサイズを小さく */
    margin: 0;
    margin-top: 30px;
  }
  .ict-section__detail {
    font-size: 1rem; /* 詳細のフォントサイズを小さく */
  }
  .ict-section__image {
    margin-top: 20px; /* 画像の上部の余白を追加 */
  }
  .ict-section--link {
    font-size: 1rem; /* リンクのフォントサイズを小さく */
    padding: 10px; /* リンクの内側の余白を調整 */
  }
}

</style>