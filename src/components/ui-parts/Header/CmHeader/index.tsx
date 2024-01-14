import React, { FC } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
// import { MATERIAL_ICON } from '@/assets/images/materialIcon';
// import Image from 'next/image';

type Props = {
  // children: ReactNode;
};

export const CmHeader: FC<Props> = () => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <header className={styles.cmHeader}>
      <div className={styles.inner}>
        <Link href={'/'}>モッタイナーイ</Link>
        {/* <button className={styles.icon} type="button" onClick={() => setOpen((prev) => !prev)}>
          {isOpen ? (
            <Image src={clear.src} alt={clear.alt} width={25} height={25} />
          ) : (
            <Image src={menu.src} alt={menu.alt} width={30} height={30} />
          )}
        </button> */}
      </div>
      {/* {isOpen && (
        <ul className={styles.menuList}>
          <li className={styles.menu}>
            <Link href={'/users/password'}></Link>
          </li>
        </ul>
      )} */}
    </header>
  );
};
