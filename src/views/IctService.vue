<template>
  <AboutIctSection :aboutIctDatas="AboutIcts" />
  <h1 class="details-ict__heading">ICTコンサルティング事業詳細</h1>
  <LaborIctSection :LaborIctDatas="LaborIcts" />
  <AccountingIctSection :AccountingIctDatas="AccountingIcts" />
</template>

<script>
import AboutIctSection from '@/components/AboutIct.vue';
import ict1 from '@/images/ict-1.png';
import ict2 from '@/images/ict-2.png';
import ict3 from '@/images/ict-3.png';
import LaborIctSection from '@/components/LaborIct.vue';
import labor1 from '@/images/labor-1.png';
import labor2 from '@/images/labor-2.png';
import labor3 from '@/images/labor-3.png';
import AccountingIctSection from '@/components/AccountingIct.vue';
import accounting1 from '@/images/accounting-1.png';
import accounting2 from '@/images/accounting-2.png';


export default {
  name: 'IctService',
  components: {
    AboutIctSection, 
    LaborIctSection,
    AccountingIctSection
  },
  data() {
    return {
      AboutIcts: [
        {
          id: 1,
          title: 'ヒアリングによる課題の整理',
          image: ict1,
          detail: `
            経理や人事労務などの業務についてヒアリングを行い、お客様の現状の業務フローを丁寧に可視化した上で、課題を把握します。
          `,
        },
        {
          id: 2,
          title: '実現可能なシステム運用案の作成',
          image: ict2,
          detail: `
            システム導入の成功には、業務フローの再設計が不可欠です。私たちは負荷を減らしながら、最適な運用案を提供します。
          `,
        },
        {
          id: 3,
          title: '稼働安定化までの伴走型支援',
          image: ict3,
          detail: `
            システム導入後の安定運用までサポートを提供します。私たちの役割は、お客様の課題を解決することです。
          `,
        },
      ],
      LaborIcts: [
        {
          id: 1,
          title: '人事データベースの構築支援',
          image: labor1,
          detail: `
          従業員の入退社管理、勤怠管理、給与計算等、人事労務に係る業務において、必ず従業員データが必要になります。<br>
          必要な従業員データを明確にし、保有しているデータをもとに、データベース構築の支援をいたします。
          `,
        },
        {
          id: 2,
          title: '勤怠管理システムの導入支援',
          image: labor2,
          detail: `
          デジタルタイムレコーダーによる打刻管理、クラウドシステムでのシフト作成や有給休暇管理などを実現いたします。<br>
          変形労働時間制、フレックスタイム制など、多様な働き方の会社で導入支援をしております。働き改革への対応をICT化で支援いたします。
          `,
        },
        {
          id: 3,
          title: '給与明細、年末調整の電子化支援',
          image: labor3,
          detail: `
          手間がかかる給与明細の印刷封入作業や、煩雑な紙の年末調整収集・確認作業の電子化を実現いたします。<br>
          電子化のために必要な作業をリードし、ご担当者様の電子化初年度の不安をなくすため、丁寧にサポートいたします。
          `,
        }
      ],
      AccountingIcts: [
        {
          id: 1,
          title: '会計システムの導入支援',
          image: accounting1,
          detail: `
          月次試算表作成の早期化、資金繰り予測の見える化、財務分析の高度化を実現したい企業に、会計システムの導入支援を実施しております。<br>
          初期設定や、前年度仕訳データのインポートなど、稼働に向けたサポートに加え、システムになれるまでの運用サポートを実施しています。
          `,
        },
        {
          id: 2,
          title: 'インボイス・電子帳簿保存法への対応支援',
          image: accounting2,
          detail: `
          現在の業務フローを大きく変えず、インボイス・電子帳簿保存法に対応するための支援を実施いたします。
          制度概要を確認しただけではわからない会社独自のルールなどは、他社実績や国税庁からの回答をもとに適切に運用ルールをご提案させていただきます。
          `,
        },
      ]
    }
  },
  mounted() {
    // 各サービスアイテムに対してIntersection Observerを設定
    const items = document.querySelectorAll('.ict-section__item, .details-section__item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.08 // 要素が少しでも見える時に発火
    });

    items.forEach(item => {
      observer.observe(item);
    });
  },
}
</script>

<style scoped>
.details-ict__heading{
  font-weight: bold;
  font-size: 2.4rem;
  text-align: center;
  margin-top: 50px;
}
</style>