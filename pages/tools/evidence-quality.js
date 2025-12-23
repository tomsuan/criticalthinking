import Link from "next/link";
import Layout from "../../components/Layout";

export default function EvidenceQuality() {
  return (
    <Layout
      title="Evidence Quality"
      description="Assess the quality, reliability, and relevance of evidence before drawing conclusions."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Evidence Quality</h1>
        <p className="subhead">Tool</p>
      </header>

      <nav className="navRow" aria-label="Tool navigation">
        <Link href="/tools" className="navLink">
          ← Tools
        </Link>
        <span className="navSep">·</span>
        <Link href="/read/challenging-a-claim" className="navLink">
          Source: Challenging a Claim →
        </Link>
      </nav>

      <article className="content" aria-label="Tool content" style={{ marginTop: 28 }}>
        <section>
          <h2 className="h2">What to check</h2>
          <ol className="tocList">
            <li>What type of evidence is this (experiment, observation, testimony, anecdote)?</li>
            <li>How was the evidence gathered, and by whom?</li>
            <li>Is it reproducible or independently verifiable?</li>
            <li>Are there conflicts of interest or incentives to distort results?</li>
            <li>Does stronger or higher-quality evidence contradict it?</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Why</h2>
          <p>
            Weak arguments often rely on low-quality evidence. This tool forces you to rank evidence
            properly and avoid giving anecdotes, impressions, or authority claims more weight than
            they deserve.
          </p>
        </section>
      </article>
    </Layout>
  );
}
