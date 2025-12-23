import Link from "next/link";
import Layout from "../../components/Layout";

export default function OrwellsRules() {
  return (
    <Layout
      title="Orwell’s rules for clear writing"
      description="A clarity checklist based on Orwell’s rules from ‘Politics and the English Language’."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Orwell’s rules for clear writing</h1>
        <p className="subhead">
          A simple checklist to keep language clear enough for clear thinking.
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
        <h2 className="h2">The rules</h2>

        <ol style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li style={{ marginBottom: 8 }}>
            Never use a metaphor, simile or other figure of speech which you are used to seeing in print.
          </li>
          <li style={{ marginBottom: 8 }}>
            Never use a long word where a short one will do.
          </li>
          <li style={{ marginBottom: 8 }}>
            If it is possible to cut a word out, always cut it out.
          </li>
          <li style={{ marginBottom: 8 }}>
            Never use the passive where you can use the active.
          </li>
          <li style={{ marginBottom: 8 }}>
            Never use a foreign phrase, a scientific word or a jargon word if you can think of an everyday English equivalent.
          </li>
          <li style={{ marginBottom: 8 }}>
            Break any of these rules sooner than say anything outright barbarous.
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">How to use this</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          Use these rules as a quick editorial pass when you’re writing claims, arguments, or explanations.
          If the language is muddy, the thinking usually is too. Clear writing makes it easier to spot weak
          premises, hidden assumptions, and responsibility-shifting.
        </p>
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
