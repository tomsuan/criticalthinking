import Link from "next/link";
import Layout from "../../components/Layout";

export default function ToolsIndex() {
  return (
    <Layout
      title="Tools"
      description="Tools extracted from the book, grouped by chapter."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Tools</h1>
        <p className="subhead">Extracted tools, grouped by chapter</p>
      </header>

      <nav className="navRow" aria-label="Tools navigation">
        <Link href="/read" className="navLink">
          ← Contents
        </Link>
      </nav>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">
          <Link className="navLink" href="/read/analysing-the-claim">
            Analysing the Claim
          </Link>
        </h2>
        <ol className="tocList">
          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/name-actor-act-standard">
              Name an actor, an act, and a standard
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Counter evasive language by forcing agency and accountability into a claim.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/rewrite-in-active-voice">
              Rewrite the claim in plain, active English
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Expose hidden responsibility by rewriting claims in active voice.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/classify-the-claim">
              Classify the claim
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Descriptive, causal, normative, predictive — and how strong it is.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/define-terms">
              Define terms in ordinary language
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Ground euphemisms and technical phrasing back to reality.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/set-a-standard-of-proof">
              Set a standard of proof
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Specify what evidence would change your mind and what would settle the question.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/orwells-rules">
              Orwell’s rules for clear writing
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Six rules from ‘Politics and the English Language’ as a clarity checklist.
            </p>
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">
          <Link className="navLink" href="/read/analysis-inference-evaluation">
            Analysis, Inference and Evaluation
          </Link>
        </h2>
        <ol className="tocList">
          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/premises-and-conclusion">
              Write premises and conclusion explicitly
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Turn prose into testable structure: Premise 1, Premise 2, Conclusion.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/validity-vs-soundness">
              Separate validity from soundness
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Validity is structure; soundness requires true premises as well.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/inference-types">
              Deductive, inductive, abductive inference
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Choose the right inference type and evaluate it properly.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/causality-evidence-ladder">
              Causality evidence ladder
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Rank evidence properly when assessing causal claims.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/bias-checklist">
              Bias checklist
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              A quick scan for systematic error in judgement.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/socratic-questions">
              Socratic questioning prompts
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              A short set of questions to expose assumptions and evidence gaps.
            </p>
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">
          <Link className="navLink" href="/read/challenging-a-claim">
            Challenging a Claim
          </Link>
        </h2>
        <ol className="tocList">
          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/criteria-before-you-challenge">
              Criteria Before You Challenge
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Clarify the claim, set scope, set standards, decide what would change your mind.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/steel-manning">
              Steel-Manning
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              State the opposing position in its strongest form before criticising it.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/alternative-explanations">
              Alternative Explanations
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              List plausible rival explanations and rule them out systematically.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/evidence-quality">
              Evidence Quality
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Assess the quality, reliability, and relevance of evidence before drawing conclusions.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/causal-discipline">
              Causal Discipline
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Correlation isn’t causation: test counterfactuals, confounders, and direction of causality.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/falsification">
              Falsification
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Make claims answerable to reality by stating what would count against them.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/recognising-bias">
              Recognising Bias
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Spot systematic error in your own thinking before it distorts judgement.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/effective-argumentation">
              Effective Argumentation
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Be charitable with people and ruthless with ideas: insist on clarity and proportional confidence.
            </p>
          </li>
        </ol>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2 className="h2">
          <Link className="navLink" href="/read/practical-tools">
            Practical Tools
          </Link>
        </h2>
        <ol className="tocList">
          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/cross-examining-an-accuser">
              Cross-examining an Accuser
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Turn accusations into checkable detail: allegations, timelines, evidence, standards of proof.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/argument-mapping">
              Argument Mapping
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Structure reasoning visually: premises, conclusions, objections, and rebuttals.
            </p>
          </li>

          <li style={{ margin: "0 0 14px" }}>
            <Link className="navLink" href="/tools/logic-checklist">
              Logic Checklist
            </Link>
            <p style={{ margin: "6px 0 0", fontSize: 14, opacity: 0.8 }}>
              Define claim/terms, list premises, identify conclusion, check validity/soundness, test alternatives.
            </p>
          </li>
        </ol>
      </section>

      <footer className="footer">
        <nav className="navRow" aria-label="Tools navigation">
          <Link href="/read" className="navLink">
            ← Contents
          </Link>
        </nav>
      </footer>
    </Layout>
  );
}
