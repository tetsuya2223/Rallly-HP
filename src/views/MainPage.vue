<template>
  <div>
    <ServiceSection :services="services" />
    <NewsSection :newsItems="newsItems" />
  </div>
</template>

<script>
import ServiceSection from '../components/ServiceSection.vue';
import NewsSection from '../components/NewsSection.vue';  
import ictImage from '../images/ict-image.jpg';
import syagaijousisuImage from '../images/syagaijousisu-image.jpg';
import sogoinboundImage from '../images/sogoinbound-image.jpg';
import dxImage from '../images/dx-image.png';

export default {
  components: {
    ServiceSection,
    NewsSection,
  },
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
}
</script>


