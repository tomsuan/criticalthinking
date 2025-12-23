import Link from "next/link";
import Layout from "../../components/Layout";

export default function RewriteInActiveVoice() {
  return (
    <Layout
      title="Rewrite the claim in plain, active English"
      description="A tool for exposing hidden responsibility by rewriting claims in active voice."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Rewrite the claim in plain, active English</h1>
        <p className="subhead">
          Remove ambiguity by forcing agency and accountability into the sentence.
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
        <h2 className="h2">When to use it</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          Use this tool whenever a claim is phrased in the passive voice or in vague constructions
          that make actions appear to happen without anyone doing them.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">The method</h2>
        <ol className="tocList" style={{ marginTop: 10 }}>
          <li style={{ marginBottom: 10 }}>
            Identify the verb and ask: <em>who performed this action?</em>
          </li>
          <li style={{ marginBottom: 10 }}>
            Rewrite the sentence so the actor is the grammatical subject.
          </li>
          <li style={{ marginBottom: 10 }}>
            Replace abstract nouns with concrete verbs wherever possible.
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Worked examples</h2>

        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Passive:</strong> “Mistakes were made.”
          <br />
          <strong>Active:</strong> “The project lead approved a faulty plan.”
        </p>

        <p style={{ margin: "12px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Passive:</strong> “Procedures were not followed.”
          <br />
          <strong>Active:</strong> “The operations team ignored the safety checklist.”
        </p>

        <p style={{ margin: "12px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Passive:</strong> “Lessons were learned.”
          <br />
          <strong>Active:</strong> “Management identified the failure and changed the process.”
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Checklist</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>Is the actor the subject of the sentence?</li>
          <li>Is the verb concrete and observable?</li>
          <li>Could responsibility still be denied?</li>
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
