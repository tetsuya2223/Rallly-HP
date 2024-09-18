<template>
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

export default {
  props: {
    newsItems: {
      required: true,
    }
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
