import { HogeHoge } from '@/components/ui-parts/Sample';

export function generateMetadata() {
  return {
    title: `sample-a | cm-component-app`,
  };
}

export default function sampleA() {
  return (
    <>
      <p>import @/components/ui-parts/Sample</p>
      <HogeHoge />;
    </>
  );
}
