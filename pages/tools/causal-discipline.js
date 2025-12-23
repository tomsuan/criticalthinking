import Link from "next/link";
import Layout from "../../components/Layout";

export default function CausalDiscipline() {
  return (
    <Layout
      title="Causal Discipline"
      description="Avoid causal nonsense: separate correlation from causation and test counterfactuals."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Causal Discipline</h1>
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
          <h2 className="h2">Core rule</h2>
          <p>Correlation is not causation.</p>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">What to do</h2>
          <ol className="tocList">
            <li>State the causal claim in one sentence: “X causes Y”.</li>
            <li>Ask the counterfactual: “Would Y still happen if X did not?”</li>
            <li>List plausible confounders (Z) that could cause both X and Y.</li>
            <li>Check direction: could Y cause X (reverse causation)?</li>
            <li>Check timing: did X clearly come before Y?</li>
            <li>Look for dose/response: more X → more Y (when relevant).</li>
            <li>Look for mechanism: how would X produce Y?</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Red flags</h2>
          <ol className="tocList">
            <li>Single study used as proof.</li>
            <li>Huge claim based on weak observational data.</li>
            <li>No attempt to rule out confounders.</li>
            <li>No clarity on what would count as disproof.</li>
          </ol>
        </section>
      </article>
    </Layout>
  );
}
