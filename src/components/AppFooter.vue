<template>
<footer class="footer">
  <div class="footer__container">
    <div class="footer__column">
      <h4 class="footer__heading">事業領域</h4>
      <ul class="footer__list">
        <li><a href="#">ICTコンサルティング</a></li>
        <li><a href="#">社外情シス</a></li>
        <li><a href="#">総合インバウンド事業</a></li>
      </ul>
    </div>
    <div class="footer__column">
      <h4 class="footer__heading">会社概要</h4>
      <ul class="footer__list">
        <li><a href="#">企業情報</a></li>
        <li><a href="#">企業理念</a></li>
        <li><a href="#">代表メッセージ</a></li>
      </ul>
    </div>
    <div class="footer__column">
      <a href="#"><h4 class="footer__heading">キャリア採用</h4></a>
    </div>
    <div class="footer__column">
      <a href="#"><h4 class="footer__heading">お問い合わせ</h4></a>
    </div>
  </div>
  <div class="footer__bottom">
    <p>&copy; 2023. All rights reserved.</p>
  </div>
</footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
.footer {
  background-color: #fff; 
  padding: 40px 20px; 
  color: #222222; 
}

.footer__container {
  display: flex;
  margin: 0 100px;
}

.footer__column {
  flex: 1;
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
}

.footer__list {
  list-style: none;
  padding-left: 5px;
  padding-top: 5px;
  margin: 0;
  line-height: 30px;
}

.footer__list li, .footer__social li {
  margin-bottom: 8px;
}

.footer__list a, .footer__social a {
  color: #222222; 
  text-decoration: none;
}

.footer__list a:hover, .footer__social a:hover {
  text-decoration: underline;
  opacity: 0.7;
}

.footer__bottom {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}
</style>