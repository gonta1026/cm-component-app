import React, { FC } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';
import Link from 'next/link';

type Props = {
  //
};

export const CmBottomNavigation: FC<Props> = () => {
  const { home, settings, history, listAlt } = MATERIAL_ICON;
  return (
    <div className={styles.cmBottomNavigation}>
      <Link href={'/'} className={styles.link}>
        <Image src={home.src} alt={home.alt} width={30} height={30} />
      </Link>
      <Link href={'/base-items'} className={styles.link}>
        <Image src={listAlt.src} alt={listAlt.alt} width={30} height={30} />
      </Link>
      <Link href={'/orders'} className={styles.link}>
        <Image src={history.src} alt={history.alt} width={30} height={30} />
      </Link>
    </div>
  );
};
