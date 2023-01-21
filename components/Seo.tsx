import Head from 'next/head';

interface Props {
  title: string;
}

export default function Seo({ title }: Props) {
  return (
    <Head>
      <title>Page | {title}</title>
    </Head>
  );
}
