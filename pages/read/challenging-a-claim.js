import Link from "next/link";
import Layout from "../../components/Layout";

export default function ChallengingAClaim() {
  return (
    <Layout
      title="Challenging a Claim"
      description="Challenging a Claim (Critical Thinking: A Short Primer)."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Challenging a Claim</h1>
      </header>

      <nav className="navRow" aria-label="Chapter navigation">
        <Link href="/read/analysis-inference-evaluation" className="navLink">
          ← Prev: Analysis, Inference and Evaluation
        </Link>
        <span className="navSep">·</span>
        <Link href="/read" className="navLink">
          Contents →
        </Link>
        <span className="navSep">·</span>
        <Link href="/read/practical-tools" className="navLink">
          Next: Practical Tools →
        </Link>
      </nav>

      <section className="panel" aria-label="On-page contents">
        <h2 className="h2">On this page</h2>
        <ol className="tocList">
          <li>
            <a href="#overview" className="tocLink">
              Overview
            </a>
          </li>
          <li>
            <a href="#criteria" className="tocLink">
              Criteria Before You Challenge
            </a>
          </li>
          <li>
            <a href="#steel-manning" className="tocLink">
              Steel-Manning
            </a>
          </li>
          <li>
            <a href="#alternative-explanations" className="tocLink">
              Alternative Explanations
            </a>
          </li>
          <li>
            <a href="#evidence-quality" className="tocLink">
              Evidence Quality
            </a>
          </li>
          <li>
            <a href="#causal-discipline" className="tocLink">
              Causal Discipline
            </a>
          </li>
          <li>
            <a href="#falsification" className="tocLink">
              Falsification
            </a>
          </li>
          <li>
            <a href="#recognising-bias" className="tocLink">
              Recognising Bias
            </a>
          </li>
          <li>
            <a href="#effective-argumentation" className="tocLink">
              Effective Argumentation
            </a>
          </li>
          <li>
            <a href="#practical-tools" className="tocLink">
              Practical Tools
            </a>
          </li>
        </ol>
      </section>

      <article className="content" aria-label="Chapter content" style={{ marginTop: 28 }}>
        <section id="overview">
          <h2 className="h2">Overview</h2>
          <p>
            Challenging a claim is a disciplined approach to establish what would count as evidence for or against the
            claim, and how you would know either way. A good challenge sharpens ideas, maintains honesty, and prevents
            indulgence in dishonest narratives.
          </p>
        </section>

        <section id="criteria">
          <h2 className="h2">Criteria Before You Challenge</h2>
          <p>Before you challenge a claim, set clear criteria:</p>
          <ul className="tocList" style={{ marginTop: 10 }}>
            <li>State the claim in one clear, everyday sentence.</li>
            <li>State what you would expect to see if it were true.</li>
            <li>Set limits: where, when, and to whom it applies.</li>
            <li>Judge evidence quality and origin.</li>
            <li>Decide what would change your mind.</li>
          </ul>
        </section>

        <section id="steel-manning">
          <h2 className="h2">Steel-Manning</h2>
          <p>State the opposing position in its strongest form before criticising it.</p>
        </section>

        <section id="alternative-explanations">
          <h2 className="h2">Alternative Explanations</h2>
          <p>List plausible rival explanations and rule them out systematically.</p>
        </section>

        <section id="evidence-quality">
          <h2 className="h2">Evidence Quality</h2>
          <p>Prefer high-quality, reproducible evidence. Treat anecdotes as hypothesis generators.</p>
        </section>

        <section id="causal-discipline">
          <h2 className="h2">Causal Discipline</h2>
          <p>Correlation is not causation. Ask counterfactual questions.</p>
        </section>

        <section id="falsification">
          <h2 className="h2">Falsification</h2>
          <p>A serious claim must expose itself to the risk of being wrong.</p>
        </section>

        <section id="recognising-bias">
          <h2 className="h2">Recognising Bias</h2>
          <p>
            Bias is a natural feature of human cognition. Once recognised, safeguards can be put in place to limit its
            influence.
          </p>
        </section>

        <section id="effective-argumentation">
          <h2 className="h2">Effective Argumentation</h2>
          <p>Be charitable with people and ruthless with ideas. Insist on clarity.</p>
        </section>

        <section id="practical-tools">
          <h2 className="h2">Practical Tools</h2>
          <ul className="tocList" style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>
              <Link className="tocLink" href="/tools/criteria-before-you-challenge">
                Criteria Before You Challenge
              </Link>
            </li>
            <li>
              <Link className="tocLink" href="/tools/steel-manning">
                Steel-Manning
              </Link>
            </li>
            <li>
              <Link className="tocLink" href="/tools/alternative-explanations">
                Alternative Explanations
              </Link>
            </li>
            <li>
              <Link className="tocLink" href="/tools/evidence-quality">
                Evidence Quality
              </Link>
            </li>
            <li>
              <Link className="tocLink" href="/tools/causal-discipline">
                Causal Discipline
              </Link>
            </li>
            <li>
              <Link className="tocLink" href="/tools/falsification">
                Falsification
              </Link>
            </li>
            <li>
              <Link className="tocLink" href="/tools/recognising-bias">
                Recognising Bias
              </Link>
            </li>
            <li>
              <Link className="tocLink" href="/tools/effective-argumentation">
                Effective Argumentation
              </Link>
            </li>
            <li>
              <Link className="tocLink" href="/tools/argument-mapping">
                Argument Mapping
              </Link>
            </li>
          </ul>
        </section>
      </article>

      <footer className="footer">
        <nav className="navRow" aria-label="Chapter navigation">
          <Link href="/read/analysis-inference-evaluation" className="navLink">
            ← Prev: Analysis, Inference and Evaluation
          </Link>
          <span className="navSep">·</span>
          <Link href="/read" className="navLink">
            Contents →
          </Link>
          <span className="navSep">·</span>
          <Link href="/read/practical-tools" className="navLink">
            Next: Practical Tools →
          </Link>
        </nav>
      </footer>
    </Layout>
  );
}
