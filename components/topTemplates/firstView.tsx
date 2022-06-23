import { getWindowSize } from '../../hooks/GetWindowSize';
import styles from '../../styles/Home.module.scss';
import { motion } from 'framer-motion';

const FirstView = () => {
  const { height } = getWindowSize();
  return (
    <>
      {/* ファーストビュー */}
      <div className={styles.first_view} style={{ height: height }}>
        <div className={styles.container}>
          <div className={styles.h1_ttl}>
            <div className={styles.slice_items}>
              <div className={styles.top_slice}>
                <img src="./svg/reiwanogunshi.svg" alt="令和の軍師ロゴ" />
                <img src="./svg/movedoor_word.svg" alt="movedoor文字" />
              </div>
              <div className={styles.bottom_slice}>
                <img src="./svg/reiwanogunshi.svg" alt="令和の軍師ロゴ" />
                <img src="./svg/movedoor_word.svg" alt="movedoor文字" />
              </div>
            </div>

            <div className={styles.h1_sub_ttl}>
              <h2>PUBLIC RELATIONS / DESIGN / MOVIE</h2>
            </div>
          </div>
          <div className={styles.scroll}>
            <img src="./svg/scroll_btn.svg" alt="スクロールボタン" />
          </div>
        </div>
      </div>
      {/* ファーストビュー 終わり*/}
    </>
  );
};

export default FirstView;
