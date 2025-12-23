import Link from "next/link";
import Layout from "../../components/Layout";

export default function FalsificationTool() {
  return (
    <Layout
      title="Falsification"
      description="A serious claim must expose itself to the risk of being wrong."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Falsification</h1>
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
          <h2 className="h2">What to do</h2>
          <ol className="tocList">
            <li>State the claim in one sentence.</li>
            <li>Write what would have to be true for the claim to be false.</li>
            <li>List the observable tests: what could you measure, compare, or check?</li>
            <li>Decide what result would make you withdraw or revise the claim.</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Why</h2>
          <p>
            If nothing could count against a claim, it is not being treated as an empirical claim. Falsification
            forces honesty about what would change your mind.
          </p>
        </section>
      </article>
    </Layout>
  );
}

