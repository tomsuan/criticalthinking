import Link from "next/link";
import Layout from "../../components/Layout";

export default function ArgumentMapping() {
  return (
    <Layout
      title="Argument Mapping"
      description="Structure reasoning visually: premises, conclusions, objections, and rebuttals."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Argument Mapping</h1>
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
            <li>Write the main conclusion as one sentence.</li>
            <li>List the supporting reasons as separate premises (one idea per line).</li>
            <li>For each premise, note what evidence it relies on.</li>
            <li>Add objections: what would someone sceptical say?</li>
            <li>Add rebuttals only if you can support them (don’t “hand-wave” them).</li>
            <li>Mark weak points: vague terms, missing evidence, hidden assumptions.</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Why</h2>
          <p>
            Most arguments feel persuasive because they are presented as a flow. A map breaks the flow into checkable
            parts, making gaps and weak premises obvious.
          </p>
        </section>
      </article>
    </Layout>
  );
}
