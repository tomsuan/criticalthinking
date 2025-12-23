import Link from "next/link";
import Layout from "../../components/Layout";

export default function CriteriaBeforeYouChallenge() {
  return (
    <Layout
      title="Criteria Before You Challenge"
      description="A checklist for challenging a claim: clarify the claim, set scope, decide what evidence would change your mind."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Criteria Before You Challenge</h1>
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
          <h2 className="h2">Checklist</h2>
          <ol className="tocList">
            <li>State the claim in one clear, everyday sentence.</li>
            <li>State what you would expect to see if it were true: what could you see, count, or measure?</li>
            <li>Set the limits: when and where it applies, who and what it applies to, and by how much.</li>
            <li>
              State the nature of the evidence in terms of its quality and origin. The bigger the claim, the stronger
              the evidence should be.
            </li>
            <li>Decide in advance what would make you change your mind.</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Use</h2>
          <p>
            Use this before you argue. It forces clarity, sets standards, and prevents you from drifting into vague
            dispute.
          </p>
        </section>
      </article>
    </Layout>
  );
}
