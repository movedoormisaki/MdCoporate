import RectBtn from '../atoms/rectBtn';
import styles from '../../styles/Home.module.scss';
import { getWindowSize } from '../../hooks/GetWindowSize';
import Link from 'next/link';
import animation from '../../hooks/animation.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper';
import { newsData } from '../../lib/type';
import Newslist from '../molecules/newslist';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopNews = ({ newsData }: newsData) => {
  return (
    <>
      <div className={styles.news}>
        <div className={styles.container}>
          <img className={styles.news_word} src="./svg/news_ttl.svg" alt="ニュースの文字" />
          <ul>
            {newsData.map((items, top_news_index) => {
              return (
                <li key={top_news_index}>
                  <Link href={`/news/${items.fields.slug}`}>
                    <a>
                      <Newslist newsData={items}></Newslist>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.container}>
          <div className={styles.contact_btn}>
            <Link href="/contact">
              <a>
                <div className={styles.rect_btn}>
                  <div className={styles.inner}>CONTACT</div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNews;
