import RectBtn from '../atoms/rectBtn';
import styles from '../../styles/Home.module.scss';
import { getWindowSize } from '../../hooks/GetWindowSize';
import animation from '../../hooks/animation.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { workData } from '../../lib/type';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  fadeInUp,
  animationContainer,
  childFadeInUpContainer,
  childFadeInUpItems,
  childFadeContainer,
  childFadeItems,
} from '../../hooks/variants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopWorks = ({ workData }: workData) => {
  const { width } = getWindowSize();

  const [missionRef, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  return (
    <>
      <div ref={missionRef} className={`${styles.works} top_work`}>
        <div className={styles.container}>
          <div className={styles.cat_ttl}>
            <img
              className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}
              src="./svg/works_ttl.svg"
              alt="WOKS文字"
            />
            <p
              style={{ animationDelay: '0.5s' }}
              className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}
            >
              実績紹介
            </p>
          </div>
          <div className={styles.inner}>
            {(() => {
              if (width <= 576) {
                return (
                  <>
                    <ul
                      style={{ animationDelay: '1s' }}
                      className={`${inView ? animation.fadeInUp : animation.fadeInUpStart}`}
                    >
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1.7}
                        centeredSlides={true}
                        centerInsufficientSlides={true}
                        loop={true}
                        navigation
                        className="myswiper"
                      >
                        {workData.map((items, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <li>
                                <Link href="/works/">
                                  <a>
                                    <div className={styles.close_inner}>
                                      <div className={styles.works_bg}>
                                        <div className={styles.img_inner}>
                                          {(() => {
                                            if (index == 1 || index % 3 == 0) {
                                              return (
                                                <>
                                                  <Image
                                                    src="/img/works_red_bg.jpg"
                                                    layout="fill"
                                                    alt="ワークス背景素材"
                                                  />
                                                </>
                                              );
                                            } else {
                                              return (
                                                <>
                                                  <Image
                                                    src="/img/works_yellow_bg.jpg"
                                                    layout="fill"
                                                    alt="ワークス背景素材"
                                                  />
                                                </>
                                              );
                                            }
                                          })()}
                                        </div>
                                      </div>
                                      <div className={styles.works_img}>
                                        <div className={styles.img_inner}>
                                          {(() => {
                                            if (items.fields.workThumb) {
                                              return (
                                                <>
                                                  <Image
                                                    src={'https:' + items.fields.workThumb.fields.file.url}
                                                    layout="fill"
                                                    alt="ワークス背景素材"
                                                  />
                                                </>
                                              );
                                            } else {
                                              return (
                                                <>
                                                  <Image src="/img/noimage.jpg" layout="fill" alt="ワークス背景素材" />
                                                </>
                                              );
                                            }
                                          })()}
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.open_inner}>
                                      <div className={styles.company_name}>
                                        <p>{items.fields.workSubTtl}</p>
                                        <h6>{items.fields.workTtl}</h6>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              </li>
                            </SwiperSlide>
                          );
                        })}
                        <div className={styles.swiper_button_next}></div>
                      </Swiper>
                    </ul>
                  </>
                );
              } else {
                return (
                  <>
                    <motion.ul
                      variants={childFadeInUpContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.8, margin: '200px' }}
                    >
                      {workData.map((items, index) => {
                        return (
                          <motion.li key={index} variants={childFadeInUpItems}>
                            <Link href="/works/">
                              <a>
                                <div className={styles.close_inner}>
                                  <div className={styles.works_bg}>
                                    <div className={styles.img_inner}>
                                      <Image src="/img/works_red_bg.jpg" layout="fill" alt="ワークス背景素材" />
                                    </div>
                                  </div>
                                  <div className={styles.works_img}>
                                    <div className={styles.img_inner}>
                                      {(() => {
                                        if (items.fields.workThumb) {
                                          return (
                                            <>
                                              <Image
                                                src={'https:' + items.fields.workThumb.fields.file.url}
                                                layout="fill"
                                                alt="ワークス背景素材"
                                              />
                                            </>
                                          );
                                        } else {
                                          return (
                                            <>
                                              <Image src="/img/noimage.jpg" layout="fill" alt="ワークス背景素材" />
                                            </>
                                          );
                                        }
                                      })()}
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.open_inner}>
                                  <div className={styles.company_name}>
                                    <p>{items.fields.workSubTtl}</p>
                                    <h6>{items.fields.workTtl}</h6>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </>
                );
              }
            })()}
          </div>
          <div className={styles.center}>
            <RectBtn url="/works/" bg_color="#DDDDDD 0% 0% no-repeat padding-box"></RectBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopWorks;
