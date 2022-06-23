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
  index: number;
  count?: any;
}

const WorkCard = (props: workData) => {
  const { workData, index, count } = props;
  const { width } = getWindowSize();
  const plus_n = 9;

  const counter: any[] = [
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

  const [AmariN, setAmariN] = useState(0);
  const [Con, setCon] = useState(0);

  console.log('count =', count);

  useEffect(() => {
    const Amari = count / 9;
    setAmariN(0);
    if (count > 8) {
      setAmariN(AmariN + 9 * Math.floor(Amari));
      setCon(count - 9 * Math.floor(Amari));
    } else {
      setCon(count + 9 * Math.floor(Amari));
    }
    // console.log('AmariN =', AmariN, 'amari = ', Math.floor(Amari));
  }, []);

  const Counter1 = counter[Con][0] + AmariN;
  const Counter2 = counter[Con][1];
  const Counter3 = counter[Con][2] + AmariN;
  const Counter4 = counter[Con][3];

  return (
    <>
      <li className={`${styles.works_li} liElement`} key={index}>
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
      </li>
      {/* <style jsx>{`
        .liElement:nth-child(${count + 1}) {
          grid-area: ${Counter1} / ${Counter2} / ${Counter3} / ${Counter4};
        }
      `}</style> */}
    </>
  );
};

export default WorkCard;
