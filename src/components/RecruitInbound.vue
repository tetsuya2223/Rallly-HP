<template>
  <section class="senction__inbound-business">
    <h2 class="senction__inbound-business--heading">Rally株式会社のインバウンド事業とは</h2>
    <div class="inbound-business__item">
      <div class="inbound-business__content">
        <h4 class="inbound-business__content--heading">観光地✖︎飲食店✖︎インバウンドを専門とする<br>総合インバウンド企業</h4>
        <div class="inbound-business__content--description">
          弊社は、観光地&times;飲食店&times;インバウンドを専門とする総合インバウンド事業を展開しており、大きくは3つの事業部に分かれています。<br><br>
          ①飲食店インバウンドコンサルティング<br>
          外国人旅行者を新規で獲得したい国内の飲食店を対象に、マーケティングから、人材育成、人材リソースの提供までをトータルサポートしております。<br><br>
          ②観光客コンシェルジュサービス<br>
          日本への旅行者を対象に、海外経験を持つ日本人コンシェルジュが、旅程表の作成から各種手配、緊急時のサポートまでを行なっております。<br><br>
          ③海外向けブランディング戦略コンサル<br>
          海外向けに情報発信したい企業に対し、弊社の外国人SEスタッフが、企業サイト、LP、SNS等のリブランディングを行います。
        </div>
      </div> 
      <div class="inbound-business__image">
        <img class="inbound-business__image--image" src="../images/sogoinbound-saiyou-image.jpg" alt="インバウンド事業の写真">
      </div>
    </div>
    <div class="izakayatrip__item">
      <div class="izakayatrip__image">
        <img class="izakayatrip__image--image" src="../images/izakayatrip-image.png" alt="居酒屋トリップの写真">
      </div>
      <div class="izakayatrip__content">
        <h4 class="izakayatrip__content--heading">インバウンド事業のメンバーの研修制度<br>”Izakaya trip program”</h4>
          <div class="izakayatrip__content--description">
            弊社の新規メンバー募集において、英語力や海外経験は一切問いません。弊社独自に開発した”Izakaya Trip Program”を通して、1年半の研修を受けてもらうため、1から知識と経験を身につけることができます。<br><br>
            研修は、国内研修と海外研修の2段階あり、社内メンバーや専門講師が手厚くサポートするため、英語が喋れなくても問題ありません。「海外興味があったけど、一歩踏み出せなかった…」そのな人こそ、ご応募お待ちしております。
          </div>
        </div> 
    </div>
    <div class="section__recruitment-summary">
      <h2 class="recruitment-summary__heading">募集概要</h2>
      <table class="recruitment-summary">
        <thead>
          <tr>
            <th class="summary-header">項目</th>
            <th class="summary-header">詳細</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="recruitment-item">会社名</td><td class="recruitment-detail">Rallly株式会社</td>
          </tr>
          <tr>
            <td class="recruitment-item">業務内容</td>
            <td class="recruitment-detail">総合インバウンド事業業務<br>・飲食店インバウンドコンサルティング<br>・観光客コンシェルジュサービス<br>・海外向けブランディング戦略コンサル</td>
          </tr>
          <tr>
            <td class="recruitment-item">年収</td>
            <td class="recruitment-detail">月給 280,000円 ～ 800,000円<br>（※想定年収 3,360,000円 ～ 9,600,000円）<br>※研修期間 230,000円 ～ 250,000円<br>※試用期間 6ヶ月<br>スキルにより変動あり</td>
          </tr>
          <tr>
            <td class="recruitment-item">休日休暇</td>
            <td class="recruitment-detail">年間休日120日以上<br>夏季休暇<br>年末年始休暇</td>
          </tr>
          <tr><td class="recruitment-item">福利厚生</td><td class="recruitment-detail">国内外研修制度あり<br>資格取得支援手当あり<br>上京支援制度</td></tr>
        </tbody>
      </table>
    </div>
    <a class="recriutment-link" href="https://en-gage.net/rallly_saiyo/work_6890047/?via_recruit_page=1">インバウンド事業部に応募する</a>
  </section>
</template>

<script>
export default {
  name: 'RecruitInbound.',
};
</script>

<style scoped>
/* Inbound Business *//* Inbound Business */
.senction__inbound-business {
  margin-top: 80px;
  padding: 100px;
}

.senction__inbound-business--heading {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

.inbound-business__item {
  display: flex;
  flex-direction: row; /* 通常は横並び */
  margin-top: 80px;
}

.inbound-business__content,
.inbound-business__image {
  width: 50%;
  padding: 0 30px;
}

.inbound-business__content {
  display: flex;
  flex-direction: column;
}

.inbound-business__content--heading {
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-top: 0;
  font-weight: bold;
}

.inbound-business__content--description {
  font-size: 1.2rem;
  line-height: 1.1;
}

.inbound-business__image--image {
  width: 100%;
  height: auto;
}

/* Izakaya Trip Program */
.izakayatrip__item {
  display: flex;
  flex-direction: row; /* 通常は横並び */
  margin-top: 120px;
}

.izakayatrip__content,
.izakayatrip__image {
  width: 50%;
  padding: 0 30px;
}

.izakayatrip__content {
  display: flex;
  flex-direction: column;
}

.izakayatrip__content--heading {
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-top: 0;
  font-weight: bold;
}

.izakayatrip__content--description {
  font-size: 1.2rem;
  line-height: 1.1;
  margin-top: 30px;
}

.izakayatrip__image--image {
  width: 100%;
  height: auto;
}

/* Recruitment Summary */
.section__recruitment-summary {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 100px;
}

.recruitment-summary__heading {
  font-size: 3rem;
  margin-bottom: 30px;
  font-weight: bold;
}

.recruitment-summary {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.summary-header, .recruitment-item, .recruitment-detail {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.summary-header {
  background-color: #000;
  color: white;
  font-weight: bold;
}

.recruitment-detail {
  font-size: 1rem;
  line-height: 1.6;
}

.recriutment-link {
  margin-top: 60px;
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
.recriutment-link:hover {
  opacity: 0.7;
}

/* レスポンシブ対応：スマホサイズで縦並びにする */
@media (max-width: 768px) {
  .senction__inbound-business {
    padding: 20px;
  }
  .senction__inbound-business--heading {
    font-size: 2.2rem;
  }
  .inbound-business__content--heading {
    font-size: 1.8rem;
  }

  /* スマホサイズ時に縦並びに変更 */
  .inbound-business__item,
  .izakayatrip__item {
    flex-direction: column; /* 縦並びにする */
  }

  .inbound-business__content,
  .inbound-business__image,
  .izakayatrip__content,
  .izakayatrip__image {
    width: 100%; /* 幅を100%に */
    padding: 0;
    margin-top: 10px;
    display: contents; 
  }
  .inbound-business__content--heading {
    order: 1;
  }
  .inbound-business__image--image {
    order: 2;
  }
  .inbound-business__content--description {
    order: 3;
    font-size: 1.2rem;
    margin-top: 25px;
  }
  .izakayatrip__item {
    margin-top: 40px;
  }
  .izakayatrip__content--heading {
    order: 1;
  }
  .izakayatrip__image--image {
    order: 2;
  }
  .izakayatrip__content--description {
    order: 3;
    font-size: 1.2rem;
  }
  .recruitment-summary {
    font-size: 0.9rem;
  }
  .recruitment-summary__heading {
    font-size: 2.5rem;
  }

  .summary-header, .recruitment-item, .recruitment-detail {
    padding: 10px;
  }
  .recriutment-link {
    margin-top: 10px;
  }
}
</style>
