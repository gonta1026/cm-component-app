import { HogeHoge } from '@/components/ui-parts/Sample';
import Link from 'next/link';

export function generateMetadata() {
  return {
    title: `sample-a | cm-component-app`,
  };
}

export default function sampleA() {
  return (
    <>
      <Link href={'/sample-b'}>to sample-b</Link>
      <p>import @/components/ui-parts/Sample</p>
      <HogeHoge />;
    </>
  );
}
