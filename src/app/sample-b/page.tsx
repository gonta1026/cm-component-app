import { HogeHoge } from '@/components/ui-parts/Sample/HogeHoge';
import Link from 'next/link';

export function generateMetadata() {
  return {
    title: `sample-b | cm-component-app`,
  };
}

export default function sampleB() {
  return (
    <>
      <Link href={'/sample-a'}>to sample-a</Link>
      <p>import @/components/ui-parts/Sample/HogeHoge</p>
      <HogeHoge />
    </>
  );
}
