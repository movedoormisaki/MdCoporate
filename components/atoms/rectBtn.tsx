import Link from 'next/link';
import styles from '../atoms/rectBtn.module.scss';

type Props = {
  txt?: string;
  url?: string;
  bg_color?: string;
};

const RectBtn = ({ txt = 'VIEW MORE', url = '/', bg_color = '#DDDDDD' }: Props) => {
  return (
    <Link href={url}>
      <div className={styles.rect_btn} style={{ background: bg_color }}>
        <div className={styles.inner}>
          <a>{txt}</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="57.651" height="9.434" viewBox="0 0 57.651 9.434">
            <g id="グループ_109" data-name="グループ 109" transform="translate(0 0.934)">
              <line
                id="線_18"
                data-name="線 18"
                x2="50"
                transform="translate(0 8)"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
              <path
                id="パス_158"
                data-name="パス 158"
                d="M0,0,12,8H0Z"
                transform="translate(44)"
                stroke="#000"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default RectBtn;
