import Link from "next/link";
import Layout from "../../components/Layout";

export default function ToolNameActorActStandard() {
  return (
    <Layout
      title="Name an actor, an act, and a standard"
      description="A tool for countering evasive language by forcing agency and accountability into a claim."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Name an actor, an act, and a standard</h1>
        <p className="subhead">Counter evasive language by forcing agency and accountability into the claim.</p>
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
          Any time you hear language that describes an outcome but hides who caused it, who decided it, or what
          standard was violated. It is especially common in political, corporate, and bureaucratic statements.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">The method</h2>
        <ol className="tocList" style={{ marginTop: 10 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>Name the actor.</strong> Who did it? A person, a team, an institution.
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>Name the act.</strong> What exactly happened? Use ordinary verbs.
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>Name the standard.</strong> What rule, duty, or expectation was not met? What should have happened instead?
          </li>
        </ol>
        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          This forces the claim into a form that can be tested, challenged, evidenced, or corrected.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Worked examples</h2>

        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Vague:</strong> “Mistakes were made.”
          <br />
          <strong>Rewrite:</strong> “A specific person (or team) failed to do X, which broke standard Y.”
        </p>

        <p style={{ margin: "12px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Vague:</strong> “Procedures were not followed.”
          <br />
          <strong>Rewrite:</strong> “Department X did not follow procedure Y on date Z, which caused outcome Q.”
        </p>

        <p style={{ margin: "12px 0 0", fontSize: 14, opacity: 0.85 }}>
          <strong>Vague:</strong> “Lessons were learned.”
          <br />
          <strong>Rewrite:</strong> “Team X has identified failure Y and will implement change Z by date D.”
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Checklist</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>Is an actor named?</li>
          <li>Is the action described with plain verbs?</li>
          <li>Is there an explicit standard (rule, duty, expectation, metric)?</li>
          <li>Is it now clear what evidence would confirm or refute the claim?</li>
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
