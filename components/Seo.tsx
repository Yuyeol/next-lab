import { NextSeo } from 'next-seo';

interface Props {
  title: string;
}

export default function Seo({ title }: Props) {
  return <NextSeo title={`Page | ${title}`} />;
}
