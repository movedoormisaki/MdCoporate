import Link from 'next/link';
import styles from '../atoms/backBtn.module.scss';
import { useRouter } from 'next/router';

interface LinkProps {
  customLink?: string;
}

const BackBtn = ({ customLink = '/' }: LinkProps) => {
  const router = useRouter().pathname;
  return (
    <>
      <div className={router == '/member/[member]' ? `${styles.backbtn} ${styles.member_page}` : styles.backbtn}>
        <Link href={customLink}>
          <a>← Back</a>
        </Link>
      </div>
    </>
  );
};

export default BackBtn;
