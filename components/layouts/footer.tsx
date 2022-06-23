import styles from '../layouts/footer.module.scss';
import Link from 'next/link';
import { nav_type, link_type } from '../../lib/type';

type props = nav_type & link_type;

const Footer = (props: props) => {
  const { nav, link } = props;
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_nav}>
          <ul className={styles.footer_ul}>
            {nav.map((items, footer_map_index) => {
              return (
                <li key={footer_map_index}>
                  <Link href={link[footer_map_index]}>
                    <a>{items}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <img className={styles.footer_logo} src="/svg/footer_logo.svg" alt="MOVEDOORロゴ" />
        <div className={styles.copyright}>
          <p>Copyright © 2022 movedoor All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
