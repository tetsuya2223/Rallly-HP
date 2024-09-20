<template>
  <div>
    <BusinessOverview />
    <NewsSection :newsItems="newsItems" />
  </div>
</template>

<script>
import NewsSection from '../components/NewsSection.vue';  
import dxImage from '../images/dx-image.png';
import BusinessOverview from './BusinessOverview.vue';

export default {
  components: {
    BusinessOverview,
    NewsSection,
},
  data() {
    return {
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


