'use client';
import '@/assets/styles/globals.scss';
import styles from './styles.module.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={styles.layout}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
{
}
