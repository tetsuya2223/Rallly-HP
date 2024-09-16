<template>
  <header class="header">
    <div class="header-container">
      <img class="header__logo" src="../images/company-logo.png" alt="#">
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item"><a href="#business" class="header__nav-link">事業領域<span class="down-arrow"></span></a></li>
          <li class="header__nav-item"><a href="#company" class="header__nav-link">会社概要<span class="down-arrow"></span></a></li>
          <li class="header__nav-item"><a href="#contact" class="header__nav-link">キャリア採用</a></li>
          <li class="header__nav-item"><a href="#careers" class="header__nav-link">お問い合わせ</a></li>
        </ul>
      </nav>
    </div>
    <p :class="messageClass('message1')">共に未来を駆け抜ける、革新と連携の力</p>
    <p :class="messageClass('message2')">世界と日本とのラリーを繋ぐ</p>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      animationDuration: '10s',
      delayBetweenMessages: '10s',
    };
  },
  methods: {
    messageClass(messageType) {
      return {
        'header__message': true,
        [`header__message--${messageType}`]: true,
        [`animation-delay-${messageType}`]: true
      };
    }
  }
};
</script>

<style scoped>
.header {
  background-image: url('../images/header-background.jpg');
  width: 100%;
  height: 700px;
  position: relative;
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

.header__nav {
  margin-top: 70px;
  margin-right: 80px;
}

.header__nav-list {
  display: flex;
  list-style-type: none;
}

.header__nav-item {
  text-decoration: none;
  margin-left: 40px;
}

.header__nav-link {
  text-decoration: none;
  font-size: 18px;
  color: #222222;
}

.header__nav-link:hover {
  opacity: 0.7;
  text-decoration: underline;
}

.header__message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  overflow: hidden;
  width: 100%;
}

.header__message--1 {
  animation: typingIn 10s steps(30) infinite, typingOut 10s steps(30) 10s forwards;
}

.header__message--2 {
  animation: typingIn 10s steps(30) infinite 10s, typingOut 10s steps(30) 20s forwards;
}

@keyframes typingIn {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes typingOut {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

</style>
