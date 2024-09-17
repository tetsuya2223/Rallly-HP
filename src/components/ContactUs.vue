<template>
  <section class="contact-section">
    <h2 class="contact-section__title">お問い合わせ</h2>
    <p class="contact-section__description">ご質問やお問い合わせは、下記のフォームよりお気軽にご連絡ください。</p>
    
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="contact-form__group">
        <label for="name" class="contact-form__label">お名前</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="contact-form__input"
          placeholder="例：山田 太郎"
          required
        />
      </div>

      <div class="contact-form__group">
        <label for="email" class="contact-form__label">メールアドレス</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="contact-form__input"
          placeholder="例：example@example.com"
          required
        />
      </div>

      <div class="contact-form__group">
        <label for="subject" class="contact-form__label">件名</label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          class="contact-form__input"
          placeholder="例：サービスに関する質問"
          required
        />
      </div>

      <div class="contact-form__group">
        <label for="message" class="contact-form__label">お問い合わせ内容</label>
        <textarea
          id="message"
          v-model="form.message"
          class="contact-form__textarea"
          placeholder="お問い合わせ内容をこちらにご記入ください"
          required
        ></textarea>
      </div>

      <div class="contact-form__group contact-form__group--button">
        <button type="submit" class="contact-form__button">送信</button>
      </div>
    </form>
  </section>
</template>


<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // フォームの送信処理（API呼び出しなど）
      console.log('お問い合わせ内容', this.form);

      // 送信後のフィードバック処理
      alert('お問い合わせありがとうございます。');
      
      // フォームのリセット
      this.form.name = '';
      this.form.email = '';
      this.form.subject = '';
      this.form.message = '';
    }
  }
};
</script>


<style scoped>
.contact-section {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 40px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-section__title {
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.contact-section__description {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #666;
}

.contact-form {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

.contact-form__group {
  display: flex;
  flex-direction: column;
}

.contact-form__label {
  font-weight: bold;
  margin-bottom: 8px;
}

.contact-form__input,
.contact-form__textarea {
  font-size: 1rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  transition: border-color 0.3s;
}

.contact-form__input:focus,
.contact-form__textarea:focus {
  border-color: #007BFF;
  outline: none;
}

.contact-form__textarea {
  height: 150px;
  resize: none;
}

.contact-form__group--button {
  text-align: center;
}

.contact-form__button {
  font-size: 1rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-form__button:hover {
  background-color: #0056b3;
}

.contact-form__button:active {
  background-color: #004494;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .contact-section {
    padding: 20px;
  }

  .contact-form {
    grid-gap: 15px;
  }
}
</style>
