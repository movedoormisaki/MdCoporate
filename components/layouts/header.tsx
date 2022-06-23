import Image from 'next/image';
import styles from '../layouts/header.module.scss';
import Link from 'next/link';
import { nav_type, link_type } from '../../lib/type';
import { getWindowSize } from '../../hooks/GetWindowSize';
import { useState, useEffect } from 'react';

type props = nav_type & link_type;

const Header = (props: props) => {
  const { nav, link } = props;
  const navBg_img_pc = '/img/menu_bg-pc.jpg';
  const navBg_img_sp = '/img/menu_bg-sp.jpg';
  const { height, width } = getWindowSize();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={open == true ? `${styles.open} ${styles.header_cont}` : styles.header_cont}>
          <div className={styles.nav_cont} style={{ height: height }}>
            <div className={styles.bg_img}>
              <div className={styles.img_inner}>
                {(() => {
                  if (width >= 576) {
                    return <Image src={navBg_img_pc} layout="fill" alt="メニューの背景" />;
                  } else {
                    return <Image src={navBg_img_sp} layout="fill" alt="メニューの背景" />;
                  }
                })()}
              </div>
            </div>
            <div className={styles.nav}>
              <ul className={styles.ul}>
                {nav.map((items, nav_index: number) => {
                  return (
                    <li key={nav_index} onClick={() => setOpen(!open)}>
                      <Link href={link[nav_index]}>
                        <a>{items}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.black_bg}></div>
          </div>
          <div className={styles.menu_btn} onClick={() => setOpen(!open)}>
            <img className={styles.menu_bg} src="/svg/menu_btn_img.svg" alt="メニュー背景素材" />
            <div className={styles.hamburger}>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
