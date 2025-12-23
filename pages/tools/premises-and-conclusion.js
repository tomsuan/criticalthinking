import Link from "next/link";
import Layout from "../../components/Layout";

export default function PremisesAndConclusion() {
  return (
    <Layout
      title="Write premises and conclusion explicitly"
      description="A tool for converting prose into testable structure: Premise 1, Premise 2, Conclusion."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Write premises and conclusion explicitly</h1>
        <p className="subhead">
          Turn foggy prose into a clear argument you can test.
        </p>
      </header>

      <nav className="navRow" aria-label="Tool navigation">
        <Link href="/tools" className="navLink">
          ← Tools index
        </Link>
        <span className="navSep">·</span>
        <Link href="/read/analysis-inference-evaluation" className="navLink">
          Source: Analysis, Inference and Evaluation →
        </Link>
      </nav>

      <section className="panel">
        <h2 className="h2">Purpose</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          Many disagreements persist because people argue in loose prose. This tool forces structure.
          Once the premises and conclusion are explicit, you can test the truth of the premises and
          whether the conclusion actually follows.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">The method</h2>
        <ol className="tocList" style={{ marginTop: 10 }}>
          <li style={{ marginBottom: 10 }}>
            Write the conclusion as a single sentence (what is being claimed).
          </li>
          <li style={{ marginBottom: 10 }}>
            List the supporting reasons as premises (each as its own sentence).
          </li>
          <li style={{ marginBottom: 10 }}>
            Remove anything that is merely rhetorical, emotional, or decorative.
          </li>
          <li style={{ marginBottom: 10 }}>
            Check whether the conclusion follows from the premises (validity).
          </li>
          <li style={{ marginBottom: 10 }}>
            Check whether the premises are true, well-supported, and relevant (soundness/cogency).
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Template</h2>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Premise 1:</strong> …
          <br />
          <strong>Premise 2:</strong> …
          <br />
          <strong>Conclusion:</strong> …
        </p>

        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          If you need more support, add more premises. If a premise smuggles in an assumption, split it.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Quick checks</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>Are the premises actually independent claims (not vague gestures)?</li>
          <li>Is any key term undefined?</li>
          <li>Do the premises support this conclusion, or merely something nearby?</li>
          <li>Is there an unstated premise doing the real work?</li>
        </ul>
      </section>

      <footer className="footer">
        <nav className="navRow" aria-label="Tool navigation">
          <Link href="/tools" className="navLink">
            ← Tools index
          </Link>
          <span className="navSep">·</span>
          <Link href="/read/analysis-inference-evaluation" className="navLink">
            Source: Analysis, Inference and Evaluation →
          </Link>
        </nav>
      </footer>
    </Layout>
  );
}
