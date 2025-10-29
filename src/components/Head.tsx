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

      {/* Preload Critical Resources */}
      <link
        rel="preload"
        href="/fonts/Pretendard-Regular.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Pretendard-Medium.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />

      {/* Preload Critical Images - 실제 이미지 경로로 수정 */}
      <link rel="preload" href="/sound/papersound.mp3" as="audio" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kimminkum.github.io/thebriefing" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Theme */}
      <meta name="theme-color" content="#fdf7e3" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
