import Link from "next/link";
import Layout from "../../components/Layout";

export default function ReadIndex() {
  return (
    <Layout
      title="Read"
      description="Read the chapters of Critical Thinking: A Short Primer."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Read</h1>
        <p className="subhead">Chapters</p>
      </header>

      <nav className="navRow" aria-label="Read navigation">
        <Link href="/" className="navLink">
          ← Home
        </Link>
        <span className="navSep">·</span>
        <Link href="/tools" className="navLink">
          Tools →
        </Link>
      </nav>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Contents</h2>

        <ol className="tocList">
          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/read/analysing-the-claim">
              Analysing the Claim
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Define the claim, force clarity, set standards, and remove evasive language.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/read/analysis-inference-evaluation">
              Analysis, Inference and Evaluation
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Turn prose into structure, test reasoning, and rank evidence properly.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/read/challenging-a-claim">
              Challenging a Claim
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Challenge claims without distortion: alternatives, evidence quality, causality, falsification, bias.
            </p>
          </li>

          <li style={{ margin: 0 }}>
            <Link className="navLink" href="/read/practical-tools">
              Practical Tools
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              A compact toolkit version of the methods: short procedures you can apply quickly.
            </p>
          </li>
        </ol>
      </section>

      <footer className="footer">
        <nav className="navRow" aria-label="Read navigation">
          <Link href="/" className="navLink">
            ← Home
          </Link>
          <span className="navSep">·</span>
          <Link href="/tools" className="navLink">
            Tools →
          </Link>
        </nav>
      </footer>
    </Layout>
  );
}
