import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Имя Фамилия';
export const siteTitle = 'Next.js Sample Website';

function Layout({ children, home }: {children: React.ReactNode; home?: boolean}) {
  return (
    <div className="container">
      <style jsx>
        {`
          .container {
            max-width: 36rem;
            padding: 0 1rem;
            margin: 3rem auto 6rem;
          }
          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .backToHome {
            margin: 3rem 0 0;
          }
          .heading2Xl {
            font-size: 2.5rem;
            line-height: 1.2;
            font-weight: 800;
            letter-spacing: -0.05rem;
            margin: 1rem 0;
          }

          .headingLg {
            font-size: 1.5rem;
            line-height: 1.4;
            margin: 1rem 0;
          }

          .borderCircle {
            border-radius: 9999px;
          }

          .colorInherit {
            color: inherit;
          }
        `}
      </style>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="header">
        {home ? (
          <div>
            <Image
              priority
              src="/images/profile.jpg"
              className="borderCircle"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="heading2Xl">{name}</h1>
          </div>
        ) : (
          <div>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="borderCircle"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="headingLg">
              <Link href="/">
                <a className="colorInherit">{name}</a>
              </Link>
            </h2>
          </div>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div className="backToHome">
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
