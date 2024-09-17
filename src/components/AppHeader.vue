<template>
  <header :class="headerClass">
    <div class="header-container">
      <router-link to="/" class="header__logo-link">
        <img class="header-logo" src="../images/company-logo.png" alt="Company Logo">
      </router-link>
        <nav class="nav-menu">
          <ul class="nav-menu__list">
            <li v-for="(item, index) in menuItems" :key="index" class="nav-menu__item nav-menu__item--dropdown">
              <router-link :to="item.href" class="nav-menu__link">
                {{ item.title }}<span v-if="item.dropdown" class="dropdown-arrow"></span>
              </router-link>
              <ul v-if="item.dropdown" class="nav-menu__dropdown">
                <li v-for="(subItem, subIndex) in item.dropdown" :key="subIndex" class="nav-menu__dropdown-item">
                  <router-link :to="subItem.href" class="nav-menu__dropdown-link">{{ subItem.title }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      <!-- ハンバーガーメニュー -->
      <button class="hamburger" aria-label="Toggle navigation" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="overlay-menu" :class="{ 'is-open': isMenuOpen }" v-show="isMenuOpen">
        <button class="close-menu" aria-label="Close menu" @click="closeMenu">&times;</button>
        <nav class="menu-content">
          <ul>
            <li>
              <router-link to="/business-overview">事業内容<span>></span></router-link>
            </li>
            <li>
              <router-link to="/company-overview">会社概要<span>></span></router-link>
            </li>
            <li>
              <router-link to="#">代表/社員<span>></span></router-link>
            </li>
            <li>
              <router-link to="/contact-us">お問い合わせ<span>></span></router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <p class="header__message" ref="message">{{ displayedMessage }}</p>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      animationDuration: '10s',
      delayBetweenMessages: '10s',
      isMenuOpen: false,
      menuItems: [
        {
          title: '事業領域',
          href: 'business-overview',
          dropdown: [
            { title: 'ICTコンサルティング', href: '#' },
            { title: '社外情シス', href: '#' },
            { title: '観光インバウンド事業', href: '#' },
          ]
        },
        {
          title: '会社概要',
          href: 'CompanyOverview',
          dropdown: [
            { title: '企業情報', href: '#' },
            { title: '企業理念', href: '#' },
            { title: '代表メッセージ', href: '#' },
          ]
        },
        { title: 'キャリア採用', href: '#' },
        { title: 'お問い合わせ', href: 'contact-us' }
      ],
      messages: [
        '共に未来を駆け抜ける、革新と連携の力',
        '世界と日本とのラリーを繋ぐ'
      ],
      currentMessageIndex: 0, // 現在表示されているメッセージのインデックス
      displayedMessage: '',    // 現在表示されているテキスト
      index: 1,                // タイピング中のインデックス
    };
  },
  computed: {
    headerClass() {
      // Vue Routerを使って現在のページを取得
      return this.$route.name === 'MainPage' ? 'header-main' : 'header';
    }
  },
  mounted() {
    // コンポーネントがマウントされたらタイピングアニメーションを開始
    this.$nextTick(() => {
    setTimeout(() => {
      this.$refs.message.classList.add('typing');
      this.typeText();
    }, 1000);
  });
  },
  methods: {
    // 一文字ずつ表示する関数
    typeText() {
      const text = this.messages[this.currentMessageIndex];
      this.displayedMessage = text.slice(0, this.index);
      
      if (this.index < text.length) {
        this.index++;
        const randomInterval = Math.floor(Math.random() * 350) + 50;
        setTimeout(this.typeText, randomInterval);
      } else {
        setTimeout(this.eraseText, 1500); // 完了後、消去を開始
      }
    },
    // 一文字ずつ消去する関数
    eraseText() {
      const text = this.messages[this.currentMessageIndex];
      this.index--;
      this.displayedMessage = text.slice(0, this.index);

      if (this.index > 0) {
        setTimeout(this.eraseText, 100);
      } else {
        // 次のメッセージへ
        this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
        this.index = 1; // 次のメッセージ用にインデックスをリセット
        setTimeout(this.typeText, 1500); // タイピングを再度開始
      }
    },
        // ハンバーガーメニュー
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  }
};
</script>

