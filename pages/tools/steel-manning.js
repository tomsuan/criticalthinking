import Link from "next/link";
import Layout from "../../components/Layout";

export default function SteelManning() {
  return (
    <Layout
      title="Steel-Manning"
      description="State the opposing position in its strongest form before criticising it."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Steel-Manning</h1>
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
          <h2 className="h2">What to do</h2>
          <ol className="tocList">
            <li>State the claim you disagree with in one clear sentence.</li>
            <li>Rewrite it in its strongest, fairest form (no cheap phrasing, no caricature).</li>
            <li>Include the best evidence the other side would use.</li>
            <li>Only then criticise the idea—against the strongest version, not the weakest.</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Why</h2>
          <p>
            This forces honesty and makes disputes productive. If your objection still holds against the best version,
            it’s worth hearing. If it doesn’t, you’ve saved time.
          </p>
        </section>
      </article>
    </Layout>
  );
}
