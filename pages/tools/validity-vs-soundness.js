import Link from "next/link";
import Layout from "../../components/Layout";

export default function ValidityVsSoundness() {
  return (
    <Layout
      title="Separate validity from soundness"
      description="A tool for distinguishing argument structure (validity) from truth of premises (soundness)."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Separate validity from soundness</h1>
        <p className="subhead">
          Validity is structure. Soundness is validity plus true premises.
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
        <h2 className="h2">Definitions</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          <strong>Validity</strong> concerns the form of the argument: if the premises were true, the
          conclusion could not be false.
          <br />
          <strong>Soundness</strong> is a valid argument whose premises are all actually true.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Why the distinction matters</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          People often attack an argument’s conclusion by disputing a premise without noticing whether the
          structure is valid — or they accept a conclusion because the structure “sounds logical” while the
          premises are false. Separate the two and you can diagnose the failure cleanly.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Examples</h2>

        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Valid but unsound</strong>
          <br />
          Premise 1: All reptiles are warm-blooded. (false)
          <br />
          Premise 2: All snakes are reptiles. (true)
          <br />
          Conclusion: Therefore, all snakes are warm-blooded. (valid form, false conclusion)
        </p>

        <p style={{ margin: "12px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Sound</strong>
          <br />
          Premise 1: All mammals are animals. (true)
          <br />
          Premise 2: All dogs are mammals. (true)
          <br />
          Conclusion: Therefore, all dogs are animals. (valid + true premises)
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Checklist</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>What are the premises?</li>
          <li>What is the conclusion?</li>
          <li>If the premises were true, would the conclusion have to be true? (validity)</li>
          <li>Are the premises actually true? (soundness)</li>
          <li>If something is wrong, is it the structure or the premises?</li>
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
