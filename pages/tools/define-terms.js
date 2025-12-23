import Link from "next/link";
import Layout from "../../components/Layout";

export default function DefineTerms() {
  return (
    <Layout
      title="Define terms in ordinary language"
      description="A tool for grounding euphemisms and contracted meanings back into plain, testable language."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Define terms in ordinary language</h1>
        <p className="subhead">
          Bring euphemisms, jargon, and inverted meanings back to reality.
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
        <h2 className="h2">Why this matters</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          Claims can be made untestable by blurring meaning. Euphemism and jargon can conceal intent,
          reduce accountability, and make harmful actions sound benign. If the meaning is not stable,
          the claim cannot be evaluated.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">The method</h2>
        <ol className="tocList" style={{ marginTop: 10 }}>
          <li style={{ marginBottom: 10 }}>
            Identify key terms that carry moral or factual weight.
          </li>
          <li style={{ marginBottom: 10 }}>
            Replace each with ordinary, concrete language.
          </li>
          <li style={{ marginBottom: 10 }}>
            Ask what the term is trying to hide: responsibility, intent, harm, scale, or causation.
          </li>
          <li style={{ marginBottom: 10 }}>
            If a technical definition is being used, cite the standard explicitly.
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Examples</h2>

        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Enhanced interrogation</strong> → torture
        </p>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Collateral damage</strong> → civilians killed or injured
        </p>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Friendly fire</strong> → your side shot your own people
        </p>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Ethnic cleansing</strong> → forced removal of an ethnic group (often involving terror and murder)
        </p>

        <p style={{ margin: "12px 0 0", fontSize: 14, opacity: 0.85 }}>
          Once redefined, the claim becomes testable again: who did what, to whom, when, and according to what standard?
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Checklist</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>Which words are doing the hiding?</li>
          <li>Can I restate the claim with concrete verbs and ordinary nouns?</li>
          <li>Does the restated version change how serious the claim sounds?</li>
          <li>Is a technical definition being used, and if so, which standard?</li>
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

