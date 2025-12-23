import Link from "next/link";
import Layout from "../../components/Layout";

export default function CausalityEvidenceLadder() {
  return (
    <Layout
      title="Causality evidence ladder"
      description="A tool for ranking evidence when assessing causal claims, from strongest to weakest."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Causality evidence ladder</h1>
        <p className="subhead">
          Use stronger evidence for stronger causal claims.
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
          Causal claims are where people most often get misled. This ladder helps you rank evidence properly
          and avoid treating weak evidence as if it were decisive.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">The ladder (strongest to weakest)</h2>

        <ol style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>Systematic reviews &amp; meta-analyses</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Summarise many studies and estimate overall effects. Watch for publication bias and poor study quality.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Randomised controlled trials (RCTs)</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Designed to isolate cause and effect under controlled conditions.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Well-designed observational studies</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Can show strong associations where trials are impractical, but risk confounding and bias.
            </div>
          </li>

          <li style={{ marginBottom: 10 }}>
            <strong>Expert analysis with data</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Useful for interpretation and case-based reasoning; may lack controls.
            </div>
          </li>

          <li style={{ marginBottom: 0 }}>
            <strong>Anecdotes, testimonials, and intuition</strong>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>
              Good for generating hypotheses, weak for supporting general conclusions.
            </div>
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">How to use it</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>State the causal claim clearly (“X causes Y”).</li>
          <li>Identify what rung of evidence is being offered.</li>
          <li>Ask what alternative explanations would also fit the evidence.</li>
          <li>Match the burden of proof to the seriousness of the claim.</li>
        </ul>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Checklist</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>Is the claim causal or merely correlational?</li>
          <li>What is the best available rung of evidence here?</li>
          <li>Are there confounders, selection bias, or missing data?</li>
          <li>What would change your mind?</li>
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
