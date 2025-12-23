import Link from "next/link";
import Layout from "../../components/Layout";

export default function InferenceTypes() {
  return (
    <Layout
      title="Deductive, inductive, and abductive inference"
      description="A tool for choosing the right type of inference and evaluating conclusions appropriately."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Deductive, inductive, and abductive inference</h1>
        <p className="subhead">
          Different inference types support different kinds of conclusions.
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
        <h2 className="h2">Why this matters</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          People often argue as if their conclusion is certain when they are actually using a weaker form
          of inference. This tool helps you identify which inference is being used and what level of confidence
          is justified.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Deductive</h2>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Deductive inference</strong> aims at certainty. If the premises are true and the reasoning is
          valid, the conclusion must be true.
        </p>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          Evaluate deduction by <strong>validity</strong> (structure) and <strong>soundness</strong> (validity + true premises).
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Inductive</h2>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Inductive inference</strong> generalises from patterns or samples. It supports conclusions as
          probable, not certain.
        </p>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          Evaluate induction by <strong>strength</strong> (how strongly the premises support the conclusion) and
          <strong> cogency</strong> (strong + true premises, with no undefeated counter-evidence).
        </p>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          Example: “The sun has risen every morning so far, so it will rise tomorrow.”
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Abductive</h2>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Abductive inference</strong> is inference to the best explanation: given some evidence, which
          explanation makes the most sense?
        </p>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          Evaluate abduction by whether it explains the evidence well, fits with background knowledge, and beats
          rival explanations.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Checklist</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>Which inference type is being used (deductive, inductive, abductive)?</li>
          <li>Is the conclusion stated with the right level of certainty?</li>
          <li>If deductive: is it valid and sound?</li>
          <li>If inductive: is it strong and cogent? How good is the sample?</li>
          <li>If abductive: what are the best alternative explanations?</li>
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
