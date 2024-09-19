<template>
  <div class="company-info-container">
    <section class="company-info">
      <h1 class="company-info__title">会社概要</h1>
      <div class="company-info__container">
        <div class="company-info__item">
          <span class="company-info__item--label">会社名</span>
          <span class="company-info__item--value">Rallly株式会社</span>
        </div>
        <div class="company-info__item">
          <span class="company-info__item--label">住所</span>
          <span class="company-info__item--value">〒604-8074<br>京都府京都市中京区富小路通三条下る朝倉町<br>５３４番地バウハウス富小路三条４０１号室</span>
        </div>
        <div class="company-info__item">
          <span class="company-info__item--label">主たる事業所</span>
          <span class="company-info__item--value">〒231-0033<br>横浜市中区長者町3丁目8-13TK関内プラザ304A</span>
        </div>
        <div class="company-info__item">
          <span class="company-info__item--label">代表取締役</span>
          <span class="company-info__item--value">茂木&nbsp;竜汰</span>
        </div>
        <div class="company-info__item">
          <span class="company-info__item--label">事業内容</span>
          <span class="company-info__item--value">コンサルティング事業</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CompanyInfo',
}
</script>


<style scoped>
.company-info {
padding-top: 136px;
font-size: 24px;
text-align: center;
}

.company-info__title {
font-size: 40px;
font-weight: bold;
letter-spacing: 4.8px;
text-align: center;
}

.company-info__container {
width: fit-content;
margin: 0 auto;
margin-top: 100px;
}

.company-info__item {
display: flex;
justify-content: space-between;
padding: 50px 0;
margin: 0 auto;
border-bottom: 0.5px solid #e7e0da ;
border-top: 0.5px solid #e7e0da  ;
align-items: center;
}

.company-info__item--label {
width: 160px;
text-align: left;
opacity: 0.7;
}

.company-info__item--value {
flex: 1;
text-align: left;
margin-left: 100px;
align-items: center;
}

/* アクセス*/
.access-info {
padding-top: 120px;
padding-bottom: 120px;
display: flex;
flex-direction: column;
text-align: center;
}

.access-info__title {
font-size: 40px;
font-weight: bold;
letter-spacing: 4.8px;
text-align: center;
}

.access-info__item {
padding-top: 120px;
}

.access-info__item--label {
font-size: 32px;
letter-spacing: 6.4px;
}

.circle-indicator {
display: inline-block;
width: 20px;
height: 20px;
background-color: #fd9603;
border-radius: 50%;
margin-right: 15px;
}

.access-info__item--map {
margin-top: 64px;
padding: 0 80px 0 80px;
width: 100%;
}

.access-info__item--address {
display: inline-block;
margin-top: 32px;
font-size: 24px;
}

@media (max-width: 767px) {
/* 会社概要*/
.company-info {
  padding-top: 48px;
  font-size: 14px;
}

.company-info__title {
  font-size: 20px;
}

.company-info__container {
  width: fit-content;
  margin: 0 auto;
  margin-top: 40px;
  padding: 30px;
}

.company-info__item {
  padding: 10px;
  margin: 0 auto;
}

.company-info__item--label {
  width: 80px;
}

/* アクセス*/
.access-info {
  padding-top: 48px;
  padding-bottom: 40px;
}

.access-info__title {
  font-size: 20px;
}

.access-info__item {
  padding-top: 40px;
  display: grid;
}

.access-info__item--label {
  font-size: 16px;
}

.circle-indicator {
  width: 10px;
  height: 10px;
  margin-right: 10px;
}

.access-info__item--map {
  display: inline-block;
  width: 100%;
  padding: 0;
  margin-top: 16px;
  height: 230px;
  grid-row: 3;
}

.access-info__item--address {
  margin-top: 24px;
  font-size: 14px;
  grid-row: 2;
}
}

</style>