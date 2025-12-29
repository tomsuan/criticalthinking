import Link from "next/link";
import Layout from "../../components/Layout";

export default function SocraticQuestions() {
  return (
    <Layout
      title="Socratic Questions"
      description="A short set of Socratic questions to clarify claims, expose assumptions, and test evidence."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Socratic Questions</h1>
        <p className="subhead">
          Prompts to clarify meaning, surface assumptions, and test reasoning.
        </p>
      </header>

      <nav className="navRow" aria-label="Tool navigation">
        <Link href="/tools" className="navLink">
          ← Tools index
        </Link>
        <span className="navSep">·</span>
        <Link
          href="/read/analysis-inference-evaluation"
          className="navLink"
        >
          Source: Analysis, Inference and Evaluation →
        </Link>
      </nav>

      <section className="panel" style={{ marginTop: 18 }}>
        <ol className="toolList">
          <li>What exactly is being claimed?</li>
          <li>Who is making the claim?</li>
          <li>What assumptions does this claim rely on?</li>
          <li>What evidence is offered in support?</li>
          <li>How reliable is that evidence?</li>
          <li>What would count against this claim?</li>
          <li>Are there plausible alternative explanations?</li>
          <li>What terms need to be defined more precisely?</li>
          <li>What follows if the claim is true?</li>
          <li>What follows if it is false?</li>
        </ol>
      </section>

      <footer className="footer">
        <nav className="navRow" aria-label="Tool navigation">
          <Link href="/tools" className="navLink">
            ← Tools index
          </Link>
          <span className="navSep">·</span>
          <Link
            href="/read/analysis-inference-evaluation"
            className="navLink"
          >
            Source: Analysis, Inference and Evaluation →
          </Link>
        </nav>
      </footer>
    </Layout>
  );
}
