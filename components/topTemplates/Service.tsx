import { getWindowSize } from '../../hooks/GetWindowSize';
import styles from '../../styles/Home.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '../../hooks/variants';
import RectBtn from '../atoms/rectBtn';
import { workTag } from '../../lib/type';
import Link from 'next/link';

const Service = ({ workTag }: workTag) => {
  const { width } = getWindowSize();
  return (
    <>
      <div className={styles.service}>
        <div className={styles.container}>
          <img className={styles.service_svg} src="./svg/service_bg_word.svg" alt="Service" />
        </div>

        <div className={styles.inner}>
          <div className={styles.service_detail}>
            {(() => {
              if (width >= 768) {
                return <img src="./svg/cool_ttl.svg" alt="共創者" />;
              } else {
                return <img src="./svg/cool_ttl-sp.svg" alt="共創者" />;
              }
            })()}

            <p>
              ホームページや動画、ＷＥＢ広告などの広報ＰＲに関わる施策を、毎回別の会社に依頼していませんか？
              <br />
              <br />
              弊社が企業のパートナーとして長く関わることで、コミュニケーションコスト削減と認識のズレの防止に繋がります。
              <br />
              <br />
              課題の分析、広報戦略の構築、それに沿った制作・広告。
              これらを一貫して手掛け、パートナー企業様にとって最大限の効果を実現します。
            </p>
            <div className={styles.service_tags}>
              <p className={styles.ttl}>what we do</p>
              <ul>
                {workTag.map((items: any, index: number) => {
                  return (
                    <li key={index}>
                      <Link href={{ pathname: `/works/`, query: { tag: items.fields.worksTagName } }}>
                        <a>{items.fields.worksTagName}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.yoshimoto_img}>
            <div className={styles.img_inner}>
              <Image src="/img/yoshimoto_img.png" layout="fill" alt="吉本晋也" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
