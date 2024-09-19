<template>
  <div class="ict-details-container">
    <section class="section__details-ict">
      <h3 class="heading__example"><span class="diamond-shape"></span>人事労務ICT化の一例<span class="diamond-shape"></span></h3>
      <div class="details-section">
        <div
          class="details-section__item"
          v-for="(LaborIctData, index) in LaborIctDatas"
          :key="LaborIctData.id"
        >
          <div class="ict-details-section__content">
            <h4 class="ict-details-section__title">{{ LaborIctData.title }}</h4>
            <p class="ict-details-section__detail" v-html="LaborIctData.detail"></p>
          </div>
          <div class="ict-details-section__image">
            <img class="ict-details__image--image" :src="LaborIctData.image" :alt="LaborIctData.title">
          </div>
        </div>
      </div>
      <div class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th colspan="3" class="table-title">人事労務システム導入支援・実施内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-item">1</td>
              <td class="table-category">現状業務のヒアリング</td>
              <td class="table-content">担当者への業務フローヒアリング<br>就業規則、給与規定から分析</td>
            </tr>
            <tr>
              <td class="table-item">2</td>
              <td class="table-category">新運用案作成</td>
              <td class="table-content">現状業務フローから実現可能なシステム活用運用案を作成</td>
            </tr>
            <tr>
              <td class="table-item">3</td>
              <td class="table-category">初期設定支援</td>
              <td class="table-content">基本設定支援<br>システム活用のための設定支援</td>
            </tr>
            <tr>
              <td class="table-item">4</td>
              <td class="table-category">各システム稼働</td>
              <td class="table-content">人事管理システム稼働支援<br>給与計算稼働検証<br>勤怠管理システム稼働支援<br>年末調整システム稼働支援</td>
            </tr>
            <tr>
              <td class="table-item">5</td>
              <td class="table-category">稼働モニタリング</td>
              <td class="table-content">オンラインでの操作サポート<br>目標設定、進捗管理</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="schedule-container">
        <div class="schedule-header">人事労務システム導入支援：実施スケジュール</div>
        <table class="schedule-table">
            <thead>
              <tr>
                  <th>実施内容</th><th>1-2M</th><th>3-4M</th><th>5-6M</th><th>7-8M</th><th>9-10M</th><th>11-12M</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>現状業務のヒアリング・課題整理</td><td><div class="arrow"></div></td><td ></td><td class="empty-cell"></td><td class="empty-cell"></td><td class="empty-cell"></td><td class="empty-cell"></td>
                </tr>
                <tr>
                  <td>新運用案件作成</td><td ></td><td><div class="arrow short-arrow"></div></td><td ></td><td ></td><td ></td><td ></td>
                </tr>
                <tr>
                  <td>初期設定支援</td><td ></td><td><div class="arrow short-arrow start-half"></div></td><td ></td><td ></td><td ></td><td ></td>
                </tr>
                <tr>
                  <td>人事管理システム稼働</td><td ></td><td ></td><td><div class="arrow short-arrow"></div></td><td ></td><td ></td><td ></td>
                </tr>
                <tr>
                  <td>給与計算システム稼働</td>
                    <td ></td><td ></td><td><div class="arrow short-arrow start-half"></div></td><td ></td><td ></td><td ></td>
                </tr>
                <tr>
                  <td>勤怠管理システム稼働</td>
                    <td ></td><td ></td><td ></td><td><div class="arrow one-half-arrow"></div></td><td></td><td ></td>
                </tr>
                <tr>
                  <td>年末調整システム稼働</td>
                    <td ></td><td ></td><td ></td><td></td><td><div class="arrow one-half-arrow start-half "></div></td><td></td>
                </tr>
            </tbody>
        </table>
    </div>
      <a class="ict-details-contact__link" href="/contact-us">人事労務システムICT化について相談してみる</a>
    </section>
  </div>

</template>

<script>
export default {
  props: {
    LaborIctDatas: {
      type: Array, // 配列としてデータを渡す
      default: () => []
    }
  }
}
</script>

<style scoped>
.ict-details-container {
  display: flex;
  flex-direction: column;
  padding: 100px 200px;
}

.heading__example {
  text-align: center;
}

.diamond-shape {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: black;
  transform: rotate(45deg);
  margin: 0 10px;
}

.details-section__item {
  display: flex;
  margin-top: 50px;
  align-items: start; 
  justify-content: space-between; 
  margin-bottom: 50px;
  opacity: 0; /* 初期状態は透明 */
  transform: translateY(-20px); /* 初期状態は上にずらす */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out; /* アニメーションの設定 */
}

.details-section__item.visible {
  opacity: 1; /* 表示状態 */
  transform: translateY(0); /* 表示状態での位置 */
}

.ict-details-section__content,
.ict-details-section__image {
  width: 50%; 
  box-sizing: border-box; 
}

.ict-details-section__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.ict-details-section__title {
  font-weight: bold;
  font-size: 1.6rem;
}

.ict-details-section__detail {
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.ict-details-section__image {
  width: 100%;
  height: auto;
  flex: 1;
  text-align: center;
}

.ict-details__image--image {
  width: 100%;
  height: auto;
}

.ict-details-contact__link {
  display: block;
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}
.ict-details-contact__link:hover {
  opacity: 0.7;
}

.table-container {
  width: 100%;
  margin-bottom: 20px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.table-title {
  background-color: #003f82;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
}

.table-item {
  width: 5%;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}
.table-category {
  width: 25%;
  padding: 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}

.table-content {
  width: 70%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: left;
}

.schedule-container {
  width: 100%;
  margin: 20px auto;
  padding: 10px;
}
.schedule-header {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}
.schedule-table {
  width: 100%;
  border-collapse: collapse;
}
.schedule-table th, .schedule-table td {
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px 3px;
}
.schedule-table th {
  background-color: #0f407b;
  color: white;
}
.arrow {
  position: relative;
  height: 5px;
  background-color: blue;
}
.arrow:before {
  content: '';
  position: absolute;
  top: -2px;
  right: 0;
  width: 0;
  height: 0;
  border-left: 5px solid blue;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.short-arrow {
  width: 50%; /* 半分の長さ */
}
.start-half {
  margin-left: 50%;
}
.one-half-arrow {
  width: 150%;
}

/* スマホサイズ用のスタイル */
@media screen and (max-width: 767px) {
  .ict-details-container {
    padding: 50px 20px; /* スマホでは内側の余白を狭く */
  }

  .details-section__item {
    flex-direction: column; /* スマホサイズでは縦並び */
    margin-top: 20px; /* アイテム間の余白を狭く */
  }

  .ict-details-section__content,
  .ict-details-section__image {
    width: 100%;
  }

  .ict-details-section__content {
    margin: 0;
    padding: 10px; /* 内側の余白を追加 */
  }

  .ict-details-section__image {
    margin-top: 20px;
  }

  .ict-details-section__title {
    font-size: 1.4rem;
    margin: 0;
    margin-top: 30px;
  }

  .ict-details-section__detail {
    font-size: 1rem;
  }
}

</style>