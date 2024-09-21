<template>
  <div class="inbound-service">
    <h1 class="inbound-service__heading">当社の総合インバウンド事業について</h1>
    <div class="section-inbound-service__massage">
      <img src="../images/inboundService-1.jpg" alt="インバウンド事業の写真" class="inbound-service__massage--image">
      <h3 class="inbound-service__massage--message">
        観光地&times;飲食&times;インバウンドを専門領域とする、<br>総合インバウンド事業を展開しております。<br><br>
        インバウンド向けに取り組みたい観光地の飲食店様や、<br>日本で特別な体験をしたい外国人旅行者に対しての<br>総合的なインバウンド事業を行なっております。
      </h3>
    </div>
    <div class="inbound-service-section">
      <div class="inbound-service__item">
        <div class="inbound-service__image">
          <img src="../images/inbound-service-1.jpg" alt="インバウンド事業の写真" class="inbound-service__image--image">
        </div>
        <div class="inbound-service__content">
          <h4 class="inbound-service__content--title">飲食店インバウンドコンサルティング</h4>
          <p class="inbound-service__content--description">
            外国人旅行者を新規で獲得したい国内の飲食店を対象に、マーケティングから、人材育成、人材リソースの提供までをトータルサポートしております。
          </p>
          <router-link  class="inbound-service__content--link" to="/contact-us">サービスを問い合わせる</router-link>
        </div>
      </div>
      <div class="inbound-service__item">
        <div class="inbound-service__content">
          <h4 class="inbound-service__content--title">旅行客コンシェルジュサービス</h4>
          <p class="inbound-service__content--description">
            日本への旅行者を対象に、海外経験を持つ日本人コンシェルジュが、旅程表の作成から各種手配、緊急時のサポートまでを行なっております。
          </p>
          <router-link class="inbound-service__content--link" to="/contact-us">サービスを問い合わせる</router-link>
        </div>
        <div class="inbound-service__image">
          <img src="../images/inbound-service-2.jpg" alt="インバウンド事業の写真2" class="inbound-service__image--image">
        </div>
      </div>
      <div class="inbound-service__item">
        <div class="inbound-service__image">
          <img src="../images/inbound-service-3.jpg" alt="インバウンド事業の写真3" class="inbound-service__image--image">
        </div>
        <div class="inbound-service__content">
          <h4 class="inbound-service__content--title">海外向けブランディング戦略コンサル</h4>
          <p class="inbound-service__content--description">
            海外向けに情報発信したい企業に対し、弊社の外国人SEスタッフが、企業サイト、LP、SNS等のリブランディングを行います。
          </p>
          <router-link class="inbound-service__content--link" to="/contact-us">サービスを問い合わせる</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'RecruitOverview',
}
</script>

<style scoped>
.inbound-service__heading {
  text-align: center;
  margin-top: 150px;
  margin-bottom: 60px;
  font-size: 2.3rem;
}
.section-inbound-service__massage {
  position: relative;
}
.inbound-service__massage--image {
  width: 100%;
  height: 400px;
  filter: brightness(0.3);
}
.inbound-service__massage--message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-weight: bold;
  line-height: 1.7;
  font-size: 1.4rem;
}
.inbound-service-section {
  padding: 60px;
}
.inbound-service__item {
  display: flex;
  flex-direction: row; 
  margin-top: 80px;
}
.inbound-service__image,
.inbound-service__content {
  width: 50%;
  padding: 0 30px;
}
.inbound-service__content {
  display: flex;
  flex-direction: column;
}
.inbound-service__content--title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-top: 0;
  font-weight: bold;
}
.inbound-service__content--description {
  font-size: 1.2rem;
  line-height: 2;
}
.inbound-service__image--image {
  width: 100%;
  height: auto;
}
.inbound-service__content--link {
  text-align: center;
  padding: 20px;
  background-color: #000;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  box-sizing: border-box;
}
.inbound-service__content--link:hover {
  opacity: 0.7;
}

@media screen and (max-width: 768px) {
  .inbound-service__massage--message {
    font-size: 1.2rem; /* メッセージのフォントサイズを調整 */
    line-height: 1.5;  /* 行間の調整 */
  }
  .inbound-service__item {
    flex-direction: column; 
    align-items: center;
  }

  .inbound-service__image,
  .inbound-service__content {
    width: 100%; /* 幅を100%にして1カラムに */
    padding: 0; /* パディングをリセット */
    margin-top: 20px; /* 画像とコンテンツ間のスペース */
    text-align: center; /* テキストを中央に揃える */
    display: contents;
  }
  .inbound-service__heading {
    font-size: 1.8rem; /* 見出しのサイズを調整 */
    margin-top: 100px;
    margin-bottom: 40px;
    order: 1;
  }
  .inbound-service__image {
    order: 2;
  }


  .inbound-service-section {
    padding: 40px; /* 全体のパディングを調整 */
  }

  .inbound-service__content--title {
    font-size: 1.6rem; /* タイトルのフォントサイズを縮小 */
    order: 1;
    margin-top: 30px;
  }

  .inbound-service__content--description {
    font-size: 1rem; /* 説明文のフォントサイズを縮小 */
    text-align: left;
    order: 4;
  }

  .inbound-service__content--link {
    padding: 15px; /* リンクボタンのパディングを小さく */
    font-size: 1rem; /* リンクのフォントサイズを縮小 */
    order: 5;
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .inbound-service__heading {
    font-size: 1.5rem; /* スマホサイズでさらに小さく */
  }

  .inbound-service-section {
    padding: 20px; /* スマホでは余白をさらに小さく */
  }

  .inbound-service__massage--message {
    font-size: 1rem; /* スマホサイズでさらに小さく */
  }

  .inbound-service__content--description {
    font-size: 0.9rem; /* スマホで説明文のサイズをさらに小さく */
  }

  .inbound-service__content--link {
    padding: 10px; /* スマホではボタンのパディングを縮小 */
  }
}

</style>
