import Head from 'next/head';

interface CustomHeadProps {
  title?: string;
  description?: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({
  title = '김민겸 The Briefing',
  description = 'UI/UX 중심 자기소개형 포트폴리오입니다.',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* SEO 최적화 */}
      <meta name="keywords" content="김민겸, 포트폴리오, 프론트엔드, React, TypeScript, Next.js, UI/UX" />
      <meta name="author" content="김민겸" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kimminkum.github.io/thebriefing" />
      <meta property="og:site_name" content="김민겸 The Briefing" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Theme */}
      <meta name="theme-color" content="#fdf7e3" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://kimminkum.github.io/thebriefing" />
    </Head>
  );
};

export default CustomHead;
