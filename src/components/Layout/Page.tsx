import Head from "next/head";
import { useRouter } from "next/router";
import { memo, PropsWithChildren } from "react";
import { useLocation } from "react-router";
import { HomepageMeta } from "../../data/dataDef";

const Page = memo(
  ({ children, title, description }: PropsWithChildren<HomepageMeta>) => {
    const { pathname } = useLocation();
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />
          <link
            href={`https://reactresume.com${pathname}`}
            key="canonical"
            rel="canonical"
          />

          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/icon.svg" rel="icon" type="image/svg+xml" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/site.webmanifest" rel="manifest" />

          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta
            content={`https://reactresume.com${pathname}`}
            property="og:url"
          />

          {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
          <meta content={title} name="twitter:title" />
          <meta content={description} name="twitter:description" />
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = "Page";
export default Page;
