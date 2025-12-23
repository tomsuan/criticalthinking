import Link from "next/link";
import Layout from "../../components/Layout";

export default function AnalysisInferenceEvaluation() {
  return (
    <Layout
      title="Analysis, Inference and Evaluation"
      description="Analysis, Inference and Evaluation (Critical Thinking: A Short Primer)."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Analysis, Inference and Evaluation</h1>
      </header>

      <nav className="navRow" aria-label="Chapter navigation">
        <Link href="/read/analysing-the-claim" className="navLink">
          ← Prev: Analysing the Claim
        </Link>
        <span className="navSep">·</span>
        <Link href="/read" className="navLink">
          Contents →
        </Link>
        <span className="navSep">·</span>
        <span style={{ fontSize: 14, opacity: 0.35 }}>
          Next chapter coming soon →
        </span>
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
            <a
              href="#things-to-consider-when-assessing-causality"
              className="tocLink"
            >
              Things to Consider When Assessing Causality
            </a>
          </li>
          <li>
            <a href="#biases-and-fallacies" className="tocLink">
              Biases and Fallacies
            </a>
          </li>
          <li>
            <a href="#why-this-matters" className="tocLink">
              Why This Matters
            </a>
          </li>
          <li>
            <a href="#fallacies" className="tocLink">
              Fallacies
            </a>
          </li>
          <li>
            <a href="#formal-fallacies" className="tocLink">
              Formal Fallacies
            </a>
          </li>
          <li>
            <a href="#informal-fallacies" className="tocLink">
              Informal Fallacies
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
          <li>
            <a href="#socratic-questioning" className="tocLink">
              Socratic Questioning
            </a>
          </li>
          <li>
            <a href="#the-value-of-philosophical-inquiry" className="tocLink">
              The Value of Philosophical Inquiry
            </a>
          </li>
          <li>
            <a href="#argument-mapping" className="tocLink">
              Argument Mapping
            </a>
          </li>
          <li>
            <a href="#logic-checklist" className="tocLink">
              Logic Checklist
            </a>
          </li>
          <li>
            <a href="#ask-red-flag" className="tocLink">
              Ask Red Flag
            </a>
          </li>
          <li>
            <a href="#propositional-logic-quick-reference" className="tocLink">
              Propositional Logic - Quick Reference
            </a>
          </li>
          <li>
            <a href="#some-classic-forms" className="tocLink">
              Some Classic Forms
            </a>
          </li>
          <li>
            <a href="#formal-fallacy" className="tocLink">
              Formal Fallacy
            </a>
          </li>
          <li>
            <a href="#chaining-conditionals" className="tocLink">
              Chaining Conditionals
            </a>
          </li>
          <li>
            <a href="#de-morgans-laws-equivalences" className="tocLink">
              De Morgan’s Laws (Equivalences)
            </a>
          </li>
          <li>
            <a href="#truth-tables" className="tocLink">
              Truth Tables
            </a>
          </li>
        </ol>
      </section>

      <article
        className="content"
        aria-label="Chapter content"
        style={{ marginTop: 28 }}
      >
        <section id="overview">
          <h2 className="h2">Overview</h2>
          <p>
            After identifying the claim, we then analyse it in the context of
            related information and determine how it fits within a broader
            argument. We next structure the argument itself as a set of premises
            and a conclusion, each of which is a claim that can be assessed as
            true or false. Through inference and evaluation, we then build the
            bridge from evidence to conclusion.
          </p>
          <p>Premise 1:</p>
          <p>Premise 2:</p>
          <p>Conclusion:</p>
          <p>
            In a valid argument, one or both of the premises may be false. It is
            the form of the argument that matters.
          </p>
          <p>Premise 1: All reptiles are warm-blooded. (false)</p>
          <p>Premise 2: All snakes are reptiles. (true)</p>
          <p>
            Conclusion: Therefore, all snakes are warm-blooded. (valid but
            unsound)
          </p>
          <p>Premise 1: All mammals are animals. (true)</p>
          <p>Premise 2: All birds are mammals. (false)</p>
          <p>
            Conclusion: Therefore, all birds are animals. (valid but unsound)
          </p>
          <p>Premise 1: All cats are reptiles. (false)</p>
          <p>Premise 2: All dogs are cats. (false)</p>
          <p>
            Conclusion: Therefore, all dogs are reptiles. (valid but unsound)
          </p>
          <p>Valid arguments can have more than two premises.</p>
          <p>
            A sound deductive argument is a valid argument whose premises are
            all true; therefore, its conclusion must also be true.
          </p>
          <p>Premise 1: All mammals are animals. (true)</p>
          <p>Premise 2: All dogs are mammals. (true)</p>
          <p>Conclusion: Therefore, all dogs are animals.</p>
          <p>
            After using analysis to break down information into usable premises,
            we then move on to inference and evaluation.
          </p>
          <p>Inference is what can be derived from evidence.</p>
          <p>Evaluation is how you judge the quality of that inference.</p>
          <p>There are three main types of inference: Deductive, Inductive, and Abductive</p>
          <p>
            Deductive: If the premises are true and the reasoning is valid, then
            the conclusion must be true.
          </p>
          <p>
            Validity: The form of the argument guarantees that if the premises
            are true, the conclusion cannot be false. This is why we have to
            clearly define the claim first.
          </p>
          <p>Soundness: The argument is valid and its premises are actually true.</p>
          <p>
            Bear in mind that with a valid argument is that validity concerns
            form. A valid argument may still yield a false conclusion if a
            premise is false. Only a sound argument guarantees a true
            conclusion. (At the end of this ebook many more examples will be
            given plus handy ways of using notation to help with clarity.)
          </p>
          <p>Inductive: Reaches conclusions from samples and patterns.</p>
          <p>
            A Classic Example: Since the Sun has risen every morning so far, it
            can be inferred that it will rise again tomorrow.
          </p>
          <p>
            Inductive arguments are assessed for strength and cogency. A cogent
            argument is strong with true premises. Its conclusion is probable,
            not certain.
          </p>
          <p>Strength: Given true premises, how strongly do they support the conclusion?</p>
          <p>
            Cogency: An inductive argument that is strong, has all true
            premises, and there is no known unrefuted counter-evidence or
            objection.
          </p>
        </section>

        <section id="things-to-consider-when-assessing-causality">
          <h2 className="h2">Things to Consider When Assessing Causality</h2>
          <p>
            Systematic reviews &amp; meta-analyses: They can provide an estimate
            of the overall effect and determine the consistency of the evidence
            base across various studies.
          </p>
          <p>NB: Conclusions may depend on study quality and publication bias.</p>
          <p>
            Randomised controlled trials: These are designed to isolate cause
            and effect under controlled conditions.
          </p>
          <p>
            Well-designed observational studies: These can reveal strong
            associations when trials are impractical, but care must be taken to
            avoid bias in design and analysis.
          </p>
          <p>
            Expert analysis with data: Well-documented case evidence and
            analysis may suggest a real signal yet often lack controls, so care
            must be taken when establishing causation.
          </p>
          <p>
            Anecdotes, testimonials, and intuition: Personal stories are highly
            prone to bias. They are useful for generating hypotheses but are
            not suitable to support general conclusions.
          </p>
        </section>

        <section id="biases-and-fallacies">
          <h2 className="h2">Biases and Fallacies</h2>
          <p>
            Metacognition is simply thinking about an issue, or your thoughts,
            in a self-aware way. It also applies to your thinking itself. It is
            one of the most important components of critical thinking.
          </p>
          <p>
            Ask yourself: What assumptions might I be making? What am I basing
            my judgement on?
          </p>
          <p>
            Here is a short list of 10 common biases, although there are many
            more. Each of these is a way that humans can err systematically
            without realising it.
          </p>
          <p>
            1.) Confirmation bias: The tendency to seek out, interpret, and
            remember information that supports your existing beliefs while
            discounting or ignoring evidence that contradicts them.
          </p>
          <p>
            2.) Anchoring bias: Over-reliance on the first piece of information
            encountered when making decisions.
          </p>
          <p>
            3.) Availability heuristic: Overestimating the importance or
            likelihood of events based on how easily examples come to mind.
          </p>
          <p>
            4.) Sunk cost fallacy: Continuing a course of action because of
            previously invested resources (time, money, effort) rather than
            current evidence or future benefit.
          </p>
          <p>
            5.) Overconfidence effect: Overestimating the accuracy of your
            knowledge and the correctness of your beliefs and decisions.
          </p>
          <p>
            6.) Negativity bias: Giving greater weight to negative experiences
            or information than positive ones.
          </p>
          <p>
            7.) Framing effect: Drawing different conclusions depending on how
            information is presented rather than on the facts themselves.
          </p>
          <p>
            8.) Bandwagon effect: Adopting beliefs or behaviours because many
            others hold them, rather than because of evidence.
          </p>
          <p>
            9.) Survivorship bias: Focusing on successes and overlooking
            failures because failures are less visible.
          </p>
          <p>
            10.) Dunning–Kruger effect: People with low ability at a task
            overestimate their ability, while people with high ability may
            underestimate theirs.
          </p>
        </section>

        <section id="why-this-matters">
          <h2 className="h2">Why This Matters</h2>
          <p>
            Bias and fallacious thinking will distort judgement. That distortion
            can be mild, but in important matters it can be catastrophic.
          </p>
        </section>

        <section id="fallacies">
          <h2 className="h2">Fallacies</h2>
          <p>
            A fallacy is an error in reasoning. They fall into two broad types:
            formal fallacies and informal fallacies.
          </p>
        </section>

        <section id="formal-fallacies">
          <h2 className="h2">Formal Fallacies</h2>
          <p>
            Formal fallacies are errors in the logical structure of an argument.
            Even if the premises are true, the conclusion does not logically follow.
          </p>
        </section>

        <section id="informal-fallacies">
          <h2 className="h2">Informal Fallacies</h2>
          <p>
            Informal fallacies are errors in reasoning that arise from the content,
            language, or context of an argument, rather than its structure.
          </p>
        </section>

        <section id="effective-argumentation">
          <h2 className="h2">Effective Argumentation</h2>
          <p>
            Clear premises. Clear conclusion. Terms defined. Strong evidence.
            Alternative explanations considered. Standards of proof stated.
          </p>
        </section>

        <section id="practical-tools">
          <h2 className="h2">Practical Tools</h2>
          <p>
            Use checklists and structured questioning to reduce error. Separate
            claims, evidence, assumptions, and conclusions.
          </p>

          <div className="panel" style={{ marginTop: 14 }}>
            <p className="kicker" style={{ marginBottom: 8 }}>
              Tools from this chapter
            </p>
            <ul className="tocList" style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>
                <Link href="/tools/premises-and-conclusion" className="tocLink">
                  Premises and Conclusion
                </Link>
              </li>
              <li style={{ marginBottom: 8 }}>
                <Link href="/tools/validity-vs-soundness" className="tocLink">
                  Validity vs Soundness
                </Link>
              </li>
              <li style={{ marginBottom: 8 }}>
                <Link href="/tools/inference-types" className="tocLink">
                  Inference Types
                </Link>
              </li>
              <li style={{ marginBottom: 8 }}>
                <Link href="/tools/causality-evidence-ladder" className="tocLink">
                  Causality Evidence Ladder
                </Link>
              </li>
              <li style={{ marginBottom: 8 }}>
                <Link href="/tools/bias-checklist" className="tocLink">
                  Bias Checklist
                </Link>
              </li>
              <li>
                <Link href="/tools/logic-checklist" className="tocLink">
                  Logic Checklist
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="socratic-questioning">
          <h2 className="h2">Socratic Questioning</h2>
          <p>What do you mean by that?</p>
          <p>What is the evidence?</p>
          <p>What would count as disproof?</p>
          <p>What assumptions are being made?</p>
          <p>What are the best alternative explanations?</p>
        </section>

        <section id="the-value-of-philosophical-inquiry">
          <h2 className="h2">The Value of Philosophical Inquiry</h2>
          <p>
            Philosophical inquiry trains careful reasoning and helps define
            terms, make assumptions explicit, and clarify what follows from what.
          </p>
        </section>

        <section id="argument-mapping">
          <h2 className="h2">Argument Mapping</h2>
          <p>
            Argument mapping is a visual way to structure reasoning: reasons,
            evidence, objections, and rebuttals. It is useful for complex topics
            where line-by-line prose becomes foggy.
          </p>
        </section>

        <section id="logic-checklist">
          <h2 className="h2">Logic Checklist</h2>
          <p>Define the claim.</p>
          <p>Define terms.</p>
          <p>List premises.</p>
          <p>Identify the conclusion.</p>
          <p>Check validity (structure).</p>
          <p>Check soundness (truth of premises).</p>
          <p>Check for counter-evidence and alternative explanations.</p>
        </section>

        <section id="ask-red-flag">
          <h2 className="h2">Ask Red Flag</h2>
          <p>
            Ask: where is the agency? who did what? according to what standard?
            what evidence would change the conclusion?
          </p>
        </section>

        <section id="propositional-logic-quick-reference">
          <h2 className="h2">Propositional Logic - Quick Reference</h2>
          <p>→ Conditional: P → Q “if P then Q” (false only when P is true and Q is false).</p>
          <p>↔ Biconditional: P ↔ Q “P if and only if Q”.</p>
          <p>¬ Negation: not P.</p>
          <p>∧ And: P ∧ Q.</p>
          <p>∨ Or: P ∨ Q.</p>
        </section>

        <section id="some-classic-forms">
          <h2 className="h2">Some Classic Forms</h2>
          <p>Modus Ponens: P → Q; P; ∴ Q.</p>
          <p>Modus Tollens: P → Q; ¬Q; ∴ ¬P.</p>
        </section>

        <section id="formal-fallacy">
          <h2 className="h2">Formal Fallacy</h2>
          <p>
            Affirming the Consequent: If it rains, the roads are wet. The roads are wet. Therefore, it rained.
          </p>
        </section>

        <section id="chaining-conditionals">
          <h2 className="h2">Chaining Conditionals</h2>
          <p>If P → Q and Q → R then P → R.</p>
        </section>

        <section id="de-morgans-laws-equivalences">
          <h2 className="h2">De Morgan’s Laws (Equivalences)</h2>
          <p>¬(P ∧ Q) is equivalent to (¬P ∨ ¬Q).</p>
          <p>¬(P ∨ Q) is equivalent to (¬P ∧ ¬Q).</p>
        </section>

        <section id="truth-tables">
          <h2 className="h2">Truth Tables</h2>
          <p>
            Truth tables list all possible truth values of propositions and show the resulting truth value of a compound statement.
          </p>
        </section>
      </article>

      <footer className="footer">
        <nav className="navRow" aria-label="Chapter navigation">
          <Link href="/read/analysing-the-claim" className="navLink">
            ← Prev: Analysing the Claim
          </Link>
          <span className="navSep">·</span>
          <Link href="/read" className="navLink">
            Contents →
          </Link>
          <span className="navSep">·</span>
          <span style={{ fontSize: 14, opacity: 0.35 }}>
            Next chapter coming soon →
          </span>
        </nav>
      </footer>
    </Layout>
  );
}
