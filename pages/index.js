import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="headingMd">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .headingMd {
          font-size: 1.2rem;
          line-height: 1.5;
        }
      `}</style>
    </Layout>
  );
}
