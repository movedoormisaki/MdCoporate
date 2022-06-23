import { GetStaticPaths, GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import BackGround from '../../components/molecules/BackGround';
import styles from '../../styles/post.module.scss';
import { createClient, EntryCollection } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { type } from 'os';
import BackBtn from '../../components/atoms/backBtn';
import Image from 'next/image';
import Cont from '../../components/molecules/Cont';
import Animation from '../../components/templates/Animation';
import Head from 'next/head';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export interface cat {
  fields: {
    worksTagName?: string;
  };
}

const WorksPost: NextPage<Props> = ({ post }) => {
  const description =
    '株式会社MOVEDOORの数ある実績のひとつです。他にも多くの実績があるので、覗いてください';
  return (
    <>
      <Head>
        <title>{post.fields.workTtl}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={post.fields.workTtl} />
        <meta property="og:description" content={description} />
      </Head>
      <Animation />
      <BackGround opacity={0.8}>
        <div className={`${styles.works_post} ${styles.post}`}>
          <div className={styles.post_top}>
            <div className={styles.post_img}>
              <div className={styles.img_inner}>
                <Image
                  src={'https:' + post.fields.workThumb.fields.file.url}
                  layout="fill"
                  alt="ブログのサムネの大画面"
                />
                <div className={styles.black_filter}></div>
                <div className={styles.post_top_ttl}>
                  <div className={styles.works_top_ttl}>
                    <p>{post.fields.workSubTtl}</p>
                    <h6>{post.fields.workTtl}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.white_bg}>
            <div className={styles.container}>
              <div className={styles.post_inner}>
                <ul className={styles.post_tag}>
                  {post.fields.worsTag?.map((cat_tags: cat, d: number) => {
                    return <li key={d}>#{cat_tags.fields.worksTagName}</li>;
                  })}
                </ul>
                <h1>{post.fields.workTtl}</h1>
                <div className={styles.post_cont}>
                  <Cont postCont={post.fields.workCont}></Cont>
                </div>
                <hr />
              </div>
              <BackBtn customLink="/works/" />
            </div>
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default WorksPost;

const client = createClient({
  space: 'tcl09h8ynjdr',
  accessToken: 'wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc',
});

type Params = {
  [param: string]: any;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: EntryCollection<any> = await client.getEntries({
    content_type: 'works',
  });

  const paths = res.items.map((item) => {
    return {
      params: { workTtl: item.fields.workTtl },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { items } = await client.getEntries<any>({
    content_type: 'works',
    'fields.workTtl': params.workTtl,
  });
  return {
    props: { post: items[0] },
  };
};
