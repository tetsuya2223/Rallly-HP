<template>
  <div class="inbound-service-container">
    <h1 class="inbound-service__heading">当社の総合インバウンド事業について</h1>
    <div class="section-inbound-service__massage">
      <img src="../images/inboundService-1.jpg" alt="インバウンド事業の写真" class="inbound-service__massage--image">
      <h3 class="inbound-service__massage--message">
        観光地&times;飲食&times;インバウンドを専門領域とする、<br>総合インバウンド事業を展開しております。<br><br>
        インバウンド向けに取り組みたい観光地の飲食店様や、<br>日本で特別な体験をしたい外国人旅行者に対しての<br>総合的なインバウンド事業を行なっております。
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InboundService',
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
</style>
