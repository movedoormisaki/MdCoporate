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
import { motion } from 'framer-motion';
import Animation from '../components/templates/Animation';

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

  const counter = filteredPosts.length;

  let count: number = -1;

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
                  works{' '}
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

              <div className={styles.post}>
                <ul className="getTemplate">
                  {filteredPosts.map((items, work_index: number) => {
                    if (work_index) post_tag_array = [];
                    items.fields.worsTag.map((push_tag: any, pushIndex: number) =>
                      post_tag_array.push(push_tag.fields.worksTagName)
                    );

                    if (!isAllTag && post_tag_array.some((tag_value: string) => tags.includes(tag_value))) {
                      count = count + 1;
                      return (
                        <>
                          <WorkCard key={work_index} workData={items} index={work_index} count={count}></WorkCard>
                        </>
                      );
                    } else if (isAllTag) {
                      count = count + 1;
                      return (
                        <>
                          <WorkCard key={work_index} workData={items} index={work_index} count={count}></WorkCard>
                        </>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BackGround>
      <style jsx>{`
        .getTemplate {
          display: grid;
          grid-template-rows: repeat(${counter}, 8vw);
          grid-template-column: repeat(3, auto-fit);
          grid-gap: 20px 10px;
        }
        @media screen and (max-width: 576px) {
          .getTemplate {
            grid-template-rows: repeat(${counter * 1.5}, 16vw);
          }
        }
      `}</style>
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
