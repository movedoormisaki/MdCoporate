import Head from 'next/head';
import BackGround from '../components/molecules/BackGround';
import styles from '../styles/aboutUs.module.scss';
import animeStyles from '../hooks/animation.module.css';
import Image from 'next/image';
import type { NextPage } from 'next';
import Animation from '../components/templates/Animation';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  fadeInUp,
  animationContainer,
  childFadeInUpContainer,
  childFadeInUpItems,
  childFadeContainer,
  childFadeItems,
} from '../hooks/variants';

const aboutUs: NextPage = () => {
  const description =
    'MOVEDOORのMISSIONは"広報PRで事業成長を実現する"というものです。クライアントの集客・採用・ブランディングを勝利に導きます。また学生起業した道のりやワッと驚くミッションまでMOVEDOORの歴史を入れています。';
  const title = 'ABOUT US -私たちについて-';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} key="description" />
        <meta property="og:title" content={title} key="og_title" />
        <meta property="og:description" content={description} key="og_description" />
      </Head>
      <Animation />
      <BackGround opacity={0.95}>
        <div>
          <div className={styles.container}>
            <div className={styles.about_us_ttl}>
              <div className={styles.img_inner}>
                <Image
                  objectFit="contain"
                  width={1280}
                  height={450}
                  src="/img/aboutus.png"
                  layout="responsive"
                  alt="Aboutusタイトル画像"
                />
              </div>
            </div>

            {/* 私たちのミッション */}
            <motion.div variants={childFadeInUpContainer} initial="hidden" animate="show" className={styles.mission}>
              <section className={styles.mission_inner}>
                <motion.h2 variants={childFadeInUpItems}>
                  <motion.span>Our mission</motion.span>
                </motion.h2>
                <motion.p variants={childFadeInUpItems} className={styles.sub_ttl}>
                  広報ＰRで<span className={styles.br}>事業成長を実現する</span>
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  広報ＰＲのトータルプロデュースを強みに、事業成長を売る広報ＰＲ会社です。クリエイターが戦略策定から実行、効果検証まで全てを担います。もう大切な広告費を無駄にすることはありません。御社の集客・採用・ブランディングを勝利に導きます。
                </motion.p>
              </section>
              <section>
                <div className={styles.mission_img}>
                  <motion.div variants={childFadeItems} className={styles.img_inner}>
                    <Image
                      width={720}
                      height={720}
                      layout="responsive"
                      src="/img/mission.png"
                      alt="ミッションの看板を持つ代表取締役"
                    />
                  </motion.div>
                </div>
              </section>
            </motion.div>
            {/* 私たちのミッション終わり */}

            {/* 私たちのビジョン */}

            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: '200px' }}
              className={styles.vision}
            >
              <section className={styles.vision_img}>
                <motion.div variants={childFadeItems} className={styles.img_inner}>
                  <Image
                    width={640}
                    height={480}
                    src="/img/wow_img.png"
                    layout="responsive"
                    alt="ミッションの看板を持つ代表取締役"
                  />
                </motion.div>
              </section>

              <section className={styles.vision_inner}>
                <motion.h2 variants={childFadeInUpItems}>Our vision</motion.h2>
                <motion.p variants={childFadeInUpItems} className={styles.sub_ttl}>
                  Wow！ <span>— 和を —</span>
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  「『ワォ！』と驚くような創造性が欲しい」 「人と人の『和を』大事にしたい」
                  そんなことを考えてたら、こんなサイトを作ってしまいました。
                  私たちが目指すのは、常に面白く、調和を重んじるチームです。
                </motion.p>
              </section>
            </motion.div>

            {/* 私たちのビジョン　終わり */}

            {/* STORY 始まり */}

            <motion.div
              variants={childFadeContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: '200px' }}
              className={styles.story}
            >
              <motion.h3 variants={childFadeItems}>story</motion.h3>
              <motion.p variants={childFadeItems} className={styles.sub_ttl}>
                — 創業秘話 —
              </motion.p>
              <motion.p variants={childFadeItems}>
                代表諸富稜が大学３年生の時、関西学院大学の学生を集め、MOVEDOORを創業。クリエイティブのスキルを持ったメンバー５人で、映像＆デザインの「制作会社」をスタートする。しかし、信用も実績も無い学生が仕事やお金を得ることは、あまりに難しいことだった。さらに、大学卒業と同時にコロナショックに直面する。それでも何度も壁を乗り越え、ゼロから実績を重ね、夢中で制作に没頭した。技術は急激に向上し、頼んでくださった方に喜んでもらえるチームになってきた。一方、良いデザインをつくって誉められても、顧客の事業成長に貢献できる実感は持てなかった。納品が終わる度、無力さを感じた。美しい動画をつくっても、ターゲットや使い道を間違えれば集客は出来ない。戦略無しに広報ＰＲは成り立たない。そう強く実感したからこそ、戦略・制作・広告発信の全てを担う、広報ＰＲ会社を目指すべきではないか？と考えた。すでに機能や価格で差別化する時代は終わりを迎え、ブランディング・デザイン・ストーリー構築など新たな広報ＰＲが求められている。だからこそ、我々のようなクリエイター集団が企業のパートナーとして、企業の事業成長を実現すると決意した。
              </motion.p>
            </motion.div>

            {/* STORY 終わり */}

            {/* 会社概要　始まり */}
            <motion.div
              variants={childFadeContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: '200px' }}
              className={styles.info}
            >
              <motion.h3 variants={childFadeItems}>info</motion.h3>
              <motion.div variants={childFadeItems} className={styles.table}>
                <table>
                  <tbody>
                    <tr>
                      <td>会社名</td>
                      <td>株式会社MOVEDOOR</td>
                    </tr>
                    <tr>
                      <td>設立</td>
                      <td>2022年2月</td>
                    </tr>
                    <tr>
                      <td>所在地</td>
                      <td>兵庫県三田市中町7-39</td>
                    </tr>
                    <tr>
                      <td>代表者</td>
                      <td>諸富稜（もろとみりょう）</td>
                    </tr>
                    <tr>
                      <td>事業内容</td>
                      <td>
                        映像制作／WEBサイト制作／オンラインショップ制作／ロゴ制作／SNS施策／写真撮影／紙面デザイン／グッズ制作／SEO＆MEO施策／メディア活用／ブランディング／WEB広告／YouTube／インフルエンサー起用／トータルデザイン
                      </td>
                    </tr>
                    <tr>
                      <td>社会貢献</td>
                      <td>古民家再生／学生の居場所づくり／農村地域活性化／里山体験の観光事業</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
            {/* 会社概要　終わり */}
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default aboutUs;
