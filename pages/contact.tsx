import BackGround from '../components/molecules/BackGround';
import styles from '../styles/contact.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { NextPage } from 'next';
import Animation from '../components/templates/Animation';

const Contact: NextPage = ({ respost }: any) => {
  const [submit, setSubmit] = useState(false);

  const description =
    'MOVEDOORのお問い合わせフォームです.広報の無料相談から受けつけておりますので、ご気軽にお問い合わせください.弊社の最強の軍師がお客様の課題解決を行いに参上します。';
  const title = 'CONTACT -お問い合わせ-';

  useEffect(() => {
    setSubmit(false);
  }, []);

  const registerUser = async (event: any) => {
    event.preventDefault();

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

    setSubmit(true);
  };

  // useEffect(() => {
  //   if (!element.current) return;
  //   element.current.appendChild(document.createRange().createContextualFragment(html));
  // }, [element]);

  //const subject: any = document.querySelector('#_bownow_iframe_sid_9d25c3ed8baff8866ae5');
  //document.getElementById('#contact_bow_form').appendChild(subject);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} key="description" />
        <meta property="og:title" content={title} key="og_title" />
        <meta property="og:description" content={description} key="og_description" />
        <script
          id="_bownow_cs_sid_9d25c3ed8baff8866ae5"
          dangerouslySetInnerHTML={{
            __html: `
                        var _bownow_cs_sid_9d25c3ed8baff8866ae5 = document.createElement('script');
                        _bownow_cs_sid_9d25c3ed8baff8866ae5.charset = 'utf-8'; _bownow_cs_sid_9d25c3ed8baff8866ae5.src
                        ='https://contents.bownow.jp/forms/sid_9d25c3ed8baff8866ae5/trace.js';
                        document.getElementsByTagName('head')[0].appendChild(_bownow_cs_sid_9d25c3ed8baff8866ae5);
                    `,
          }}
        />
      </Head>
      <Animation />
      <BackGround opacity={0.6}>
        <div className={styles.contact}>
          <div className={styles.container}>
            <div className={!submit ? styles.contact_res : `${styles.contact_res} ${styles.submit_tanks}`}>
              <div className={styles.contact_ttl}>
                <h1>contact</h1>
                <hr />
              </div>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdm4tolfBLCZNI56sK6jEZ9yxKb4PDNSQHdLm4WIuFXvmm-TA/viewform?embedded=true"
                width="1200"
                height="947"
              >
                読み込んでいます…
              </iframe>
              <div id="contact_bow_form"></div>
              {/* 
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
                  <button
                    type="submit"
                    className={styles.btn}
                    // onClick={() => {
                    //   setSubmit(true);
                    // }}
                  >
                    送信
                  </button>
                </div>
              </form>
              </div>
            <div className={submit ? `${styles.thanks} ${styles.submit_tanks}` : styles.thanks}>
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
            </div> */}
            </div>
          </div>
        </div>
      </BackGround>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                const bownow_iframe = document.getElementById('_bownow_iframe_sid_9d25c3ed8baff8866ae5');
                const contact_bow_form = document.getElementById('contact_bow_form');
                contact_bow_form.innerHTML = bownow_iframe;
            `,
        }}
      />
    </>
  );
};

export default Contact;
