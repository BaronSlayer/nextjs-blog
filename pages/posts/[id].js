import Head from 'next/head';
import Layout from '../../components/Layout';
import Date from '../../components/Date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

function Post({ postData }) {
  return (
    <Layout>
      <style jsx>{`
        .headingXl {
          font-size: 2rem;
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: -0.05rem;
          margin: 1rem 0;
        }
        .lightText {
          color: #666;
        }
      `}</style>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h3 className="headingXl">{postData.title}</h3>

        <div className="lightText">
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export default Post;
