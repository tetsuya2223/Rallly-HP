<template>
  <div>
    <CompanyInfo />
    <MvvSection />
  </div>
</template>

<script>
import CompanyInfo from '../components/CompanyInfo.vue';
import MvvSection from '../components/MvvSection.vue';

export default {
  name: 'AboutCompany',
  components: {
    CompanyInfo,
    MvvSection
  }
}
</script>


