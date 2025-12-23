import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, description, children }) {
  const fullTitle = title
    ? `${title} — Critical Thinking: A Short Primer`
    : "Critical Thinking: A Short Primer";

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page">
        <header className="siteHeader">
          <Link href="/" className="brand">
            Critical Thinking: <span className="brandEm">A Short Primer</span>
          </Link>

          <nav className="siteNav" aria-label="Site navigation">
            <Link href="/read" className="siteNavLink">
              Read
            </Link>
            <Link href="/tools" className="siteNavLink">
              Tools
            </Link>
          </nav>
        </header>

        {children}
      </main>
    </>
  );
}
