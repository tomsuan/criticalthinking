import Link from "next/link";
import Layout from "../../components/Layout";

export default function BiasChecklist() {
  return (
    <Layout
      title="Bias checklist"
      description="A quick scan for systematic errors in judgement when evaluating claims."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Bias checklist</h1>
        <p className="subhead">
          A fast way to spot predictable distortions in reasoning.
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
        <h2 className="h2">How to use this</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          Read the list and ask “Is this influencing me (or the speaker) right now?” You’re not looking for
          perfection — you’re looking for obvious distortions that change what counts as evidence.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">10 common biases</h2>

        <ol style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>Confirmation bias</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Preferring evidence that supports what you already believe.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Availability bias</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Overweighting vivid or recent examples because they come to mind easily.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Anchoring</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Sticking too closely to the first number or frame you hear.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Framing effect</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Changing judgement based on how a claim is presented rather than its content.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Halo effect</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Letting one positive trait of a person or group colour everything else you believe about them.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Authority bias</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Treating a claim as true because an expert, institution, or confident speaker says it.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>In-group bias</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Giving your own group the benefit of the doubt, while judging outsiders harshly.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Sunk cost fallacy</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Continuing because you’ve already invested time/money/status, even when the case is weak.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Overconfidence</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Being more certain than the evidence warrants; underestimating error and uncertainty.
            </div>
          </li>

          <li style={{ marginBottom: 0 }}>
            <strong>Motivated reasoning</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Reasoning toward a preferred conclusion (status, identity, money, fear), then rationalising it.
            </div>
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Quick checks</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>What evidence would change my mind?</li>
          <li>What is the best counter-argument?</li>
          <li>Am I confusing confidence with evidence?</li>
          <li>Am I treating anecdotes as if they were data?</li>
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
