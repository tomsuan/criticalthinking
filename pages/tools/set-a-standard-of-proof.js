import Link from "next/link";
import Layout from "../../components/Layout";

export default function SetAStandardOfProof() {
  return (
    <Layout
      title="Set a standard of proof"
      description="A tool for specifying what evidence would settle a claim and what would change your mind."
    >
      <header>
        <p className="kicker">Tools</p>
        <h1 className="h1">Set a standard of proof</h1>
        <p className="subhead">
          Make the burden of proof explicit: what would count as enough evidence?
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
        <h2 className="h2">Purpose</h2>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.85 }}>
          Most real-world disagreements drag on because people are using different standards without saying so.
          This tool forces clarity: what evidence would settle the issue, and what evidence would change your mind?
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">The method</h2>
        <ol className="tocList" style={{ marginTop: 10 }}>
          <li style={{ marginBottom: 10 }}>
            State the claim plainly (one sentence).
          </li>
          <li style={{ marginBottom: 10 }}>
            Decide the <strong>appropriate standard</strong> for the size and seriousness of the claim.
          </li>
          <li style={{ marginBottom: 10 }}>
            Specify what evidence would <strong>confirm</strong> the claim.
          </li>
          <li style={{ marginBottom: 10 }}>
            Specify what evidence would <strong>disconfirm</strong> the claim.
          </li>
          <li style={{ marginBottom: 10 }}>
            Write down what would <strong>change your mind</strong> (so you can’t move the goalposts later).
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Examples of acceptable evidence</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>A document from a specific date (record, contract, memo, log).</li>
          <li>An agreed independent authority (auditor, regulator, court finding).</li>
          <li>A heavily cited, well-designed paper or a highly replicated finding (when relevant).</li>
          <li>Direct observation with clear criteria (when practical).</li>
        </ul>

        <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.85 }}>
          Minor claims may need little evidence. Major claims demand more.
        </p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">Checklist</h2>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>Is the claim clear and testable?</li>
          <li>Is the standard of proof appropriate to the claim’s seriousness?</li>
          <li>What evidence would settle it for all reasonable parties?</li>
          <li>What evidence would change my mind?</li>
          <li>What would count as disproof?</li>
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
