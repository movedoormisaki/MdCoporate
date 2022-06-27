import BackGround from '../components/molecules/BackGround';
import styles from '../styles/contact.module.scss';
import Link from 'next/link';
import Head from 'next/head';

import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Animation from '../components/templates/Animation';

const thanks: NextPage = () => {
  return (
    <>
      <Animation />
      <BackGround opacity={0.6}>
        <div className={styles.contact}>
          <div className={styles.container}>
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
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default thanks;
