import Head from 'next/head';
import BlogCard from '../components/molecules/blogCard';
import BackGround from '../components/molecules/BackGround';
import styles from '../styles/blog.module.scss';
import type { NextPage, GetStaticProps } from 'next';
import { createClient } from 'contentful';
import { blogData, blogTag } from '../lib/type';
import { useState, useEffect } from 'react';
import { type } from 'os';
import Animation from '../components/templates/Animation';

export interface blogData_type {
  fields: {
    blogThumbTtl: string;
    blogTtl: string;
    blogImg: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    slug: string;
    categoryTag: {
      fields: {
        slug?: string;
        tagName?: string;
      };
      slug?: string;
    }[];
  };
}

type Props = blogTag & blogData;

const Blog: NextPage<Props> = ({ blogData, blogTag }: Props) => {
  const [filteredPosts, setFilteredPosts] = useState<blogData_type[]>(blogData);

  const title = 'BLOGS -代表諸富稜の公式ブログ-';
  const description = '取締役代表のとみー(諸富)が執筆する公式ブログ　—— 企業文化から経営思想、地域での活動まで';

  const tag_array: any = [];
  blogTag.map((tag) => tag_array.push(tag.fields.tagName));

  var post_tag_array: string[] = [];

  //タグの種類
  const [tags, setTags] = useState<string[]>([]);

  //全てを選択された時
  const [isAllTag, setIsAllTag] = useState(true);

  useEffect(() => {
    if (tags.length > 0) {
      setIsAllTag(false);
    } else {
      setIsAllTag(true);
    }
  }, [tags]);

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
        <div className={styles.blog}>
          <div className={styles.white_bg}>
            <div className={styles.container}>
              <div className={styles.ttl}>
                <h2>MOVEDOOR blog</h2>
                <hr />
                <p>取締役代表のとみー(諸富)が執筆する公式ブログ　—— 企業文化から経営思想、地域での活動まで</p>
              </div>
              <div className={styles.cat}>
                <ul className={styles.post_tag}>
                  <li
                    onClick={() => {
                      setIsAllTag(true);
                      setTags([]);
                    }}
                    className={isAllTag ? styles.tag_true : ''}
                  >
                    #全て
                  </li>
                  {tag_array.map((cat_items: any, cat_index: number) => {
                    return (
                      <li
                        onClick={() => {
                          if (!tags.includes(cat_items)) {
                            setTags([...tags, cat_items]);
                          } else {
                            const selectedTags = [...tags].filter((selectedTag: string) => selectedTag !== cat_items);
                            setTags(selectedTags);
                          }
                        }}
                        key={cat_index}
                        className={tags.includes(cat_items) ? styles.tag_true : ''}
                      >
                        #{cat_items}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={styles.post}>
                <ul>
                  {filteredPosts.map((items, top_blog_index) => {
                    post_tag_array = [];
                    items.fields.categoryTag.map((push_tag: any) => post_tag_array.push(push_tag.fields.tagName));

                    if (!isAllTag && post_tag_array.some((tag_value: string) => tags.includes(tag_value))) {
                      return <BlogCard key={top_blog_index} blogData={items} index={top_blog_index}></BlogCard>;
                    } else if (isAllTag) {
                      return <BlogCard key={top_blog_index} blogData={items} index={top_blog_index}></BlogCard>;
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: 'tcl09h8ynjdr',
    accessToken: 'wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc',
  });

  const res_blog = await client.getEntries({ content_type: 'blog' });
  const res_blog_cat = await client.getEntries({ content_type: 'blogTag' });

  return {
    props: { blogData: res_blog.items, blogTag: res_blog_cat.items },
  };
};
