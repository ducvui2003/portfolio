import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
  author: string;
}

const MetaTags = ({
  title,
  description,
  image,
  url,
  siteName,
  author,
}: MetaTagsProps) => {
  return (
    <Helmet>
      <meta name="author" content={author} />
      <meta
        name="keywords"
        content="React, JavaScript, semantic markup, html"
      />
      <meta property="type" content="website" />
      <meta property="url" content={url} />
      <meta property="siteName" content={siteName} />
      <meta property="image" content={image} />
      <meta property="locale" content="vi_VN" />
      <meta property="description" content={description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:siteName" content={siteName} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      <title>{title}</title>
    </Helmet>
  );
};

export default MetaTags;
