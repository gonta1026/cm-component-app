import { HogeHoge } from '@/components/ui-parts/Sample/HogeHoge';

export function generateMetadata() {
  return {
    title: `sample-b | cm-component-app`,
  };
}

export default function sampleB() {
  return (
    <>
      <p>import @/components/ui-parts/Sample/HogeHoge</p>
      <HogeHoge />
    </>
  );
}
