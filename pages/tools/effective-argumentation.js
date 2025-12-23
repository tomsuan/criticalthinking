import Link from "next/link";
import Layout from "../../components/Layout";

export default function EffectiveArgumentation() {
  return (
    <Layout
      title="Effective Argumentation"
      description="Argue clearly, proportionately, and in good faith, without confusing people or obscuring the issue."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Effective Argumentation</h1>
        <p className="subhead">Tool</p>
      </header>

      <nav className="navRow" aria-label="Tool navigation">
        <Link href="/tools" className="navLink">
          ← Tools
        </Link>
        <span className="navSep">·</span>
        <Link href="/read/challenging-a-claim" className="navLink">
          Source: Challenging a Claim →
        </Link>
      </nav>

      <article className="content" aria-label="Tool content" style={{ marginTop: 28 }}>
        <section>
          <h2 className="h2">Principles</h2>
          <ol className="tocList">
            <li>
              <strong>Charity:</strong> Treat opponents as honest thinkers unless proven otherwise.
            </li>
            <li>
              <strong>Precision:</strong> Be exact about what is being claimed and what is being criticised.
            </li>
            <li>
              <strong>Proportionality:</strong> Match confidence to evidence. Strong claims require strong support.
            </li>
            <li>
              <strong>Transparency:</strong> Declare assumptions, values, and conflicts of interest.
            </li>
            <li>
              <strong>Traceability:</strong> Claims should be backed by sources that others can inspect.
            </li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">What to do</h2>
          <ol className="tocList">
            <li>State the claim you are defending or criticising in one clear sentence.</li>
            <li>List the premises that support it.</li>
            <li>Check whether the conclusion actually follows from those premises.</li>
            <li>State the strongest objection you can think of.</li>
            <li>Respond to that objection directly, without changing the subject.</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Common failures</h2>
          <ol className="tocList">
            <li>Attacking the person instead of the claim.</li>
            <li>Overstating certainty when evidence is limited.</li>
            <li>Changing definitions mid-argument.</li>
            <li>Ignoring counter-evidence.</li>
            <li>Relying on rhetoric where evidence is required.</li>
          </ol>
        </section>
      </article>
    </Layout>
  );
}
