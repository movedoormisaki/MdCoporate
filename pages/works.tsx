import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../styles/works.module.scss';
import { workData, workTag } from '../lib/type';
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import WorkCard from '../components/molecules/workCard';
import BackGround from '../components/molecules/BackGround';
import { getWindowSize } from '../hooks/GetWindowSize';
import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';
import { count } from 'console';
import { motion, Variants } from 'framer-motion';
import Animation from '../components/templates/Animation';
import { childFadeInUpWorksContainer, childFadeInUpWorksItems } from '../hooks/variants';

export interface workData_type {
  fields: {
    workTtl: string;
    workSubTtl: string;
    workThumb: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    workCont?: string;
    worsTag: {
      fields: {
        worksTagSlug?: string;
        worksTagName?: string;
      };
    }[];
  };
}

type Props = workData & workTag;

const Works: NextPage<Props> = ({ workData, workTag }: Props) => {
  const [filteredPosts, setFilteredPosts] = useState<workData_type[]>(workData);

  const { width } = getWindowSize();

  let plusNumber = 9;

  const description =
    '兵庫県三田市を拠点にしておりますが、ご依頼は関西全域から頂いております。その実績をこちらには掲載しているので、覗きに来てください';
  const title = 'WORKS -実績事例-';

  const tag_array: any = [];
  workTag.map((tag) => tag_array.push(tag.fields.worksTagName));

  var post_tag_array: string[] = [];

  //前サイトで取得してきたクエリーを処理する
  const router: any = useRouter();
  const path_tag: string[] = [];
  router.query.tag ? path_tag.push(router.query.tag) : '';

  //タグの種類
  const [tags, setTags] = useState<string[]>(path_tag);

  //全てを選択された時
  const [isAllTag, setIsAllTag] = useState(true);

  useEffect(() => {
    if (tags.length > 0) {
      setIsAllTag(false);
    } else {
      setIsAllTag(true);
    }
  }, [tags]);

  let counter = filteredPosts.length;
  let rate = '8vw';
  let count: number = 0;
  let changeCount: number = 9;

  let counterArray: any[] = [];

  if (width > 576) {
    counterArray = [
      [1, 1, 3, 2],
      [1, 2, 5, 3],
      [1, 3, 4, 4],
      [3, 1, 7, 2],
      [5, 2, 8, 3],
      [4, 3, 6, 4],
      [7, 1, 10, 2],
      [8, 2, 10, 3],
      [6, 3, 10, 4],
    ];
  } else {
    plusNumber = 9;
    changeCount = 6;
    counter = counter * 1.5;
    rate = '16vw';
    counterArray = [
      [1, 1, 3, 2],
      [1, 2, 5, 3],
      [3, 1, 6, 2],
      [5, 2, 7, 3],
      [6, 1, 10, 2],
      [7, 2, 10, 3],
    ];
  }

  let AmariN: number = 0;
  let Con: number = 0;
  let Amari: number = 0;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Animation />
      <BackGround opacity={0.5}>
        <div className={styles.works}>
          <div className={styles.white_bg}>
            <div className={styles.container}>
              <div className={styles.ttl}>
                <h2>
                  works
                  <span className={isAllTag ? styles.all : styles.tag_size}> - {isAllTag ? 'all' : `${tags}`}</span>
                </h2>
                <hr />
              </div>
              <div className={styles.cat}>
                <ul>
                  <li
                    onClick={() => {
                      setIsAllTag(true);
                      setTags([]);
                    }}
                    className={isAllTag ? styles.tag_true : ''}
                  >
                    全て
                  </li>
                  {tag_array.map((worksItem: any, index: number) => {
                    return (
                      <li
                        onClick={() => {
                          if (!tags.includes(worksItem)) {
                            setTags([...tags, worksItem]);
                          } else {
                            const selectedTags = [...tags].filter((selectedTag: string) => selectedTag !== worksItem);
                            setTags(selectedTags);
                          }
                        }}
                        key={index}
                        className={tags.includes(worksItem) ? styles.tag_true : ''}
                      >
                        {worksItem}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <motion.div
                variants={childFadeInUpWorksContainer}
                initial="hidden"
                animate="show"
                className={styles.post}
              >
                <ul
                  className={styles.getTemplate}
                  style={{ gridTemplateRows: 'repeat(' + Math.round(counter) + ', ' + rate + ')' }}
                >
                  {filteredPosts.map((items, work_index: number) => {
                    if (work_index) post_tag_array = [];

                    items.fields.worsTag.map((push_tag: any, pushIndex: number) =>
                      post_tag_array.push(push_tag.fields.worksTagName)
                    );

                    Amari = count / changeCount;

                    if (count >= changeCount) {
                      AmariN = 0;
                      AmariN = AmariN + plusNumber * Math.floor(Amari);
                      Con = count - changeCount * Math.floor(Amari);
                    } else {
                      Con = count;
                    }

                    // console.log('Amari', Amari);
                    // console.log('Amari', Math.floor(Amari));
                    // console.log('count', count);
                    // console.log('AmariN', AmariN);
                    // console.log('Con', Con);
                    // console.log('---------------');

                    let Counter1: number = counterArray[0][0];
                    let Counter2: number = counterArray[0][1];
                    let Counter3: number = counterArray[0][2];
                    let Counter4: number = counterArray[0][3];

                    if (!isAllTag && post_tag_array.some((tag_value: string) => tags.includes(tag_value))) {
                      Counter1 = counterArray[Con][0] + AmariN;
                      Counter2 = counterArray[Con][1];
                      Counter3 = counterArray[Con][2] + AmariN;
                      Counter4 = counterArray[Con][3];

                      count = count + 1;

                      return (
                        <>
                          <motion.li
                            style={{ gridArea: Counter1 + '/' + Counter2 + '/' + Counter3 + '/' + Counter4 }}
                            variants={childFadeInUpWorksItems}
                            key={work_index}
                          >
                            <WorkCard key={work_index} workData={items} index={work_index}></WorkCard>
                          </motion.li>
                        </>
                      );
                    } else if (isAllTag) {
                      Counter1 = counterArray[Con][0] + AmariN;
                      Counter2 = counterArray[Con][1];
                      Counter3 = counterArray[Con][2] + AmariN;
                      Counter4 = counterArray[Con][3];

                      count = count + 1;

                      return (
                        <>
                          <motion.li
                            style={{ gridArea: Counter1 + '/' + Counter2 + '/' + Counter3 + '/' + Counter4 }}
                            variants={childFadeInUpWorksItems}
                            key={work_index}
                          >
                            <WorkCard key={work_index} workData={items} index={work_index}></WorkCard>
                          </motion.li>
                        </>
                      );
                    }
                  })}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default Works;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: 'tcl09h8ynjdr',
    accessToken: 'wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc',
  });

  const res_work = await client.getEntries({ content_type: 'works', order: 'fields.order' });
  const res_work_cat = await client.getEntries({ content_type: 'worksTag' });

  return {
    props: { workData: res_work.items, workTag: res_work_cat.items },
  };
};
