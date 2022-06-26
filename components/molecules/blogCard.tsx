import Image from 'next/image';
import styles from '../molecules/blogCard.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface blogData {
  blogData: {
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
          tagName?: string;
          slug?: string;
        };
      }[];
    };
  };
  index: number;
}

const BlogCard = (props: blogData) => {
  const { blogData, index } = props;
  const categoryTag = blogData.fields.categoryTag;
  const router = useRouter().pathname;

  return (
    <>
      <div className={router == '/blog' ? `${styles.blog_card} ${styles.blog_page}` : styles.blog_card}>
        <Link href={`/blog/${blogData.fields.slug}`}>
          <a className={styles.blog_a}>
            <div className={styles.blog_thumb}>
              <div className={styles.img_inner}>
                <Image
                  width={440}
                  height={280}
                  src={'https:' + blogData.fields.blogImg.fields.file.url}
                  layout="responsive"
                  alt="ブログの背景"
                />
              </div>
              <div className={styles.border}></div>
            </div>
            <div className={styles.blog_detail}>
              <p className={styles.blog_sub_ttl}>{blogData.fields.blogTtl}</p>
              <ul>
                {categoryTag?.map((cat_tags, d: number) => {
                  return <li key={d}>#{cat_tags.fields.tagName}</li>;
                })}
              </ul>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
