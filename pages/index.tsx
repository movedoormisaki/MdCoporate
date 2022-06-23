import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { createClient } from 'contentful';
import { memberType, blogData, workTag, workData, newsData } from '../lib/type';
import { AnimatePresence } from 'framer-motion';

import BlogCard from '../components//molecules/blogCard';
import Newslist from '../components/molecules/newslist';
import { getWindowSize } from '../hooks/GetWindowSize';
import RectBtn from '../components/atoms/rectBtn';

import { useRef, useEffect } from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, fadeInRight, fadeInLeft, animationContainer } from '../hooks/variants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Link from 'next/link';
import { type } from 'os';
import FirstView from '../components/topTemplates/firstView';
import Concept from '../components/topTemplates/Concept';
import Mission from '../components/topTemplates/Mission';
import Service from '../components/topTemplates/Service';

type Props = memberType & blogData & workTag & workData & newsData;

const Home: NextPage<Props> = ({ memberData, blogData, workTag, workData, newsData }: Props) => {
  const Bg_img = '../img/bg_img-pc.jpg';
  const Bg_sp_img = '../img/bg_img-sp.jpg';
  const { height, width } = getWindowSize();


  const [ref, inView] = useInView({ threshold: [0.25], triggerOnce: true });

  return (
    <>
      {/* <TopPage
        memberData={memberData}
        blogData={blogData}
        workTag={workTag}
        workData={workData}
        newsData={newsData}
      ></TopPage> */}

      <div
        className={styles.full_bg}
        style={width > 576 ? { backgroundImage: `url(${Bg_img})` } : { backgroundImage: `url(${Bg_sp_img})` }}
      >
        {/* ファーストビュー */}
        <FirstView />

        <div className={styles.black_bg}>
          <div className={styles.black}>
            <div className={styles.color_filter}>
              <div className={styles.white}></div>
            </div>

            {/* コンセプトエリア*/}
            <Concept />

            {/* our mission */}
            <Mission />

            {/* サービスエリア */}
            <Service workTag={workTag} />

            {/* worksのカテゴリ */}
            <div className={`${styles.works} top_work`}>
              <div className={styles.container}>
                <div className={styles.cat_ttl}>
                  <img src="./svg/works_ttl.svg" alt="WOKS文字" />
                  <p>実績紹介</p>
                </div>
                <div className={styles.inner}>
                  <ul>
                    {(() => {
                      if (width <= 576) {
                        return (
                          <>
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
                                                        <Image
                                                          src="/img/noimage.jpg"
                                                          layout="fill"
                                                          alt="ワークス背景素材"
                                                        />
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
                          </>
                        );
                      } else {
                        return (
                          <>
                            {workData.map((items, index) => {
                              return (
                                <li key={index}>
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
                                                    <Image
                                                      src="/img/noimage.jpg"
                                                      layout="fill"
                                                      alt="ワークス背景素材"
                                                    />
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
                              );
                            })}
                          </>
                        );
                      }
                    })()}
                  </ul>
                </div>
                <div className={styles.center}>
                  <RectBtn url="/works/" bg_color="#DDDDDD 0% 0% no-repeat padding-box"></RectBtn>
                </div>
              </div>
            </div>

            {/* メンバー一覧 */}
            <div className={`${styles.member} top_member`}>
              <div className={styles.yellow_bg}></div>
              <div className={styles.misaki_img}>
                <div className={styles.img_inner}>
                  <Image src="/img/misaki_pc.png" layout="fill" alt="三崎龍人" />
                </div>
              </div>

              <div className={styles.container}>
                <div className={styles.cat_ttl}>
                  <img src="./svg/member_ttl.svg" alt="MEMBER文字" />
                  <p>メンバー</p>
                </div>
                <div className={styles.inner}>
                  <ul>
                    {(() => {
                      if (width <= 786) {
                        return (
                          <>
                            <Swiper
                              modules={[Navigation, Pagination]}
                              spaceBetween={30}
                              slidesPerView={2}
                              speed={200}
                              centeredSlides={true}
                              centerInsufficientSlides={true}
                              loop={true}
                              navigation
                              className="myswiper"
                            >
                              {memberData.map((items, index) => {
                                return (
                                  <SwiperSlide key={index}>
                                    <li>
                                      <Link href={`/member/${items.fields.slug}`}>
                                        <a className="top_member_a">
                                          <div className={styles.close_inner}>
                                            <div className={styles.member_name}>
                                              <p>{items.fields.topOneword}</p>
                                              <h6>{items.fields.name}</h6>
                                            </div>
                                          </div>

                                          <div className={styles.open_door}>
                                            <div className={`${styles.door_back} door_back`}>
                                              <img src="./svg/logo.svg" alt="MEMBER文字" />
                                            </div>
                                          </div>

                                          <div className={styles.open_inner}>
                                            <div className={styles.member_bg}>
                                              <div className={styles.img_inner}>
                                                <Image
                                                  src={'https:' + items.fields.topthumbImg.fields.file.url}
                                                  layout="fill"
                                                  alt="トミーの背景画像"
                                                />
                                              </div>
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
                          </>
                        );
                      } else {
                        return (
                          <>
                            {memberData.map((items, index) => {
                              return (
                                <li key={index}>
                                  <Link href="/">
                                    <a className="top_member_a">
                                      <div className={styles.close_inner}>
                                        <div className={styles.member_name}>
                                          <img src="./svg/logo.svg" alt="MEMBER文字" />
                                          <p>{items.fields.topOneword}</p>
                                          <h6>{items.fields.name}</h6>
                                        </div>
                                        <div className={styles.door_back}></div>
                                      </div>
                                      <div className={styles.open_inner}>
                                        <div className={styles.member_bg}>
                                          <div className={styles.img_inner}>
                                            <Image
                                              src={'https:' + items.fields.topthumbImg.fields.file.url}
                                              layout="fill"
                                              alt="トミーの背景画像"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                </li>
                              );
                            })}
                          </>
                        );
                      }
                    })()}
                  </ul>
                </div>
                <div className={styles.center}>
                  <RectBtn url="/members/" bg_color="#DDDDDD 0% 0% no-repeat padding-box"></RectBtn>
                </div>
              </div>
              <div className={styles.yellow_div}>
                <div className={styles.yellow_bg}></div>
                <div className={styles.triangle_area}>
                  <img className={styles.triangle_svg} src="./svg/triangle.svg" alt="背景三角" />
                </div>
                <div className={styles.keiji_img}>
                  <div className={styles.img_inner}>
                    {(() => {
                      if (width >= 576) {
                        return <Image src="/img/keiji_pc.png" layout="fill" alt="高橋圭司" />;
                      } else {
                        return <Image src="/img/keiji_sp.png" layout="fill" alt="高橋圭司" />;
                      }
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* ブログ一覧 */}
            <div className={styles.blog}>
              <img className={styles.blog_word} src="./svg/blog_ttl.svg" alt="ブログの文字" />
              <div className={styles.container}>
                <ul>
                  {blogData.map((items, top_blog_index) => {
                    return <BlogCard key={top_blog_index} blogData={items} index={top_blog_index}></BlogCard>;
                  })}
                </ul>
              </div>
              <div className={styles.btnArea}>
                <RectBtn url="/blog/" bg_color="#DDDDDD 0% 0% no-repeat padding-box"></RectBtn>
              </div>
            </div>

            {/* ニュース一覧 */}
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
                  <Link href="/">
                    <a>
                      <div className={styles.rect_btn}>
                        <div className={styles.inner}>CONTACT</div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* コンセプトエリア */}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: 'tcl09h8ynjdr',
    accessToken: 'wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc',
  });

  const res_blog = await client.getEntries({ content_type: 'blog', limit: 3 });
  const res_works_tag = await client.getEntries({ content_type: 'worksTag' });
  const res_member = await client.getEntries({ content_type: 'members', limit: 5, order: 'fields.order' });
  const res_work = await client.getEntries({ content_type: 'works', limit: 3 });
  const res_news = await client.getEntries({ content_type: 'news', limit: 3, order: '-fields.newsData' });

  return {
    props: {
      blogData: res_blog.items,
      memberData: res_member.items,
      workTag: res_works_tag.items,
      workData: res_work.items,
      newsData: res_news.items,
    },
  };
};

export default Home;
