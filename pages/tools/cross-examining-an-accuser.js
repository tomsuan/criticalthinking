// pages/tools/cross-examining-an-accuser.js
import Link from "next/link";
import Layout from "../../components/Layout";

export default function CrossExaminingAnAccuser() {
  return (
    <Layout
      title="Cross-Examining an Accuser"
      description="Stress-test an accusation by separating claim, evidence, assumptions, and alternatives."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Cross-Examining an Accuser</h1>
        <p className="subhead">Tool</p>
      </header>

      <nav className="navRow" aria-label="Tool navigation">
        <Link href="/tools" className="navLink">
          ← Tools
        </Link>
        <span className="navSep">·</span>
        <Link href="/read/practical-tools" className="navLink">
          Source: Practical Tools →
        </Link>
      </nav>

      <article className="content" aria-label="Tool content" style={{ marginTop: 28 }}>
        <section>
          <h2 className="h2">What to do</h2>
          <ol className="tocList">
            <li>
              <strong>Pin down the accusation.</strong> Ask for one clear sentence: who did what, when, and what standard
              was violated.
            </li>
            <li>
              <strong>Separate evidence from interpretation.</strong> “What did you see/hear/measure?” versus “What do
              you think it means?”
            </li>
            <li>
              <strong>Force specifics.</strong> Dates, quotes, actions, documents, witnesses, context. Vague claims stay
              vague because nobody insists on detail.
            </li>
            <li>
              <strong>Expose the hidden assumptions.</strong> What must be true for this accusation to hold (intent,
              knowledge, motive, causation, exclusivity)?
            </li>
            <li>
              <strong>Generate alternatives.</strong> List at least three plausible rival explanations for the same
              facts.
            </li>
            <li>
              <strong>Ask what would change their mind.</strong> If there is no conceivable disconfirming evidence, it’s
              not an evidential claim — it’s a posture.
            </li>
            <li>
              <strong>Match confidence to support.</strong> Strong accusation requires strong evidence. If the support is
              weak, the conclusion must be weaker.
            </li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Why</h2>
          <p>
            Accusations often win by speed and moral pressure, not by clarity. This tool slows things down and forces a
            claim to become answerable to reality: clear wording, inspectable evidence, stated assumptions, and serious
            alternatives.
          </p>
        </section>
      </article>
    </Layout>
  );
}
