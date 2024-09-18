<template>
  <article class="service-container">
    <h2 class="service-container__title">BUSINESS</h2>
    <h5 class="service-container__sub-title">事業内容</h5>
    <div class="service-section">
      <div
        class="services-section__item"
        v-for="(service, index) in services"
        :key="service.id"
        :class="{'reverse-layout': index % 2 === 1}"
        ref="serviceItems"
      >
        <div class="services-section__content">
          <h4 class="services-section__title">{{ service.title }}</h4>
          <p class="services-section__detail" v-html="service.detail"></p>
          <a class="service-section--link" :href="service.link">詳しくはこちら<span class="link-arrow">></span></a>
        </div>
        <div class="services-section__image">
          <img class="services-section__image--image" :src="service.image" :alt="service.title">
        </div>
      </div>
    </div>
  </article>  
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      required: true,
    }
  },
  name: 'ServiceSection',
  mounted() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.08
  });

  this.$refs.serviceItems.forEach(item => {
    observer.observe(item);
  });
}
}

</script>

<style scoped>
/*事業内容コンテナ*/
.service-container {
  display: flex;
  flex-direction: column;
  padding: 100px 100px;
}
.service-container__title {
  font-weight: bold;
  font-size: 5.4rem;
}
.service-container__sub-title {
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: 5px;
}

.services-section__item {
  display: flex;
  margin-top: 100px;
  align-items: start; 
  justify-content: space-between; 
  margin-bottom: 100px;
  opacity: 0; /* 初期状態は透明 */
  transform: translateY(20px); /* 初期状態は上にずらす */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out; /* アニメーションの設定 */
}

.services-section__item.visible {
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

.services-section__item.reverse-layout {
  flex-direction: row-reverse;
}

.services-section__content,
.services-section__image {
  width: 50%; 
  box-sizing: border-box; 
}

.services-section__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 50px;
}

.services-section__title {
  font-weight: bold;
  font-size: 1.6rem;
}

.services-section__detail {
  margin-top: 40px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.services-section__image {
  max-width: 100%;
  height: auto;
  flex: 1;
}

.services-section__image--image {
  max-width: 100%;
  height: auto;
}

.service-section--link {
  color: white;
  background-color: black;
  width: fit-content;
  padding: 15px;
  text-align: center;
  margin-top: 20px;
}

.service-section--link:hover {
  opacity: 0.7;
  text-decoration: none;
}

.link-arrow {
  margin-left: 30px;
  margin-right: 10px;
}

/* スマホサイズ用のスタイル */
@media screen and (max-width: 767px) {
  .service-container {
    padding: 50px 20px; /* スマホでは内側の余白を狭く */
  }

  .service-container__title {
    font-size: 2.5rem; /* スマホではタイトルのフォントサイズを小さく */
  }

  .service-container__sub-title {
    font-size: 1.2rem; /* サブタイトルのフォントサイズを小さく */
  }
  .services-section__item.visible {
    margin-bottom: 30px;
  }

  .services-section__item {
    flex-direction: column; /* スマホサイズでは縦並び */
    margin-top: 20px; /* アイテム間の余白を狭く */
  }
  .services-section__content,
  .services-section__image {
    width: 100%;
  }
  .services-section__item.reverse-layout {
    flex-direction: column; /* スマホサイズでは縦並び */
    margin-top: 20px;
  }
  .services-section__content {
    order: 2; /* サービス内容を後に表示 */
  }
  .services-section__image {
    order: 1; /* 画像を先に表示 */
    margin-top: 20px; /* 画像の上部の余白を追加 */
  }
  .services-section__content {
    margin: 0; /* 横の余白をなくす */
    padding: 10px; /* 内側の余白を追加 */
  }
  .services-section__title {
    font-size: 1.4rem; /* サービスタイトルのフォントサイズを小さく */
    margin: 0;
    margin-top: 30px;
  }
  .services-section__detail {
    font-size: 1rem; /* 詳細のフォントサイズを小さく */
  }
  .services-section__image {
    margin-top: 20px; /* 画像の上部の余白を追加 */
  }
  .service-section--link {
    font-size: 1rem; /* リンクのフォントサイズを小さく */
    padding: 10px; /* リンクの内側の余白を調整 */
  }
}

</style>