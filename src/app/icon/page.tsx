import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import Link from 'next/link';
import styles from './styles.module.scss';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';

export function generateMetadata() {
  return {
    title: `icon | cm-component-app`,
  };
}

export default function Icon() {
  return (
    <div className={styles.icon}>
      <CmContainer>
        <h2 className={styles.title}>Icon</h2>
        <div className={styles.content}>
          <div className={styles.topBlock}>
            <Link href={'/'} className={styles.prevLink}>
              ← TopPage
            </Link>
          </div>
          <ul className={styles.icons}>
            {Object.values(MATERIAL_ICON).map((icon) => (
              <li key={icon.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon.src} alt={icon.alt} />
                <p>{icon.src}</p>
                <p>{icon.alt}</p>
              </li>
            ))}
          </ul>
        </div>
      </CmContainer>
    </div>
  );
}
