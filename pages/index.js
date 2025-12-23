import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title={null} description="Critical Thinking: A Short Primer — read online.">
      <header>
        <p className="kicker">Critical Thinking</p>
        <h1 className="h1">A Short Primer</h1>
        <p className="subhead">Read the book online.</p>
      </header>

      <nav className="navRow" aria-label="Primary navigation">
        <Link className="navLink" href="/read">
          Start reading →
        </Link>
        <span className="navSep">·</span>
        <Link className="navLink" href="/read/analysing-the-claim">
          Jump to: Analysing the Claim →
        </Link>
      </nav>

      <section className="panel">
        <h2 className="h2">Status</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          Prototype is live. Next step is to add the remaining chapters and extract the Tools pages.
        </p>
      </section>
    </Layout>
  );
}
