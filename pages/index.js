import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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

      <section className="headingMd padding1px">
        <h2 className="headingLg">Blog</h2>

        <ul className="list">
          {allPostsData.map(({ id, date, title }) => (
            <li className="listItem" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
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

        .headingLg {
          font-size: 1.5rem;
          line-height: 1.4;
          margin: 1rem 0;
        }

        .headingMd {
          font-size: 1.2rem;
          line-height: 1.5;
        }

        .list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .listItem {
          margin: 0 0 1.25rem;
        }
      `}</style>
    </Layout>
  );
}
