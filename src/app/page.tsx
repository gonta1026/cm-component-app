import Link from 'next/link';
import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import styles from './styles.module.scss';

export function generateMetadata() {
  return {
    title: `ui-parts | cm-component-app`,
  };
}

export default function Home() {
  return (
    <div className={styles.home}>
      <CmContainer>
        <h2 className={styles.title}>Components / ui-parts</h2>
        <ul className={styles.items}>
          <li>
            <Link href={'/button'}>Button</Link>
          </li>
        </ul>
      </CmContainer>
    </div>
  );
}
