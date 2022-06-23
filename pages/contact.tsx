import BackGround from '../components/molecules/BackGround';
import styles from '../styles/contact.module.scss';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Contact = ({ respost }: any) => {
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    setSubmit(false);
  }, []);

  const registerUser = async (event: any) => {
    event.preventDefault();
    setSubmit(true);
    const res = await fetch('/api/send', {
      body: JSON.stringify({
        company_name: event.target.company_name.value,
        name: event.target.name.value,
        tel: event.target.tel.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  };

  return (
    <>
      <BackGround opacity={0.6}>
        <div className={styles.contact}>
          <div className={styles.container}>
            {(() => {
              if (!submit) {
                return (
                  <>
                    <div className={styles.contact_ttl}>
                      <h1>contact</h1>
                      <hr />
                    </div>
                    <form name="contactForm" onSubmit={registerUser}>
                      <div className={styles.items}>
                        <label htmlFor="company_name">会社名</label>
                        <input id="company_name" name="company_name" type="text" required />
                      </div>

                      <div className={styles.items}>
                        <label htmlFor="name">お名前</label>
                        <input id="name" name="name" type="text" required />
                      </div>

                      <div className={styles.items}>
                        <label htmlFor="email">メールアドレス</label>
                        <input id="email" name="email" type="email" required />
                      </div>

                      <div className={styles.items}>
                        <label htmlFor="tel">電話番号</label>
                        <input id="tel" name="tel" type="tel" required />
                      </div>

                      <div className={styles.items}>
                        <label htmlFor="message">お問合せ内容</label>
                        <textarea id="message" name="message" className={styles.form} required />
                      </div>

                      <div className={styles.checkbox}>
                        <input type="checkbox" id="confirmCheck" name="confirmCheck" required />
                        <label htmlFor="confirmCheck">上記の内容で送信します。</label>
                      </div>

                      <div className={styles.submit_btn}>
                        <button type="submit" className={styles.btn}>
                          送信
                        </button>
                      </div>
                    </form>
                  </>
                );
              } else {
                return (
                  <>
                    <div className={styles.center}>
                      <div className={styles.thanks_ttl}>
                        <h1>Thanks you</h1>
                        <hr />
                      </div>
                      <div className={styles.thanks_detail}>
                        <p>
                          お問い合わせ頂きありがとうございます。
                          <br />
                          担当者から後ほどご返信させていただきます。
                          <br />
                          お手数ですが、それまで今しばらくお待ちください。
                        </p>
                      </div>
                      <Link href="/">
                        <a>
                          <p className={styles.top}>TOPへ</p>
                        </a>
                      </Link>
                    </div>
                  </>
                );
              }
            })()}
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default Contact;
