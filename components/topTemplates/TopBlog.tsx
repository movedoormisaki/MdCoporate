import RectBtn from '../atoms/rectBtn';
import styles from '../../styles/Home.module.scss';
import { getWindowSize } from '../../hooks/GetWindowSize';
import Link from 'next/link';
import animation from '../../hooks/animation.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import { Navigation, Pagination } from 'swiper';
import { blogData } from '../../lib/type';
import BlogCard from '../molecules/blogCard';
import { useRouter } from 'next/router';

import {
  childFadeInUpContainer,
  childFadeInUpItems,
} from '../../hooks/variants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopBlog = ({ blogData }: blogData) => {
  const [blogRef, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  const router = useRouter().pathname;

  return (
    <>
      <div ref={blogRef} className={styles.blog}>
        <div className={styles.blog_word}>
          <img
            className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}
            src="./svg/blog_ttl.svg"
            alt="ブログの文字"
          />
        </div>

        <div className={styles.container}>
          <motion.ul
            variants={childFadeInUpContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8, margin: '200px' }}
          >
            {blogData.map((items, top_blog_index) => {
              return (
                <motion.li variants={childFadeInUpItems} key={top_blog_index}>
                  <BlogCard blogData={items} index={top_blog_index}></BlogCard>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
        <div
          className={`${inView ? animation.fadeInUp : animation.fadeInUpStart} ${styles.btnArea}`}
          style={{ animationDelay: '1.5s' }}
        >
          <RectBtn url="/blog/" bg_color="#DDDDDD 0% 0% no-repeat padding-box"></RectBtn>
        </div>
      </div>
    </>
  );
};

export default TopBlog;
