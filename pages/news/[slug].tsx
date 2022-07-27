import { GetStaticPaths, GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import styles from '../../styles/post.module.scss';
import { createClient, EntryCollection } from 'contentful';
import { type } from 'os';
import BackBtn from '../../components/atoms/backBtn';
import Moment from 'react-moment';
import Cont from '../../components/molecules/Cont';
import BackGround from '../../components/molecules/BackGround';
import Animation from '../../components/templates/Animation';
import Head from 'next/head';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export interface cat {
  fields: {
    tagName?: string;
  };
}

const Post: NextPage<Props> = ({ post }) => {
  const description = 'MOVEDOORのお知らせになります。日々進化しているMOVEDOORは変化が速いので、見逃さないでください';
  return (
    <>
      <Head>
        <title>{post.fields.newTtl}</title>
        <meta property="description" content={description} key="description" />
        <meta property="og:title" content={post.fields.newTtl} key="og_title" />
        <meta property="og:description" content={description} key="og_description" />
      </Head>
      <Animation />
      <BackGround opacity={0.6}>
        <div className={`${styles.news_post} ${styles.post}`}>
          <div className={styles.post_top}></div>
          <div className={styles.white_bg}>
            <div className={styles.container}>
              <div className={styles.post_inner}>
                <p className={styles.post_date}>
                  <Moment format="YYYY.MM.DD ddd" className={styles.date}>
                    {post.fields.newsData}
                  </Moment>
                </p>
                <h1>{post.fields.newTtl}</h1>
                <hr />
                <div className={styles.post_cont}>
                  <Cont postCont={post.fields.newsCont}></Cont>
                </div>
              </div>
              <BackBtn customLink="/" />
            </div>
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default Post;

const client = createClient({
  space: 'tcl09h8ynjdr',
  accessToken: 'wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc',
});

type Params = {
  [param: string]: any;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: EntryCollection<any> = await client.getEntries({
    content_type: 'news',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { items } = await client.getEntries<any>({
    content_type: 'news',
    'fields.slug': params.slug,
  });
  return {
    props: { post: items[0] },
  };
};
