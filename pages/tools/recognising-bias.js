import Link from "next/link";
import Layout from "../../components/Layout";

export default function RecognisingBiasTool() {
  return (
    <Layout
      title="Recognising Bias"
      description="Bias is a natural feature of human cognition. Once recognised, safeguards can be put in place to limit its influence."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Recognising Bias</h1>
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
          <h2 className="h2">Core idea</h2>
          <p>
            Bias is a natural feature of human cognition. Once recognised, safeguards can be put in place to limit
            its influence.
          </p>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">What to do</h2>
          <ol className="tocList">
            <li>State the claim you are judging in one clear sentence.</li>
            <li>Ask: what do I want to be true here, and why?</li>
            <li>Ask: what would I accept as evidence against my current view?</li>
            <li>Look for motivated reasoning: are you defending a position rather than testing it?</li>
            <li>Force an alternative: write the strongest plausible opposing view in one paragraph.</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Safeguards</h2>
          <ol className="tocList">
            <li>Separate identity from the claim: “If this is false, what changes — and what doesn’t?”</li>
            <li>Use pre-commitment: decide your standard of proof before you argue.</li>
            <li>Seek disconfirming evidence first, not last.</li>
            <li>Prefer independent replication and multiple sources over one persuasive story.</li>
            <li>Slow down: write your reasons, then re-check them after time has passed.</li>
          </ol>
        </section>
      </article>
    </Layout>
  );
}
