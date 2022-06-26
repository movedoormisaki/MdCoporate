import Image from 'next/image';
import styles from '../molecules/workCard.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getWindowSize } from '../../hooks/GetWindowSize';
import { useState, useEffect } from 'react';

export interface workData {
  workData: {
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
  };
  index?: number;
  count?: any;
}

const WorkCard = (props: workData) => {
  const { workData, index } = props;
  const { width } = getWindowSize();

  return (
    <>
      <div
        key={index}
        className={`${styles.works_li}`}
      >
        <Link href={`/works/${workData.fields.workTtl}`}>
          <a className={styles.works_a}>
            <div className={styles.close_inner}>
              <div className={styles.works_img}>
                <div className={styles.img_inner}>
                  {(() => {
                    if (workData.fields.workThumb) {
                      return (
                        <>
                          <Image
                            src={'https:' + workData.fields.workThumb.fields.file.url}
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
                <p>{workData.fields.workSubTtl}</p>
                <h6>{workData.fields.workTtl}</h6>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default WorkCard;
