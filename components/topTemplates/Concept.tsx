import { getWindowSize } from '../../hooks/GetWindowSize';
import styles from '../../styles/Home.module.scss';
import animation from '../../hooks/animation.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Concept = () => {
  const { height } = getWindowSize();

  const [ref, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <>
      <div className={styles.concept_area} style={{ height: height }}>
        <div className={styles.concept_cont}>
          <div className={styles.concept_inner}>
            <h3 ref={ref} className={`${inView ? animation.coverRectAnime : animation.coverRectAnimeStart}`}>
              <span>令和ノ軍師</span>
            </h3>
            <img
              className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}
              src="./svg/logo_icon.svg"
              alt="movedoorのコーポレートロゴ"
            />
            <p className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}>
              戦いに勝利し、歴史に名を残した英雄たち
              <br />
              その成功の陰に、必ず“軍師”あり
              <br />
              世はＩＴ戦国時代、今こそ軍師が必要だ。
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concept;
