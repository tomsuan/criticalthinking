import Link from "next/link";
import Layout from "../../components/Layout";

export default function AlternativeExplanations() {
  return (
    <Layout
      title="Alternative Explanations"
      description="List plausible rival explanations and rule them out systematically."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Alternative Explanations</h1>
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
            <li>Write the claim you are evaluating in one sentence.</li>
            <li>List at least three alternative explanations that could also account for the facts.</li>
            <li>For each alternative, state what evidence would support it and what would count against it.</li>
            <li>Check whether the original claim still holds once the alternatives are taken seriously.</li>
          </ol>
        </section>

        <section style={{ marginTop: 18 }}>
          <h2 className="h2">Why</h2>
          <p>
            Most weak arguments fail because they ignore rival explanations. This tool forces you to widen the search
            space before you settle on a conclusion.
          </p>
        </section>
      </article>
    </Layout>
  );
}
