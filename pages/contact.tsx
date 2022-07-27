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
            (function(){
              // フォーム（iframeのIDをもつエレメント）が既にDOMに存在する場合は何もせずに終了
              if (document.getElementById('_bownow_iframe_sid_9d25c3ed8baff8866ae5')) { return; }
            
              var getStorage = function(key) {
                var s = window.localStorage.getItem(key);
                if (s === null) { return ''; }
                try {
                  s = JSON.parse(s);
                  if (s.expires === undefined) { return s.value; }
                  if (new Date(s.expires) > new Date()) {
                    return s.value;
                  } else {
                    window.localStorage.removeItem(key);
                    return '';
                  }
                } catch (e) {
                  window.localStorage.removeItem(key);
                  return '';
                }
              }
              var getCookie = function(key) {
                var name = key + '=';
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == ' ') { c = c.substring(1); }
                  if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
                }
                return getStorage(key);
              };
              var setStorage = function(key, value, expires) {
                var data = expires === undefined ? { value: value } : { value: value, expires: expires };
                window.localStorage.setItem(key, JSON.stringify(data));
              }
              var setCookie = function(key, value, expire) {
                var d = new Date();
                d.setTime(d.getTime() + expire);
                var expires = d.toUTCString();
                document.cookie = key + "=" + value + ";expires=" + expires + ";path=/";
                setStorage(key, value, expires);
              };
              var getParameterByName = function(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                  results = regex.exec(url);
                if (!results) { return null; }
                if (!results[2]) { return ''; }
                return decodeURIComponent(results[2].replace(/\+/g, " "));
              };
              if (!window._bownowPostMessageFunc) {
                window._bownowPostMessageFunc = function (e) {
                  if (e.origin !== 'https://contents.bownow.jp' ) { return; }
                  var getFrameTarget = function (source) {
                    var frames = document.getElementsByTagName('iframe');
                    for (var i = 0; i < frames.length; i++) {
                      if (frames[i].contentWindow === source) { return frames[i]; }
                    }
                    return null;
                  };
                  var key = e.message ? "message" : "data";
                  var data = e[key];
                  var element = document.getElementById(data.id) || getFrameTarget(e.source);
                  if (data.height) {
                    if (element) { element.height = data.height; }
                  }
                  if (data.scroll) {
                    if (data.scroll === 'contact_top') {
                      window.scrollTo(null, element.offsetTop);
                    } else if (data.scroll === 'page_top') {
                      window.scrollTo(null, 0);
                    }
                  }
                  if (data.access_token) {
                    setCookie('bownow_accesstoken', data.access_token, 30*60*1000);
                  }
                  if (data.redirectTo) {
                    window.location.href = data.redirectTo;
                  }
                };
                var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
                var eventer = window[eventMethod];
                var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
                eventer(messageEvent, window._bownowPostMessageFunc, false);
                var _bownow_accesstoken = getCookie('bownow_accesstoken');
                if (_bownow_accesstoken) {
                  setCookie('bownow_accesstoken', _bownow_accesstoken, 30*60*1000);
                }
              }
              var _bownow_cid    = getCookie('bownow_cid');
              if (!_bownow_cid) {
                _bownow_cid = 'cb9c6ca5-64df-4682-8623-d0cdc63d5e8d';
                setCookie('bownow_cid', _bownow_cid);
              }
              var _bownow_cf_src = 'https://contents.bownow.jp/forms/view/sid_9d25c3ed8baff8866ae5/' +  _bownow_cid;
              _bownow_cf_src = _bownow_cf_src + '?title=' + encodeURIComponent(document.title) + '&referer=' + encodeURIComponent(window.location.href);
              var _bownow_mbid = getCookie('bownow_mbid');
              if (!_bownow_mbid) {
                var _bownowmail = getParameterByName('bownowmail');
                if (_bownowmail && _bownowmail.split(':')[1]) {
                  _bownow_mbid = _bownowmail.split(':')[1];
                }
              }
              if (_bownow_mbid) {
                _bownow_cf_src = _bownow_cf_src + '&bownow_mbid=' + _bownow_mbid;
              }
              if (getParameterByName('_bq_family_name')) {
                _bownow_cf_src = _bownow_cf_src + '&family_name=' + encodeURIComponent(getParameterByName('_bq_family_name'));
              }
              if (getParameterByName('_bq_given_name')) {
                _bownow_cf_src = _bownow_cf_src + '&given_name=' + encodeURIComponent(getParameterByName('_bq_given_name'));
              }
              if (getParameterByName('_bq_email')) {
                _bownow_cf_src = _bownow_cf_src + '&email=' + encodeURIComponent(getParameterByName('_bq_email'));
              }
              if (getParameterByName('_bq_phone_number')) {
                _bownow_cf_src = _bownow_cf_src + '&phone_number=' + encodeURIComponent(getParameterByName('_bq_phone_number'));
              }
              if (getParameterByName('_bq_company_name')) {
                _bownow_cf_src = _bownow_cf_src + '&company_name=' + encodeURIComponent(getParameterByName('_bq_company_name'));
              }
              if (getParameterByName('_bq_section_name')) {
                _bownow_cf_src = _bownow_cf_src + '&section_name=' + encodeURIComponent(getParameterByName('_bq_section_name'));
              }
              if (getParameterByName('_bq_position_name')) {
                _bownow_cf_src = _bownow_cf_src + '&position_name=' + encodeURIComponent(getParameterByName('_bq_position_name'));
              }
              if (getParameterByName('_bq_text_area-1')) {
                _bownow_cf_src = _bownow_cf_src + '&text_area-1=' + encodeURIComponent(getParameterByName('_bq_text_area-1'));
              }
              var _bownow_cf = document.createElement('iframe');
              _bownow_cf.id = '_bownow_iframe_sid_9d25c3ed8baff8866ae5';
              _bownow_cf.src = _bownow_cf_src;
              _bownow_cf.width = '100%';
              _bownow_cf.height = 0;
              _bownow_cf.style = 'border: none; overflow: hidden';
              _bownow_cf.frameBorder = 0;
              _bownow_cf.setAttribute('allowtransparency', 'true');
              _bownow_cf.setAttribute('scrolling', 'yes');
              _bownow_cf.onload = _bownow_cf.onreadystatechange = function() {
                try {
                  if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                    this.onload = this.onreadystatechange = null;
                    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
                    var focusEvent = eventMethod === "attachEvent" ? "onfocus" : "focus";
                    var focusFunc = function() {
                      try {
                        window[eventMethod === "attachEvent" ? "detachEvent" : "removeEventListener"](focusEvent, focusFunc);
                        _bownow_cf.contentWindow.postMessage('focus', '*');
                      } catch (e) {  }
                    };
                    window[eventMethod](focusEvent, focusFunc, { once: true });
                  }
                } catch (e) {  }
              }
              try {
                var _bownow_cs_sid_9d25c3ed8baff8866ae5 = document.getElementById('contact_bow_form');
                _bownow_cs_sid_9d25c3ed8baff8866ae5.insertBefore(_bownow_cf, contact_bow_form);
                console.log("ok")
              } catch (e) {
                var _bownow_cs = document.getElementById('_bownow_cs');
                _bownow_cs.parentNode.insertBefore(_bownow_cf, _bownow_cs.nextSibling);
              }
            }).call(this);
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
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
                const bownow_iframe = document.getElementById('_bownow_iframe_sid_9d25c3ed8baff8866ae5');
                const contact_bow_form = document.getElementById('contact_bow_form');
                contact_bow_form.innerHTML = bownow_iframe;
            `,
        }}
      /> */}
    </>
  );
};

export default Contact;
