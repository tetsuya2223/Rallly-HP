<template>
  <div class="mvv-section">
    <h2 class="mvv-heading">About&nbsp;Us </h2>
    <h5 class="mvv-heading__ja">私たちについて</h5>
    <img class="mvv-heading__image" src="../images/mvv.jpg" alt="私たちの画像">
    <div class="mvv-item">
      <h2 class="mvv-title">Misson</h2>
      <h5 class="mvv-tittle__ja">使命</h5>
      <p class="mvv-value">自社の付加価値を最大化し、<br>社会に必要な企業となることを目指す。</p>
    </div>
    <div class="mvv-item">
      <h2 class="mvv-title">Vision</h2>
      <h5 class="mvv-tittle__ja">将来像</h5>
      <p class="mvv-value">提供価値を考え変化していく</p>
    </div>
    <div class="mvv-item">
      <h2 class="mvv-title">企業スローガン</h2>
      <p class="mvv-value">共に未来を駆け抜ける、革新と連携の力</p>
    </div>
    <div class="mvv-item">
      <h5 class="mvv-title__small">Message</h5>
      <p class="mvv-message">
        企業理念にもありますが、私たちはお客様、パートナー企業、従業員等、全てのステークホルダーとの会話を通じて、自社として取り組むべきことを考え、必要に応じ変化しながら事業を広げていくことを考えております。<br><br>常に変化していく必要があると強く実感したのは、2020年から猛威を振るった新型コロナウイルスがきっかけです。
        当時私は、金融機関系列の経営コンサルティング会社にて、中小企業のコンサルティングを行なっておりました。新型コロナウイルスによって、多くの企業が大打撃を受けた際、藁にもすがる思いでコンサルティングを求めてきた企業は多くいました。しかし、私は数えるほどの企業しか救えませんでした。事実、私たちが行なっていたコンサルティングは定型化されたものが多く、予測不能の事態においては対応できないサービスとなっていたのです。昨日まで好調だった企業がたった数ヶ月で立ち行かなくなる光景を目にし、どんなにいい事業でも外部環境次第で一変してしまうということを痛感しました。<br><br>予測不能な時代だからこそ、現状に合わせながらやるべきことを変化させていく、その力こそが必要だと感じています。<br><br>会話のラリーを繋げながら、日々変化していく企業として、邁進してまいります。
      </p>
      <p class="ceo-message">Rallly株式会社<br>代表取締役社長&nbsp;&nbsp;茂木&nbsp;竜汰</p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'MvvSection',
  mounted() {
    // すべての mvv-item 要素を取得
    const items = document.querySelectorAll('.mvv-item');

    // Intersection Observer のコールバック
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 画面内に入ったら "visible" クラスを追加
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.3 // 10% 要素が見えたらアニメーション開始
    });

    // 各要素に対して observer を適用
    items.forEach((item) => {
      observer.observe(item);
    });
  }
}
</script>

<style scoped>
.mvv-section {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 100px;
  padding: 0 200px;
}
.mvv-heading {
  margin-bottom: 0;
  font-size: 3rem;
  text-align: left;
}
.mvv-heading__ja {
  font-size: 1rem;
  text-align: left;
  margin-top: 20px;
  font-weight: normal;
}
.mvv-heading__image {
  width: 100%;
  margin-top: 20px;
}
.mvv-item {
  margin: 80px 0;
  opacity: 0; /* 初期状態は透明 */
  transform: translateY(20px); /* 初期状態は少し下にずらす */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out; 
}
.mvv-item.visible {
  opacity: 1; /* 表示される状態 */
  transform: translateY(0); /* 元の位置に戻す */
}
.mvv-title {
  font-size: 2.4rem;
  text-align: left;
  margin-bottom: 20px;
  border-bottom: 1px solid #39393a;
  width: fit-content;
}
.mvv-tittle__ja {
  font-size: 1rem;
  text-align: left;
  margin-top: 20px;
  font-weight: normal;
}
.mvv-value {
  font-size: 2.6rem;
  margin-top: 40px;
  font-weight: bold;
}
.mvv-title__small {
  font-size: 1.4rem;
  text-align: left;
  margin-bottom: 20px;
  font-weight: bold;
  border-bottom: 1px solid #39393a;
  width: fit-content;
}
.mvv-message {
  padding: 50px 100px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 2;
}
.ceo-message {
  text-align: right;
  padding: 0 100px;
  font-size: 1.2rem;
  line-height: 2;
}
@media (max-width: 1200px) {
  .mvv-section {
    padding: 0 100px;
  }
}

@media (max-width: 768px) {
  .mvv-section {
    padding: 0 50px;
  }

  .mvv-heading {
    font-size: 2.5rem;
  }

  .mvv-value {
    font-size: 2rem;
  }

  .mvv-title {
    font-size: 2rem;
  }

  .mvv-message,
  .ceo-message {
    padding: 50px 20px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .mvv-section {
    padding: 0 20px;
  }

  .mvv-heading {
    font-size: 2rem;
  }

  .mvv-value {
    font-size: 1.6rem;
    margin-top: 40px;
  }

  .mvv-title {
    font-size: 1.6rem;
  }

  .mvv-message,
  .ceo-message {
    padding: 30px 10px;
    font-size: 0.9rem;
  }
}
</style>