<style scoped>
/*メインページ用のヘッダー*/
.header-main {
  background-image: url('../images/header-background.jpg');
  width: 100%;
  height: 700px;
  position: relative;
  background-size: cover; 
}
/*他のページ用のヘッダー*/
.header {
  background-image: url('../images/header-background.jpg');
  width: 100%;
  height: 200px;
  position: relative;
  background-size: cover; 
}
.header .header__message {
  display: none;
}

.header-container {
  display: flex;
  justify-content: space-between;
  padding: 70px;
}
.header__logo-link {
  display: inline-block; /* ロゴの周囲のスペースを調整 */
  width: 120px;
}
.header-logo {
  max-width: 100%; /* 高さは固定し、幅を自動で調整 */
  height: auto;
}

.nav-menu {
  margin-right: 80px;
  display: flex;
  align-items: center;
}

.nav-menu__list {
  display: flex;
  list-style-type: none;
  margin: 0;
}

.nav-menu__item {
  position: relative;
  text-decoration: none;
  margin-left: 20px;
}

.nav-menu__link {
  text-decoration: none;
  font-size: 18px;
  color: #222222;
}

.dropdown-arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid black; /* 矢印の色 */
  margin-left: 8px; /* テキストと矢印の間隔 */
  vertical-align: middle; /* テキストと垂直に揃える */
}

.nav-menu__link:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* ドロップダウンメニュー */
.nav-menu__dropdown {
  position: absolute;
  top: 100%; /* 親アイテムの下に配置 */
  left: 50%; /* 親アイテムの左端に合わせる */
  transform: translateX(-50%);
  background-color: #fff;
  color: #333;
  list-style: none;
  padding: 0;
  padding-bottom: 30px;
  padding-top: 30px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.nav-menu__dropdown-item {
  padding: 0 43px;
  margin-bottom: 16px;
}

.nav-menu__dropdown-item:last-child {
  margin-bottom: 0;
}

.nav-menu__dropdown-link {
  color: #333;
  white-space: nowrap;
  font-size: 16px;
  text-decoration: none;
}

.nav-menu__dropdown-link:hover {
  border: none;
  opacity: 0.7;
  text-decoration: underline;
}

.nav-menu__item:hover .nav-menu__dropdown,
.nav-menu__dropdown:hover {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
}
/*ヘッダーメッセージ*/
.header__message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-size: 48px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: inline-block;
}
.header__message.typing:after {
  content: "|";
  animation: blink 1s infinite; /* カーソル点滅アニメーション */
}
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }    
}
@media screen and (max-width: 767px) {
  .header-image__logo {
    width: 73px;
    height: 28px;
    font-size: 10px;
    z-index: 1000;
  }
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2;
    margin: 8px 16px 8px 0px;
  }
  .hamburger span {
    width: 100%;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s;
  }
  .nav-menu {
    display: none;
  }

  .nav-menu.active {
    display: flex;
  }

  .menu {
    flex-direction: column;
    margin: 0;
  }

  .menu-item {
    margin: 10px 0;
  }

  .menu-item a {
    padding: 10px;
  }

  .overlay-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 999;
    overflow: auto;
  }
  .overlay-menu.is-open {
    transform: translateX(0);
  }
  .overlay-menu .menu-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: 100%;
    height: 100%;
  }
  .menu-content span {
    padding-left: 26px;
  }
  .overlay-menu ul {
    list-style: none;
    padding: 0;
    padding-top: 150px;
    margin: 0;
  }
  .overlay-menu li {
    border-top: 1px solid #8b8b8b;
    display: flex;
  }

  .overlay-menu li:last-child {
    border-bottom: 1px solid #8b8b8b;
  }
  .overlay-menu a {
    color: #8b8b8b;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding-left: 48px;
    display: flex;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  .overlay-menu a:hover {
    color: #fd9603;
    transition: color 0.3s;
  }

  .close-menu {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    color: #8b8b8b;
    font-size: 36px;
    cursor: pointer;
    z-index: 1001;
  }

  .close-menu:hover {
    opacity: 0.7;
  }
  .header__message {
    font-size: 24px;
    white-space: normal; 
    padding: 0 20px; 
    text-align: center; 
  }
  
}
</style>
