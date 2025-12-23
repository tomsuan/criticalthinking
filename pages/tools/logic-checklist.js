import Link from "next/link";
import Layout from "../../components/Layout";

export default function LogicChecklist() {
  return (
    <Layout
      title="Logic Checklist"
      description="Define claim/terms, list premises, identify conclusion, check validity/soundness, test alternatives."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Logic Checklist</h1>
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
          <h2 className="h2">Checklist</h2>
          <ol className="tocList">
            <li>What exactly is the claim? (One sentence, ordinary language.)</li>
            <li>Define key terms. (What do the words mean here?)</li>
            <li>List the premises explicitly. (Premise 1, Premise 2, etc.)</li>
            <li>Identify the conclusion. (What is the argument trying to prove?)</li>
            <li>Check validity: if the premises were true, would the conclusion follow?</li>
            <li>Check soundness: are the premises actually true or well-supported?</li>
            <li>Test alternatives: what else could explain the same facts?</li>
            <li>State what would change your mind. (What evidence would overturn it?)</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Why</h2>
          <p>
            This prevents you being carried by rhetoric. It forces the structure into the open and makes it possible to
            evaluate the reasoning instead of reacting to the presentation.
          </p>
        </section>
      </article>
    </Layout>
  );
}
