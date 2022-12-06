import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero bg-[url('../../static/img/home.jpeg')]">
      <div className="container text-5xl text-white">
        <h1 className="font-bold">{siteConfig.title}</h1>
        <p className="text-2xl mb-5">{siteConfig.tagline}</p>
        <div className="flex justify-center items-center">
          <Link
            className="button button--secondary button--lg text-3xl"
            to="/docs/intro">
            Go
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
