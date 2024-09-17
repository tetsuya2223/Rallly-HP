<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__column">
        <h4 class="footer__heading" @click="toggleSection('business')" v-if="isMobile">
          事業領域
          <span class="accordion-icon">{{ isOpen.business ? '−' : '+' }}</span>
        </h4>
        <h4 class="footer__heading" v-else>
          事業領域
        </h4>
        <ul :class="['footer__list', { 'is-open': isOpen.business }]" v-show="!isMobile || isOpen.business">
          <li><a href="#">ICTコンサルティング</a></li>
          <li><a href="#">社外情シス</a></li>
          <li><a href="#">総合インバウンド事業</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h4 class="footer__heading" @click="toggleSection('company')" v-if="isMobile">
          会社概要
          <span class="accordion-icon">{{ isOpen.company ? '−' : '+' }}</span>
        </h4>
        <h4 class="footer__heading" v-else>
          会社概要
        </h4>
        <ul :class="['footer__list', { 'is-open': isOpen.company }]" v-show="!isMobile || isOpen.company">
          <li><a href="#">企業情報</a></li>
          <li><a href="#">企業理念</a></li>
          <li><a href="#">代表メッセージ</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <a href="#">
          <h4 class="footer__heading" v-if="isMobile">
            キャリア採用
          </h4>
          <h4 class="footer__heading" v-else>
            キャリア採用
          </h4>
        </a>
      </div>
      <div class="footer__column">
        <a href="#">
          <h4 class="footer__heading" v-if="isMobile">
            お問い合わせ
          </h4>
          <h4 class="footer__heading" v-else>
            お問い合わせ
          </h4>
        </a>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2023. All rights reserved.</p>
    </div>
  </footer>
</template>




<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      isOpen: {
        business: false,
        company: false,
        careers: false,
        contact: false,
      },
      isMobile: false, // スマホ判定用のデータプロパティ
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile); // ウィンドウサイズ変更時にチェック
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile); // クリーンアップ
  },
  methods: {
    toggleSection(section) {
      if (this.isMobile) {
        this.isOpen[section] = !this.isOpen[section];
      }
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 767; // スマホサイズかどうかを判定
    },
  },
};
</script>


<style scoped>
.footer {
  background-color: #fff; 
  padding: 40px 20px; 
}

.footer__container {
  display: flex;
  margin: 0 100px;
}

.footer__column {
  flex: 1;
  margin-bottom: 20px; /* アコーディオン項目間にスペースを追加 */
  overflow: hidden; /* スムーズなアニメーションのために */
  position: relative; /* アイコンの位置調整のため */
}

.footer__column a {
  text-decoration: none;
  color: #222222; 
}

.footer__column a:hover {
  text-decoration: underline;
  opacity: 0.7;
}

.footer__heading {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  cursor: pointer; /* クリック可能を示すためカーソル変更 */
}

.accordion-icon {
  display: none; /* デフォルトでは非表示 */
  position: absolute;
  right: 0;
  font-size: 20px;
  top: 0; /* アイコンの位置調整 */
}

.footer__list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  line-height: 30px;
  max-height: none; /* PCサイズ時には高さ制限なし */
  overflow: visible; /* スクロールを防ぐため */
  transition: max-height 0.3s ease; /* スマホサイズでアコーディオン開閉のアニメーション */
}


.footer__list.is-open {
  max-height: 300px; /* 開いた時の最大高さ（適宜調整） */
}

.footer__list li {
  margin-bottom: 8px;
}

.footer__list a {
  color: #222222; 
  text-decoration: none;
}

.footer__list a:hover {
  text-decoration: underline;
  opacity: 0.7;
}

.footer__bottom {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

@media screen and (max-width: 767px) {
  .footer {
    padding: 40px 30px; 
  }
  .footer__container {
    flex-direction: column;
    margin: 0;
  }
  .footer__heading {
    font-size: 16px;
    font-weight: normal;
  }
  .footer__heading:hover {
    opacity: 0.7;
  }
  .footer__column {
    border-bottom: solid 0.5px #7d7c7c;
  }
  .accordion-icon {
    display: block; /* スマホサイズで表示 */
  }
  .footer__list {
    padding-left: 0;
    max-height: none; /* スマホサイズでアコーディオンの高さを制限しない */
    font-size: 12px;
  }
  .footer__bottom {
    font-size: 12px;
  }
}
</style>
