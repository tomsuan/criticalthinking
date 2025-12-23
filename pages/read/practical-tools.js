import Link from "next/link";
import Layout from "../../components/Layout";

export default function PracticalTools() {
  return (
    <Layout
      title="Practical Tools"
      description="Practical Tools (Critical Thinking: A Short Primer)."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Practical Tools</h1>
      </header>

      <nav className="navRow" aria-label="Chapter navigation">
        <Link href="/read/challenging-a-claim" className="navLink">
          ← Prev: Challenging a Claim
        </Link>
        <span className="navSep">·</span>
        <Link href="/read" className="navLink">
          Contents →
        </Link>
        <span className="navSep">·</span>
        <span style={{ fontSize: 14, opacity: 0.35 }}>Next chapter coming soon →</span>
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
            <a href="#frameworks-for-reasoning" className="tocLink">
              Frameworks for Reasoning
            </a>
          </li>
          <li>
            <a href="#socratic-questioning" className="tocLink">
              Socratic Questioning
            </a>
          </li>
          <li>
            <a href="#cross-examining-an-accuser" className="tocLink">
              Cross-examining an Accuser
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
        </ol>
      </section>

      <article className="content" aria-label="Chapter content" style={{ marginTop: 28 }}>
        <section id="overview">
          <h2 className="h2">Overview</h2>
          <p>
            This chapter collects the core tools into a usable toolkit. Each tool is short on purpose: the aim is to
            give you a reliable procedure you can apply quickly, not a long lecture.
          </p>
        </section>

        <section id="frameworks-for-reasoning">
          <h2 className="h2">Frameworks for Reasoning</h2>
          <p>
            These tools can be used in conversation, in writing, or in your own private thinking. They are designed to
            force clarity, specify what would count as evidence, and keep your confidence proportional to what you
            actually know.
          </p>
        </section>

        <section id="socratic-questioning">
          <h2 className="h2">Socratic Questioning</h2>
          <p>
            Socratic questioning is a disciplined way to challenge assumptions and demand clarity. It works because it
            turns vague claims into specific statements that can be checked.
          </p>

          <p>Here are some useful prompts:</p>
          <ul className="tocList" style={{ marginTop: 10 }}>
            <li>What exactly do you mean by that?</li>
            <li>What is the evidence?</li>
            <li>How do you know that is true?</li>
            <li>What would count against it?</li>
            <li>Are there alternative explanations?</li>
            <li>What assumptions are being made?</li>
            <li>What follows from this if it is true?</li>
            <li>What are the limits of the claim (where, when, for whom)?</li>
          </ul>

          <p style={{ marginTop: 14 }}>
            The key to Socratic inquiry is to keep asking questions that seek clarity, and to keep on drilling down to
            the conclusion. It is probably the ultimate investigative technique.
          </p>
        </section>

        <section id="cross-examining-an-accuser">
          <h2 className="h2">Cross-examining an Accuser</h2>
          <p>
            When accusations are couched as sweeping statements, then the only response is to ground the discussion by
            being more specific. At his trial, Socrates was accused of corrupting the youth of Athens by Meletus. This
            is how he countered:
          </p>

          <blockquote style={{ margin: "14px 0" }}>
            <p style={{ margin: 0 }}>
              “Tell the judges, then, who is their improver; for you must know, as you have taken the pains to discover
              their corrupter, and are citing and accusing me before them. Speak, then, and tell the judges who their
              improver is.”
            </p>
          </blockquote>

          <p style={{ marginTop: 6, fontStyle: "italic" }}>The Apology (24c)</p>

          <p style={{ marginTop: 14 }}>
            This response forces precision by asking your critic to create an agent in the matter rather than something
            general and anonymous.
          </p>

          <p>
            If Socrates is corrupting the youth of Athens with his method of philosophical inquiry, then there is an
            implication that someone may be improving them. Who might that be?
          </p>

          <p>
            This reveals an inconsistency in the accusation, of mixing the general with the specific (everyone improves
            but only Socrates corrupts?). This logical inversion demonstrates that the charge against him is, at best,
            confused.
          </p>

          <p>
            Generalisations can be a very convincing tactic. We see it in the media all the time. But demanding that the
            underlying assumptions and presumptions be made explicit and specific makes the discussion more equitable
            and easier to manage.
          </p>

          <p>
            These are just three examples of argumentation from the works of Plato. There are many more. Reading the
            dialogues of Socrates is a very good way to learn how to examine claims and is well worth the time.
          </p>

          <p style={{ marginTop: 14 }}>
            The full tool is available here:{" "}
            <Link href="/tools/cross-examining-an-accuser" className="navLink">
              Cross-examining an Accuser
            </Link>
            .
          </p>
        </section>

        <section id="argument-mapping">
          <h2 className="h2">Argument Mapping</h2>
          <p>
            Argument mapping is a way to make reasoning visible. You take a piece of prose and turn it into explicit
            structure: premises, intermediate conclusions, objections, and rebuttals.
          </p>

          <p>Use it when:</p>
          <ul className="tocList" style={{ marginTop: 10 }}>
            <li>A claim feels persuasive but you can’t say why.</li>
            <li>A debate is stuck because people are talking past each other.</li>
            <li>You want to find the weakest link in an argument quickly.</li>
          </ul>

          <p style={{ marginTop: 14 }}>
            Practical rule: write the conclusion as a single sentence, then list the premises that would need to be true
            for it to follow. If you can’t write the premises plainly, you don’t yet understand the argument.
          </p>

          <p style={{ marginTop: 14 }}>
            The full tool is available here:{" "}
            <Link href="/tools/argument-mapping" className="navLink">
              Argument Mapping
            </Link>
            .
          </p>
        </section>

        <section id="logic-checklist">
          <h2 className="h2">Logic Checklist</h2>
          <p>
            This is a short checklist you can run on any argument — your own, or someone else’s — to spot gaps quickly.
          </p>

          <div style={{ overflowX: "auto", marginTop: 14 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
                    Test
                  </th>
                  <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
                    Ask
                  </th>
                  <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
                    Red Flag
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>Clarity</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    What exactly is the claim? Is it quantifiable?
                  </td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Vagueness, moving of goalposts
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>Relevance</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Is there enough quality evidence to justify the conclusion?
                  </td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Anecdotes, tiny samples
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>Sufficiency</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Are the premises and evidence pertinent to the claim?
                  </td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Red herrings, appeals to emotion
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>Alternatives</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Is the evidence correct and contextualised?
                  </td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Cherry-picking, misquoting
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>Accuracy</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Have plausible alternatives been considered?
                  </td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Single-cause thinking
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>Logic</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    Does the conclusion follow the premises?
                  </td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>Equivocation</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 8px" }}>Uncertainty</td>
                  <td style={{ padding: "10px 8px" }}>Are the limits of discussion explicit?</td>
                  <td style={{ padding: "10px 8px" }}>Unfounded certainty</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 14 }}>
            When you use these tools, you will start to notice repeated moves: vagueness, emotional detours, cherry-picked
            facts, and confident conclusions built on weak foundations. Your job is not to “win”, but to force the claim
            to face reality.
          </p>

          <p style={{ marginTop: 14 }}>
            The full tool is available here:{" "}
            <Link href="/tools/logic-checklist" className="navLink">
              Logic Checklist
            </Link>
            .
          </p>
        </section>
      </article>

      <footer className="footer">
        <nav className="navRow" aria-label="Chapter navigation">
          <Link href="/read/challenging-a-claim" className="navLink">
            ← Prev: Challenging a Claim
          </Link>
          <span className="navSep">·</span>
          <Link href="/read" className="navLink">
            Contents →
          </Link>
          <span className="navSep">·</span>
          <span style={{ fontSize: 14, opacity: 0.35 }}>Next chapter coming soon →</span>
        </nav>
      </footer>
    </Layout>
  );
}
