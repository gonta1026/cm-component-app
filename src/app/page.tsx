import Link from 'next/link';
import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import styles from './styles.module.scss';

export function generateMetadata() {
  return {
    title: `ui-parts | cm-component-app`,
  };
}

const LINKS = [
  {
    href: '/button',
    name: 'Button',
  },
  {
    href: '/input',
    name: 'Input',
  },
  {
    href: '/textarea',
    name: 'Textarea',
  },
  {
    href: '/select',
    name: 'Select',
  },
  {
    href: '/radio',
    name: 'Radio',
  },
  {
    href: '/checkbox',
    name: 'Checkbox',
  },
  {
    href: '/icon',
    name: 'Icon',
  },
];

export default function Home() {
  return (
    <div className={styles.home}>
      <CmContainer>
        <h2 className={styles.title}>Components / ui-parts</h2>
        <ul className={styles.items}>
          {LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </CmContainer>
    </div>
  );
}
