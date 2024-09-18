<template>
  <div class="heading-image__container">
    <img class="heading-image" src="../images/saiyou-image.jpg" alt="採用ページのメイン写真">
    <h2 class="heading-message ">インバウンド事業部&nbsp;新規採用募集</h2>
  </div>
  <section class="section__requirements">
    <div class="container__requirements-image">
      <img class="requirements-image" src="../images/requirements-image.jpg" alt="応募要項の写真">
    </div>
    <div class="container__requirements-content">
      <h4 class="requirements-detail__heading">応募要件</h4>
      <ul class="requirements-content__list">
        <li class="requirements-content--detail">・日本で飲食店の経験があるor現在就労中</li>
        <li class="requirements-content--detail">・海外での生活に興味がある</li>
        <li class="requirements-content--detail">・自身のキャリアを、海外経験を通して高めたい</li>
      </ul>
      <a class="requirements-content--link" href="https://en-gage.net/rallly_saiyo/">新規採用に応募する</a>
    </div>
  </section>
  <section class="section__about-rallly"></section>
  <InbundBusiness />
</template>

<script>
import InbundBusiness from '@/components/InbundBusiness.vue';

export default {
  name: 'SaiyouOverview',
  components: { InbundBusiness },
};
</script>

<style scoped>
.heading-image__container {
  text-align: center;
  position: relative;
}

.heading-image {
  width: 100%;
  filter: brightness(50%);
  height: 800px;
}

.heading-message {
  position: absolute;
  color: white;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  font-size: 3.5rem;
  opacity: 0;
  animation: fadeInUp 2s ease-in-out forwards;
}

.section__requirements {
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
  padding: 0 120px;
}

.container__requirements-image {
  width: 50%;
}

.requirements-image {
  max-width: 100%;
}

.container__requirements-content {
  width: 50%;
  margin-left: 40px;
}

.requirements-detail__heading {
  font-size: 2rem;
  font-weight: bold;
  margin-left: 20px;
}

.requirements-content__list {
  padding: 0;
}

.requirements-content--detail {
  list-style: none;
  font-size: 1.4rem;
  padding-top: 50px;
  font-weight: bold;
  text-align: left;
}

.requirements-content--link {
  display: inline-block;
  color: white;
  background-color: #007BFF;
  font-size: 1.4rem;
  padding: 10px;
  margin-top: 40px;
  width: 100%;
  text-align: center;
  text-decoration: none;
}

.requirements-content--link:hover {
  opacity: 0.7;
}

/* アニメーション */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate(-50%, 20%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .heading-image__container {
    height: 50%;
  }
  .heading-message {
    font-size: 2rem;
  }
  .container__requirements-image,
  .container__requirements-content {
    display: contents;
  }
  .section__requirements {
    flex-direction: column;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
  }

  .container__requirements-image,
  .container__requirements-content {
    width: 100%;
    margin: 0;
    padding: 10px 0;
  }

  .requirements-detail__heading {
    font-size: 2rem;
    order: 1;
  }
  .requirements-image {
    order: 2;
    margin-top: 20px;
  }

  .requirements-content--detail {
    font-size: 1.2rem;
    padding-top: 20px;
    text-align: left;
  }
  .requirements-content__list {
    order: 3;
    margin: 0;
    margin-top: 10px;
  }

  .requirements-content--link {
    font-size: 1.2rem;
    padding: 10px;
    order: 4;
  }
}
</style>
