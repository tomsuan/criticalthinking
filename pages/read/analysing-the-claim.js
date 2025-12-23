import Link from "next/link";
import Layout from "../../components/Layout";

export default function AnalysingTheClaim() {
  return (
    <Layout
      title="Analysing the Claim"
      description="Analysing the Claim — The Danger of Evasive Language (Critical Thinking: A Short Primer)."
    >
      <header>
        <p className="kicker">Critical Thinking: A Short Primer</p>
        <h1 className="h1">Analysing the Claim</h1>
        <p className="subhead">The Danger of Evasive Language</p>
      </header>

      <nav className="navRow" aria-label="Chapter navigation">
        <Link href="/read" className="navLink">
          ← Contents
        </Link>
        <span className="navSep">·</span>
        <span style={{ fontSize: 14, opacity: 0.35 }}>Next chapter coming soon →</span>
      </nav>

      <section className="panel" aria-label="On-page contents">
        <h2 className="h2">On this page</h2>
        <ol className="tocList">
          <li>
            <a href="#danger" className="tocLink">
              The danger of evasive language
            </a>
          </li>
          <li>
            <a href="#newspeak" className="tocLink">
              Newspeak, clarity, and accountability
            </a>
          </li>
          <li>
            <a href="#determine" className="tocLink">
              Determine clearly what is being claimed
            </a>
          </li>
          <li>
            <a href="#plain-active" className="tocLink">
              Formulate the claim in plain, active English
            </a>
          </li>
          <li>
            <a href="#types" className="tocLink">
              Types of claims
            </a>
          </li>
          <li>
            <a href="#euphemisms" className="tocLink">
              Six more euphemisms
            </a>
          </li>
          <li>
            <a href="#classify" className="tocLink">
              Classify the claim
            </a>
          </li>
          <li>
            <a href="#define-terms" className="tocLink">
              Define terms
            </a>
          </li>
          <li>
            <a href="#justify" className="tocLink">
              Find what justifies the claim
            </a>
          </li>
          <li>
            <a href="#standard" className="tocLink">
              Set a standard of proof
            </a>
          </li>
          <li>
            <a href="#why" className="tocLink">
              Why this matters
            </a>
          </li>
          <li>
            <a href="#bonus" className="tocLink">
              Bonus: Orwell’s rules
            </a>
          </li>
        </ol>
      </section>

      <article className="content" aria-label="Chapter content" style={{ marginTop: 28 }}>
        <section id="danger">
          <h2 className="h2">The Danger of Evasive Language</h2>
          <p>
            We have all heard the evasive sophistry of comments such as “Mistakes were made,”
            “Lessons were learned,” “Procedures were not followed,” emanating from the political,
            bureaucratic and corporate worlds. What they all have in common is a conspicuous absence
            of agency. There is no personal or institutional attribution. There is no one or nothing
            to blame; it is just the way it is.
          </p>
        </section>

        <section id="newspeak">
          <p>
            This takes us directly into the language of Newspeak that George Orwell wrote about in
            his novel 1984. In the book, Newspeak is the official language used by Big Brother, the
            figurehead of the Party. It is designed to conceal rather than reveal. It was created
            and shaped to constrain thought itself by the use of euphemism, circumlocution, and
            inverted meanings. The aim is to make some ideas literally unsayable and therefore
            unthinkable. In such an environment, it becomes impossible to test a precise claim.
            Blur the words, and you blur the world.
          </p>

          <p>
            In the face of this ocean of obfuscation, we need to use critical thinking to
            distinguish the real from dangerous misrepresentations that can manipulate us for
            nefarious purposes while blinding us to the truth.
          </p>

          <p>
            George Orwell and Hannah Arendt both showed why this matters. Orwell warned that
            political language has techniques meant to deceive and mislead, and Arendt showed how
            bureaucratic habits of speech and responsibility-shifting enable evildoers to thrive in
            an unaccountable fashion.
          </p>

          <p>
            Arendt observed that atrocity advanced not only through the mad and murderous actions of
            fanatics but also through ordinary functionaries. She found them just as culpable for
            evil events, although they hid themselves behind forms, memos, and procedures. In the
            world of bureaucracy, no one is responsible for anything; there is only process and
            implementation taking place in a moral void.
          </p>

          <p>
            Our first step to counteract these tactics is to name an actor, an act, and a standard.
            The antidote to these incredibly common strategies of self-absolution is to make a
            rigorous analysis of any given claim.
          </p>
        </section>

        <section id="determine">
          <h2 className="h2">Determine Clearly What is Being Claimed</h2>
          <ul>
            <li>By whom?</li>
            <li>About what?</li>
            <li>In what terms?</li>
          </ul>

          <p className="callout">Treat any vagueness as a red flag</p>

          <p>
            <strong>Vague:</strong> Mistakes were made.
            <br />
            <strong>Clear:</strong> A specific person didn’t do their job properly.
          </p>

          <p>
            These steps serve to establish clarity. Without clarity debate is just a knife fight in
            thick fog.
          </p>
        </section>

        <section id="plain-active">
          <h2 className="h2">Formulate the Claim in Plain, Active English</h2>
          <p>
            This rephrasing is very important. In grammar, the active voice has to have an agent.
            The passive voice can, but only with additional phrasing, so in ordinary use there is no
            one or nothing accountable for the action. It can give the impression to the unwary
            that, rather magically, something happened all by itself. Hence, there is a fondness for
            its use by those who wish to hide responsibility.
          </p>
        </section>

        <section id="types">
          <h2 className="h2">Types of Claims</h2>
          <ul>
            <li>
              <strong>Descriptive (empirical claim):</strong> Asserts a fact.
              <br />
              <em>The train arrived at 13:56.</em>
            </li>
            <li>
              <strong>Causal (explanatory claim):</strong> Links a cause to an effect.
              <br />
              <em>The train was delayed because of leaves on the track.</em>
            </li>
            <li>
              <strong>Normative (prescriptive claim):</strong> Asserts what ought to be done.
              <br />
              <em>Arrive earlier to avoid missing the train.</em>
            </li>
            <li>
              <strong>Predictive (forecast):</strong> Something will likely happen.
              <br />
              <em>If it keeps raining, the football match will be cancelled.</em>
            </li>
          </ul>

          <p>
            Of course, there are plenty of contexts where using the passive voice is perfectly fine,
            but in the kind of argumentation we are discussing here, it is best to view any
            occurrence as a warning of possible deception.
          </p>
        </section>

        <section id="euphemisms">
          <h2 className="h2">Six More Euphemisms</h2>
          <ul>
            <li>
              <strong>Enhanced Interrogation:</strong> Torture.
            </li>
            <li>
              <strong>Economical with the Truth:</strong> Lying.
            </li>
            <li>
              <strong>Creative Bookkeeping:</strong> Shady financial practices.
            </li>
            <li>
              <strong>Lessons were learned:</strong> Platitude; no commitment to corrective action.
            </li>
            <li>
              <strong>Procedures were not followed:</strong> Hides who, when, why.
            </li>
            <li>
              <strong>We take this very seriously:</strong> This is a posture, not a statement of
              accountability.
            </li>
          </ul>
        </section>

        <section id="classify">
          <h2 className="h2">Classify the Claim</h2>
          <ul>
            <li>How strong is the claim?</li>
            <li>Is it certain, likely, or provisional?</li>
            <li>What are the best alternative explanations?</li>
          </ul>

          <p>
            Each of these claims demands its own evidence in the form of records, experiments,
            forecasts, and so forth.
          </p>

          <p>
            The job in each case is to elicit and determine the appropriate evidence. This is a
            necessary effort. Deceit works by giving the impression of substance where none exists.
          </p>
        </section>

        <section id="define-terms">
          <h2 className="h2">Define Terms</h2>
          <p>
            Orwellian Newspeak is intended to narrow the range of thought. It works by contracting
            or inverting meanings, so we have phrases such as enhanced interrogation, collateral
            damage, friendly fire, and ethnic cleansing. These expressions serve to make appalling
            actions and events sound innocuous. They hide the true intent and extent of the
            perpetrators’ wrongdoing from scrutiny. Ethnic cleansing is particularly obnoxious, as
            it is just a variation on a theme coming from the same stable as racial hygiene: an idea
            of which the Nazis were particularly fond.
          </p>

          <p>
            Therefore, our job here is to ground these expressions by bringing them back to reality.
            We do this by using ordinary, straightforward language and definitions whenever possible,
            unless a technical standard is cited.
          </p>
        </section>

        <section id="justify">
          <h2 className="h2">Find What Justifies the Claim</h2>
          <p>
            Especially in bureaucratic settings, there is an unstated assumption that procedural
            compliance absolves moral responsibility. This is where responsibility is often
            laundered. Therefore, watch for false or misleading implications. Make assumptions
            explicit and check if they are relevant and apply to the case in hand.
          </p>

          <p>
            This underlying assumption that there was no moral dimension to the bureaucratic process
            was Adolf Eichmann’s get-out clause, according to Hannah Arendt. The names were all
            correct for the trains to the camps, so he did nothing wrong.
          </p>
        </section>

        <section id="standard">
          <h2 className="h2">Set a Standard of Proof That Would Be Acceptable to All Concerned</h2>

          <p>
            Answers to most questions are rarely set in stone. Science, according to Karl Popper,
            requires that a claim be falsifiable. It has to be testable. And if it fails the test,
            then scientific investigation moves on to the next experiment. But despite the inherent
            uncertainty, we can carry on living and acting with the confidence of knowing that we
            have the best available knowledge for our purposes, for the time being.
          </p>

          <p>
            There may be no absolute proof, but it is still important to set a standard of
            acceptability for a claim. Minor claims may need very little evidence. Major claims of
            any kind certainly do.
          </p>

          <p>
            Simply ask yourself, and then specify, what level of evidence would change your mind.
            Would a document from a given date suffice to prove or disprove a claim? Would an
            agreed-upon third-party authority suffice to settle the debate? Would a heavily cited
            paper or a highly replicated finding be enough?
          </p>
        </section>

        <section id="why">
          <h2 className="h2">Why This Matters</h2>
          <p>
            Orwell showed that language can be engineered to make dissent inexpressible by the
            devaluation of the meaning of words. Arendt showed how bureaucratese can make wrongdoing
            seem a routine matter.
          </p>

          <p>
            We live in a world dense with information. Much of it is presented in an intentionally
            manipulative manner that demands that you think and behave in a certain way.
          </p>

          <p>
            All this activity serves to take our attention away from the germane and important, our
            money from our accounts, to recruit us through deception into supporting some sort of
            nefarious cause, and to manipulate us in such a manner that good sense is simply no
            longer enough to maintain our sanity and our freedom to think accurately and make
            beneficial assessments for ourselves and the world around us.
          </p>

          <p>
            Without a doubt, there are people deliberately trying to manipulate us for their own
            benefit, not ours. They will abuse language to have us believe something or not to
            believe anything at all. They will hide behind their messaging, accentuating falsehoods
            and diverting attention by obscuring meaning, while at the same time hiding their true
            aims through misleading or meaningless words and images.
          </p>
        </section>

        <section id="bonus">
          <h2 className="h2">Bonus</h2>
          <p>
            To be able to write clearly is essential for clear thinking. To help avoid becoming
            trapped by the improper use of language, which is hard to do as it wallpapers our
            civilisation, then George Orwell’s advice for more effective communication from his
            essay Politics and the English Language is a handy thing to remind us that good
            communication is a simple matter, though not always easy.
          </p>

          <ol>
            <li>
              Never use a metaphor, simile or other figure of speech which you are used to seeing in
              print.
            </li>
            <li>Never use a long word where a short one will do.</li>
            <li>If it is possible to cut a word out, always cut it out.</li>
            <li>Never use the passive where you can use the active.</li>
            <li>
              Never use a foreign phrase, a scientific word or a jargon word if you can think of an
              everyday English equivalent
            </li>
            <li>Break any of these rules sooner than say anything outright barbarous.</li>
          </ol>
        </section>
      </article>

      <footer className="footer">
        <nav className="navRow" aria-label="Chapter navigation">
          <Link href="/read" className="navLink">
            ← Contents
          </Link>
          <span className="navSep">·</span>
          <span style={{ fontSize: 14, opacity: 0.35 }}>Next chapter coming soon →</span>
        </nav>
      </footer>
    </Layout>
  );
}
