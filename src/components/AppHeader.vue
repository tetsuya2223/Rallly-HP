<template>
  <header class="header">
    <div class="header-container">
      <a href="#"><img class="header__logo" src="../images/company-logo.png" alt="#"></a>
      <nav class="nav-menu">
        <ul class="nav-menu__list">
          <li v-for="(item, index) in menuItems" :key="index" class="nav-menu__item nav-menu__item--dropdown">
            <a :href="item.href" class="nav-menu__link">
              {{ item.title }}<span v-if="item.dropdown" class="dropdown-arrow"></span>
            </a>
            <ul v-if="item.dropdown" class="nav-menu__dropdown">
              <li v-for="(subItem, subIndex) in item.dropdown" :key="subIndex" class="nav-menu__dropdown-item">
                <a :href="subItem.href" class="nav-menu__dropdown-link">{{ subItem.title }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
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
      menuItems: [
        {
          title: '事業領域',
          href: '#business',
          dropdown: [
            { title: 'ICTコンサルティング', href: '#' },
            { title: '社外情シス', href: '#' },
            { title: '観光インバウンド事業', href: '#' },
          ]
        },
        {
          title: '会社概要',
          href: '#company',
          dropdown: [
            { title: '企業情報', href: '#' },
            { title: '企業理念', href: '#' },
            { title: '代表メッセージ', href: '#' },
          ]
        },
        { title: 'キャリア採用', href: '#careers' },
        { title: 'お問い合わせ', href: '#contact' }
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
  }
};
</script>

<style scoped>
.header {
  background-image: url('../images/header-background.jpg');
  width: 100%;
  height: 700px;
  position: relative;
  background-size: cover; 
}

.header-container {
  display: flex;
  justify-content: space-between;
}

.header__logo {
  width: auto;
  height: 50px;
  margin-left: 70px;
  margin-top: 70px;
}

.nav-menu {
  margin-top: 70px;
  margin-right: 80px;
}

.nav-menu__list {
  display: flex;
  list-style-type: none;
}

.nav-menu__item {
  position: relative;
  text-decoration: none;
  margin-left: 40px;
  padding: 10px 0;
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
</style>
