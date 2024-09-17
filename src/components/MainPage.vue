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

  <section class="news-section">
    <h2 class="news-section__title">INFOMATION</h2>
    <h5 class="news-section__sub-title">お知らせ</h5>
    <div class="news-cards-wrapper">
      <div
        class="news-card"
        v-for="(news, index) in newsItems"
        :key="index"
      >
        <a :href="news.link" class="news-card__link">
          <img class="news-card__image" :src="news.image" :alt="news.title">
          <p class="news-card__date">{{ formatDate(news.date) }}</p> 
          <div class="news-card__content">
            <h3 class="news-card__title">{{ news.title }}</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ictImage from '../images/ict-image.jpg';
import syagaijousisuImage from '../images/syagaijousisu-image.jpg';
import sogoinboundImage from '../images/sogoinbound-image.jpg';
import dxImage from '../images/dx-image.png';

export default {
  name: 'ServiceSection',
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'ICT化コンサルティング事業',
          image: ictImage,
          detail: `
            クラウドシステムの導入支援コンサルティングです。
            <br>クラウドの利便性を最大限活用するために、現状のヒアリングと各社に合わせた運用案の作成に重きを置いたコンサルティングを実施しています。
            <br>初期設定〜データインポートなどのテクニカルなサポートから、稼働安定までを伴走サポートさせていただきます。
          `,
          link: '#'
        },
        {
          id: 2,
          title: '社外情報システム事業',
          image: syagaijousisuImage,
          detail: `
          情報システム部門のアウトソーシングサービスです。<br>
          IT全般に関する相談サービス、システム業務のBPO、自社WEBサイトの保守運用など、幅広く対応しております。<br>
          どのようなサポートが必要かをヒアリングさせていただき、必要最低限のアウトソーシングを提供いたします。
          `,
          link: '#'
        },
        {
          id: 3,
          title: '総合インバウンド事業',
          image: sogoinboundImage,
          detail: `
          観光地&times;飲食&times;インバウンドを専門領域とする、
          総合インバウンド事業を展開しております。<br>
          インバウンド向けに取り組みたい観光地の飲食店様や、日本で特別な体験をしたい外国人旅行者に対しての総合的なインバウンド事業を行なっております。
          `,
          link: '#'
        },
      ],
      newsItems: [
        {
          title: '中小企業のためのDX戦略',
          image: dxImage,
          link: '#',
          date: '2024-09-17'
        },
      ]
    };
  },
  mounted() {

    // 各サービスアイテムに対してIntersection Observerを設定
    const items = document.querySelectorAll('.services-section__item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.08 // 要素が少しでも見える時に発火
    });

    items.forEach(item => {
      observer.observe(item);
    });
  },

  methods: {
  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options); // 日付をフォーマット
    }
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

/*お知らせコンテナ*/
.news-section {
  align-items: start; 
  padding: 100px 100px;
  padding-top: 0;
}

.news-section__title {
  font-size: 5.4rem;
  font-weight: bold;
  align-items: start; 
}
.news-section__sub-title {
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: 5px;
  align-items: start; 
}

/* 横スクロールを可能にするラッパー */
.news-cards-wrapper {
  display: flex;
  overflow-x: auto;
  margin-top: 40px;
  scroll-snap-type: x mandatory; /* スナップスクロールを有効化 */
  gap: 20px;
  padding-bottom: 20px;
}

.news-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  scroll-snap-align: start; /* スナップポイントをカードの開始位置に設定 */
  flex-shrink: 0; /* カードのサイズが小さくならないように */
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-10px);
}

.news-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-card__content {
  padding: 20px;
  padding-top: 0;
}
.news-card__date {
  padding: 10px;
}

.news-card__title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
}


.news-card__link {
  font-size: 1rem;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  color: #333333;
}

.news-card__link:hover {
  opacity: 0.7;
}
@media screen and (max-width: 767px) {
/* 事業内容セクション */
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

/* 各サービスアイテム */
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
/* サービス内容と画像の順序を調整 */
.services-section__content {
  order: 2; /* サービス内容を後に表示 */
}

.services-section__image {
  order: 1; /* 画像を先に表示 */
  margin-top: 20px; /* 画像の上部の余白を追加 */
}

/* サービス内容 */
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

/* サービス画像 */
.services-section__image {
  margin-top: 20px; /* 画像の上部の余白を追加 */
}

/* リンク */
.service-section--link {
  font-size: 1rem; /* リンクのフォントサイズを小さく */
  padding: 10px; /* リンクの内側の余白を調整 */
}

/* お知らせセクション */
.news-section {
  padding: 50px 20px; /* スマホでは内側の余白を狭く */
}

.news-section__title {
  font-size: 2.5rem; /* スマホではタイトルのフォントサイズを小さく */
}

.news-section__sub-title {
  font-size: 1.2rem; /* サブタイトルのフォントサイズを小さく */
}

/* ニュースカード */
.news-cards-wrapper {
  flex-direction: column; /* スマホサイズでは縦並び */
  gap: 10px; /* カード間の余白を狭く */
  overflow-x: hidden; /* 横スクロールを無効化 */
}

.news-card {
  width: 100%; /* カードの幅を全体に広げる */
  height: auto; /* 高さを自動調整 */
}

.news-card__image {
  height: 150px; /* 画像の高さを調整 */
}

/* 日付とタイトル */
.news-card__date {
  font-size: 0.9rem; /* 日付のフォントサイズを小さく */
}

.news-card__title {
  font-size: 1.2rem; /* タイトルのフォントサイズを小さく */
}

}
</style>
