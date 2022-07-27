import { GetStaticPaths, GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/post.module.scss';
import { createClient, EntryCollection } from 'contentful';
import { blogData, blogTag, LinkProps } from '../../lib/type';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { type } from 'os';
import BackBtn from '../../components/atoms/backBtn';
import { Component } from 'react';
import Cont from '../../components/molecules/Cont';
import Animation from '../../components/templates/Animation';
import Head from 'next/head';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export interface cat {
  fields: {
    tagName?: string;
  };
}

const Post: NextPage<Props> = ({ post }) => {
  const description = '取締役代表のとみー(諸富)が執筆する公式ブログ　—— 企業文化から経営思想、地域での活動まで';
  return (
    <>
      <Head>
        <title>{post.fields.name}</title>
        <meta property="description" content={description} key="description" />
        <meta property="og:title" content={post.fields.name} key="og_title" />
        <meta property="og:description" content={description} key="og_description" />
      </Head>
      <Animation />
      <div className={`${styles.blog_post} ${styles.post}`}>
        <div className={styles.post_top}>
          <div className={styles.post_img}>
            <div className={styles.img_inner}>
              <Image src={'https:' + post.fields.blogImg.fields.file.url} layout="fill" alt="ブログのサムネの大画面" />
              <div className={styles.black_filter}></div>
            </div>
          </div>
        </div>
        <div className={styles.white_bg}>
          <div className={styles.container}>
            <div className={styles.post_inner}>
              <ul className={styles.post_tag}>
                {post.fields.categoryTag?.map((cat_tags: cat, d: number) => {
                  return <li key={d}>#{cat_tags.fields.tagName}</li>;
                })}
              </ul>
              <h1>{post.fields.blogTtl}</h1>
              <hr />
              <div className={styles.post_cont}>
                <Cont postCont={post.fields.blogCont}></Cont>
              </div>
              <hr />
            </div>
            <BackBtn customLink="/blog/" />
          </div>
        </div>
      </div>
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
    content_type: 'blog',
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
    content_type: 'blog',
    'fields.slug': params.slug,
  });
  return {
    props: { post: items[0] },
  };
};
