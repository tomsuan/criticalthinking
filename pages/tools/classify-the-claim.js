import Link from "next/link";
import Layout from "../../components/Layout";

export default function ClassifyTheClaim() {
  return (
    <Layout
      title="Classify the claim"
      description="A tool for identifying what kind of claim is being made and how strong it is."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Classify the claim</h1>
        <p className="subhead">
          Identify the claim type and strength so you know what evidence it demands.
        </p>
      </header>

      <nav className="navRow" aria-label="Tool navigation">
        <Link href="/tools" className="navLink">
          ← Tools index
        </Link>
        <span className="navSep">·</span>
        <Link href="/read/analysing-the-claim" className="navLink">
          Source: Analysing the Claim →
        </Link>
      </nav>

      <section className="panel">
        <h2 className="h2">Why classify?</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          Different claims require different evidence. If you don’t classify the claim, you can end up arguing
          past people, applying the wrong standard of proof, or accepting weak evidence for a strong conclusion.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Common claim types</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>
            <strong>Descriptive (empirical):</strong> asserts a fact.
            <br />
            <em>The train arrived at 13:56.</em>
          </li>
          <li style={{ marginTop: 10 }}>
            <strong>Causal (explanatory):</strong> links a cause to an effect.
            <br />
            <em>The train was delayed because of leaves on the track.</em>
          </li>
          <li style={{ marginTop: 10 }}>
            <strong>Normative (prescriptive):</strong> asserts what ought to be done.
            <br />
            <em>Arrive earlier to avoid missing the train.</em>
          </li>
          <li style={{ marginTop: 10 }}>
            <strong>Predictive (forecast):</strong> says what will likely happen.
            <br />
            <em>If it keeps raining, the football match will be cancelled.</em>
          </li>
        </ul>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Strength (how strong is the claim?)</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>
            <strong>Certain:</strong> presented as settled or guaranteed.
          </li>
          <li style={{ marginTop: 8 }}>
            <strong>Likely:</strong> presented as probable.
          </li>
          <li style={{ marginTop: 8 }}>
            <strong>Provisional:</strong> presented as tentative, pending more evidence.
          </li>
        </ul>

        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          Stronger claims demand stronger evidence. If someone wants certainty, they must meet the burden of
          certainty — not “it seems”, “many people say”, or “I feel”.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Checklist</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>What type of claim is it (descriptive, causal, normative, predictive)?</li>
          <li>How strong is it (certain, likely, provisional)?</li>
          <li>What evidence would be appropriate for that type and strength?</li>
          <li>What are the best alternative explanations?</li>
        </ul>
      </section>

      <footer className="footer">
        <nav className="navRow" aria-label="Tool navigation">
          <Link href="/tools" className="navLink">
            ← Tools index
          </Link>
          <span className="navSep">·</span>
          <Link href="/read/analysing-the-claim" className="navLink">
            Source: Analysing the Claim →
          </Link>
        </nav>
      </footer>
    </Layout>
  );
}
