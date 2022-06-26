import { getWindowSize } from '../../hooks/GetWindowSize';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import RectBtn from '../atoms/rectBtn';
import { useInView } from 'react-intersection-observer';
import animation from '../../hooks/animation.module.scss';
import { useEffect } from 'react';

const Mission = () => {
  const { width } = getWindowSize();

  const [missionRef, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  useEffect(() => {}, []);

  return (
    <>
      <div className={styles.mission}>
        <div
          className={`${inView ? animation.RectLeftSlideAnime : animation.RectLeftSlideAnimeStart}
         ${styles.yellow_rect}`}
        ></div>
        <div className={styles.mesh_img_inner}>
          <Image
            width={1512}
            height={1512}
            layout="responsive"
            className={styles.mesh}
            src="/svg/mesh_bg.svg"
            alt="背景のメッシュ素材"
          />
        </div>

        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.tommy_img}>
              <div className={`${inView ? animation.fadeInUp : animation.fadeInUpStart} ${styles.img_inner}`}>
                <Image src="/img/tommy_img.png" layout="fill" alt="諸富稜" />
              </div>
            </div>
            <div ref={missionRef}></div>

            <div className={styles.mission_ttl}>
              <div
                className={`${inView ? animation.ParentRectLeftSlideAnime : animation.ParentRectLeftSlideAnimeStart} ${
                  styles.ttl_back
                }`}
              ></div>
              <img
                style={{ animationDelay: '1.5s' }}
                className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}
                src="./svg/OurMission.svg"
                alt="Our Mission"
              />
              <div className={styles.mission_detail}>
                <h4
                  style={{ animationDelay: '1.5s' }}
                  className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}
                >
                  広報PRで
                  <br />
                  事業成長を<span className={styles.span_br}>実現する。</span>
                </h4>

                <p
                  style={{ animationDelay: '2s' }}
                  className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}
                >
                  私たちが提供するのは、制作ではなく”成長”です。
                  <span>課題発見と戦略構築から革新的なクリエイティブ、そして的確な広告まで</span>
                  広報PRを軸に集客・採用・ブランディングを勝利に導く。
                  <span>成長を望む全ての企業に課題解決と目標達成、新たな機会創出を　——</span>
                </p>

                <div
                  style={{ animationDelay: '2.5s' }}
                  className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}
                >
                  <RectBtn
                    txt="about us"
                    bg_color="radial-gradient(closest-side at 50% 50%, #FFD700 0%, #FFD800 32%, #847000 100%) 0% 0% no-repeat padding-box"
                    url="/aboutus/"
                  ></RectBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
