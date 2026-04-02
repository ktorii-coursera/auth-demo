import type { Metadata } from "next";
import Image from "next/image";
import styles from "./showcase.module.css";
import MediaLightbox from "./MediaLightbox";
import type { MediaItem } from "./MediaLightbox";
import AwardZoom from "./AwardZoom";
import GridParticles from "./GridParticles";

export const metadata: Metadata = {
  title: "Agent-Only Happy Hackathon Day — Showcase",
};

const entries: {
  num: string;
  title: string;
  desc: string;
  creator: string;
  slackMessage: string;
  preview: string | null;
  github: string | null;
  gradient: string;
  media: MediaItem[];
  award: { name: string; desc: string; image: string };
}[] = [
  {
    num: "01",
    title: "Item Completion Sounds",
    desc: "For this hackathon, we designed and implemented an experiment to test playing a satisfying sound whenever a learner completes an item in the course. We used Claude Code to make all the changes. Check out the demo video!",
    creator: "Jonathan Stone & Peter Clarke",
    slackMessage: `🎉 Happy Little Hackathon Entry: Item completion sounds 🎉
Creators: Peter Clarke & Jonathan Stone
Theme: "Make a Learner's Day"

For this hackathon, we designed and implemented an experiment to test playing a satisfying sound whenever a learner completes an item in the course. We used Claude Code to make all the changes. Check out the demo video!

Following are the supporting documents as well as a poll.

We want to hear from you: What's your favorite completion sound?

✅ Vote for your favorite sound in the poll below!`,
    preview: null,
    github: "https://github.com/webedx-spark/web/pull/61212",
    gradient: "g1",
    media: [
      { type: "drive-video", src: "1YBn307gDSWWPb_UIa2_5FzEl-4QjW2sq" },
    ],
    award: {
      name: "Make a Learner's Day",
      desc: "Build something that creates a genuine moment of delight, surprise, or motivation for a learner. The goal is simply to make someone smile or feel something.",
      image: "/showcase/awards/jonathan.png",
    },
  },
  {
    num: "02",
    title: "Streaks in Course Home Header",
    desc: "Quick demo of streaks in course home header and ability to share streak. This is what was copied to my clipboard when I clicked share: \"I just extended my weekly learning streak on Coursera! 🔥 7 weeks and counting\"",
    creator: "Ashley Abdel-Sayed",
    slackMessage: `Quick demo of streaks in course home header and ability to share streak. This is what was copied to my clipboard when I clicked share:

I just extended my weekly learning streak on Coursera!
🔥 7 weeks and counting

Mo Tu We Th Fr Sa Su
⬜🟪⬜🟪⬜⬜⬜

🏆 Weekly target crushed!

📚 coursera.org`,
    preview: null,
    github: null,
    gradient: "g2",
    media: [
      { type: "drive-video", src: "1ycUXrt2o6tbTTMy1dziTE4ZwwxkuLpx_" },
    ],
    award: {
      name: "Make It Social",
      desc: "Address the issue of learning being lonely. Build something that connects learners to each other, to mentors, or to the world in a way that improves the experience without making it busier.",
      image: "/showcase/awards/ashley.png",
    },
  },
  {
    num: "03",
    title: "Quest Map & Quick Recap",
    desc: "Quick Demo of: Quick Recap, Quest Map, and Specialization Map.",
    creator: "Ody Mbegbu",
    slackMessage: `Quick Demo of
• Quick Recap
• Quest Map
• Specialization Map`,
    preview: "https://quest-map.vercel.app/",
    github: "https://github.com/ombegbu-coursera/quest-map",
    gradient: "g3",
    media: [
      { type: "drive-video", src: "1mGFW7FjZfIESBe0Q4CpRNWI15tpOAMEQ" },
    ],
    award: {
      name: "Close the Gap",
      desc: "Build something that removes a barrier to learning (e.g., economic, linguistic, cognitive, motivational, geographic, or time-based). Focus on who is being left out and what would bring them in.",
      image: "/showcase/awards/ody.png",
    },
  },
  {
    num: "04",
    title: "Pomodoro Technique Integration",
    desc: "You may have heard of the Pomodoro technique that some learners use to stay on track with their learning. I integrated this within Coursera with the help of Claude Code, making it persistent across sessions of learning. We've got cool animations to top it all off 🤩",
    creator: "Aaditya Nileshbhai Dave",
    slackMessage: `Hey team, here is my submission and demo for the AI Hack day. You may have heard of the Pomodoro technique that some learners use to stay on track with that learning. I integrated this within Coursera with the help of Claude Code, making it persistent across sessions of learning.

We've got cool animations to top it all off 🤩

Along with the demo video below (please excuse the sickness in my voice)!

Feel free to leave any feedback and share your thoughts 😊`,
    preview: "https://api.coursera.org/cour/webversion/r2/eyI0NWJkYWEzNDZlMmFiMjVmYTZjNGViOWNlNzM2MWFkNjAyNWNjY2Y5OmNsdXN0ZXIve2FwcE5hbWV9LWFwcC1wcmV2aWV3LzYxNDEyLUhFQUQiOlsiYnJvd3NlIiwiY29uc3VtZXItaG9tZSIsImVudC13ZWJzaXRlIiwiZW50ZXJwcmlzZS1ob21lIiwib25ib2FyZGluZy0yMDIyIiwib25kZW1hbmQiLCJzZWFyY2gtdjIiLCJzZW8tZW50aXR5LXBhZ2UiLCJ1bmlmaWVkLWNhcmVlci1hY2FkZW15Il19",
    github: "https://github.com/webedx-spark/web/pull/61412",
    gradient: "g4",
    media: [
      { type: "drive-video", src: "1iqvNDAEuTf_zZLWqXQBSvZwyYg24gZf4" },
    ],
    award: {
      name: "Learning Shouldn't Feel Like Work",
      desc: "Make learning genuinely fun. Not \"gamified with points,\" but actually enjoyable, like something you'd choose to do on a Saturday morning with coffee.",
      image: "/showcase/awards/aaditya.png",
    },
  },
  {
    num: "05",
    title: "Visual Experience Audit",
    desc: "Demo for \"Visual Experience Audit\": Call a claude skill with a link to a screenshot/figma/coursera page and quickly get feedback in Lighthouse-style with a numeric score based on some concrete criteria — CDS adoption/accessibility/responsiveness, along with individual issues listed and some quick win suggestions.",
    creator: "Herman Starikov",
    slackMessage: `✨ Demo for "Visual Experience Audit":
• Call a claude skill with a link to a screenshot/figma/coursera page
• Quickly get feedback in Lighthouse-style with a numeric score based on some concrete criteria
    ◦ CDS adoption/accessibility/responsiveness
    ◦ along with individual issues listed
    ◦ and some quick win suggestions
• Would you use something like this?

(sorry for a long demo recording 😅)`,
    preview: null,
    github: null,
    gradient: "g5",
    media: [
      { type: "drive-video", src: "1YdXvmSNT5fWkidzlap8g9R2vjf8bn8DB" },
    ],
    award: {
      name: "AI as Superpower",
      desc: "Use AI in a way that feels magical and not just efficient. Aim for a demo that makes people say, \"wait, it can do that?\"",
      image: "/showcase/awards/herman.png",
    },
  },
  {
    num: "06",
    title: "AI Paths / Zero to One",
    desc: "I decided to go the Zero to One route 😊 The idea is to empower learners who would prefer to learn how to steer AI tools to be who they want to be rather than spending 6 months learning to be it. I feel like that kind of learning will soon be a thing.",
    creator: "Oluwaseun Akintola",
    slackMessage: `I decided to go the Zero to One route 😊

The idea is to empower learners who would prefer to learn how to steer AI tools to be who they want to be rather than spending 6 months learning to be it. I feel like that kind of learning will soon be a thing.

Please let me know what you think about the idea especially.`,
    preview: null,
    github: "https://github.com/webedx-spark/web/pull/61450",
    gradient: "g6",
    media: [
      { type: "drive-video", src: "10awq-8CepXCI49cON6BEYamlotkORbwr" },
    ],
    award: {
      name: "Zero to One",
      desc: "Build something Coursera has never done before. This could be a new audience, a new use of AI, a new interaction pattern, or an entirely new modality.",
      image: "/showcase/awards/oluwaseun.png",
    },
  },
  {
    num: "07",
    title: "Course Completion Recommended Previews",
    desc: "There are two flows: Specialization completion or standalone course completion, and in progress specialization or pathway. The goal is to increase course and s12n enrollments and the # of course completions by enticing learners with highlights + motivational metadata from their recommended or next courses in their learning plan.",
    creator: "Jabari Kemp",
    slackMessage: `Meet Course Completion Recommended Previews! There are two flows:
• Specialization completion or standalone course completion
• In progress specialization or pathway

The goal is to increase course and s12n enrollments and the # of course completions by enticing learners with highlights + motivational metadata from their recommended or next courses in their learning plan.

Inspired by the work the home team 🏠 has done for the LIHP Video Preview component.`,
    preview: null,
    github: null,
    gradient: "g7",
    media: [
      { type: "drive-video", src: "1SmQgdkTXmiFRUbFyautzm8thwy4BBYSy" },
      { type: "drive-video", src: "1rjWNgogNJvJ1p7hm2BDh_fxaqMWfmsXp" },
      { type: "image", src: "/showcase/jabari3.png" },
      { type: "image", src: "/showcase/jabari4.png" },
    ],
    award: {
      name: "Show, Don't Tell",
      desc: "Build something that makes the invisible visible. Take something abstract—like learning progress, skill growth, or community impact—and make it tangible and beautiful.",
      image: "/showcase/awards/jabari.png",
    },
  },
  {
    num: "08",
    title: "Career GPS",
    desc: "Feeling frustrated and lost in the Coursera discovery system!? Not sure what to do now you've finished a course and got that shiny cert you've proudly shared to your linked network of random folks you met at meetups and in prior jobs?! Career GPS to the rescue!!",
    creator: "James Tyack",
    slackMessage: `😱 Feeling frustrated and lost in the Coursera discovery system!?

Not sure what to do now you've finished a course and got that shiny cert you've proudly shared to your linked network of random folks you met at meetups and in prior jobs?!

Career GPS to the rescue!!

Here's my prototype Video...`,
    preview: "https://staging.d13rohr6xrnd6z.amplifyapp.com/",
    github: "https://github.com/webedx-spark/career-gps/blob/main/README.md",
    gradient: "g8",
    media: [
      { type: "drive-video", src: "12gjhfWtauxenXZ0dxLiz6NFLTslZFPw4" },
    ],
    award: {
      name: "The Thing You Wish Existed",
      desc: "Build the feature, tool, or experience you've always wanted Coursera to have—as a learner, engineer, or human. Ignore roadmap constraints and prioritization frameworks.",
      image: "/showcase/awards/james.png",
    },
  },
  {
    num: "09",
    title: "Pomodoro Floating Widget",
    desc: "I actually ended up doing a pomodoro timer as well! but to a much smaller scale and without the cool animations 😅. I used Nikkie Ella's Coursera UI template to get Claude to build a quick prototype for it but as a floating widget!",
    creator: "Abdulfatai Adeshina",
    slackMessage: `I actually ended up doing a pomodoro timer as well! but to a much smaller scale and without the cool animations 😅.

I used Nikkie Ella's Coursera UI template to get Claude to build a quick prototype for it but as a floating widget!`,
    preview: null,
    github: null,
    gradient: "g9",
    media: [
      { type: "drive-video", src: "1zcrgwK2pGEJ9s8s0U2IvFiqkDrrdx0Qm" },
    ],
    award: {
      name: "Fix the Paper Cut",
      desc: "Find one of the small, annoying pieces of friction that no one has prioritized, and kill it beautifully.",
      image: "/showcase/awards/abdulfatai.png",
    },
  },
  {
    num: "10",
    title: "Component Atlas",
    desc: "\"What does every version of this component look like across Coursera?\" We get this question quite a bit in visual experience. Today that means hours of global search, analyzing files, and figuring out the test path to actually see it in product. /component-atlas does this in one command by utilizing subagents to analyze the codebase and bring all those components to storybook.",
    creator: "Ken Torii",
    slackMessage: `🌐 Introducing Component Atlas 🔍

"What does every version of this component look like across Coursera?"

We get this question quite a bit in visual experience. Today that means hours of global search, analyzing files, and figuring out the test path to actually see it in product.

/component-atlas does this in one command by utilizing subagents to analyze the codebase and bring all those components to storybook.`,
    preview: "https://tools.coursera.org/web-storybook/preview/61444/cds-labs/index.html?path=/story/atlas-domain-pill-container-0312-2-overview--default",
    github: "https://github.com/webedx-spark/web/pull/61444",
    gradient: "g10",
    media: [
      { type: "drive-video", src: "1KI2p-pqYp_wQ4GsqYfyLwfOEqVAR6Ch-" },
    ],
    award: {
      name: "10x Something",
      desc: "Pick any metric, workflow, or experience—such as speed, engagement, comprehension, or accessibility—and make it absurdly, laughably better.",
      image: "/showcase/awards/ken.png",
    },
  },
  {
    num: "11",
    title: "Learning Wrapped",
    desc: "\"You completed 9 courses this year\" is accurate. But it doesn't make anyone feel anything. What if we gave learners a Spotify Wrapped-style experience for their year of learning? Learning Wrapped turns a learner's year long data (hours, courses, streaks, skills, personality) into a 9-card animated story they can tap through and share. Built with Claude Code in a day.",
    creator: "Diwakar Reddy Malipeddi",
    slackMessage: `✨ Introducing Learning Wrapped ✨
Theme: Learning shouldn't feel like Work
Idea: Learning Wrapped

"You completed 9 courses this year" is accurate. But it doesn't make anyone feel anything.

🎵 What if we gave learners a Spotify Wrapped-style experience for their year of learning? 😆

🎉 Certificates get shared, but the journey behind them doesn't.
📸 Learning Wrapped turns a learner's year long data (hours, courses, streaks, skills, personality) into a 9-card animated story they can tap through and share. 🎊🎉

Built with Claude Code in a day.`,
    preview: "https://dmalipeddi-coursera.github.io/learning-wrapped/",
    github: "https://github.com/dmalipeddi-coursera/learning-wrapped",
    gradient: "g11",
    media: [
      { type: "drive-video", src: "1v_ubAiu-HuiLk-Jf4pMl7axqtWYWQ747" },
      { type: "image", src: "/showcase/diwakar1.png" },
      { type: "image", src: "/showcase/diwakar2.png" },
      { type: "image", src: "/showcase/diwakar3.png" },
      { type: "image", src: "/showcase/diwakar4.png" },
      { type: "image", src: "/showcase/diwakar5.png" },
    ],
    award: {
      name: "Make It Mean Something",
      desc: "Completion rates and certificates are proof, but they're not meaningful. Build something that turns a learner's journey into something they actually care about.",
      image: "/showcase/awards/diwakar.png",
    },
  },
];

export default function ShowcasePage() {
  return (
    <main className={styles.main}>
      {/* Grid energy particles */}
      <GridParticles />

      {/* Animated background waves */}
      <div className={styles.wave1} />
      <div className={styles.wave2} />
      <div className={styles.wave3} />
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      {/* Corner accents */}
      <div className={styles.cornerTR} />
      <div className={styles.cornerTL} />

      {/* Decorative 4-point star */}
      <svg className={styles.decoStar} viewBox="0 0 64 64" fill="none">
        <path d="M32 0 L34 29 L64 32 L34 35 L32 64 L30 35 L0 32 L30 29 Z" fill="#a78bff" />
      </svg>

      {/* Coursera top bar */}
      <nav className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Image src="/coursera.svg" alt="Coursera" width={122} height={32} priority />
          <div className={styles.topBarTabs}>
            <span className={styles.topBarTabActive}>Showcase</span>
            <a
              href="https://docs.google.com/document/d/1_R9D-gphl7XIqxhbzDtGU4v4aFaVB0x_1570wf51qdo/edit?tab=t.0"
              className={styles.topBarTab}
              target="_blank"
              rel="noreferrer"
            >
              Event Details
            </a>
            <a
              href="https://docs.google.com/document/d/1_R9D-gphl7XIqxhbzDtGU4v4aFaVB0x_1570wf51qdo/edit?tab=t.0"
              className={styles.topBarTab}
              target="_blank"
              rel="noreferrer"
            >
              AI Learnings / Questions
            </a>
          </div>
        </div>
      </nav>

      <div className={styles.page}>
        {/* Header */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>March 2026 · Learner Success Pod</p>
          <h1 className={styles.title}>
            Agent-Only Happy
            <span className={styles.titleLine2}>Hackathon Day</span>
            <span className={styles.titleAccent}>by Learner Success Pod</span>
          </h1>
          <p className={styles.subtitle}>
            A Showcase of Creative &amp; Innovative Projects by Coursera Engineers.
          </p>
          <div className={styles.rule} />
        </header>

        <h2 className={styles.sectionHeading}>Awarded Projects</h2>

        {/* Cards */}
        {entries.map((entry) => (
          <div key={entry.num} className={styles.card}>
            <span className={styles.cardNum}>{entry.num}</span>

            {/* Award image */}
            <div className={styles.awardImg}>
              <AwardZoom src={entry.award.image} alt={entry.award.name} />
            </div>

            {/* Right content: media + description stacked */}
            <div className={styles.cardContent}>
              {/* Media – client component */}
              <MediaLightbox
                media={entry.media}
                projectTitle={entry.title}
                gradientClass={styles[entry.gradient]}
              />

              {/* Description */}
              <div className={styles.desc}>
                <span className={styles.descTitle}>{entry.title}</span>
                {entry.desc}
                <span className={styles.descCreator}>{entry.creator}</span>
                <div className={styles.linkRow}>
                  {entry.preview && (
                    <a href={entry.preview} className={styles.previewLink} target="_blank" rel="noreferrer">
                      → Preview
                    </a>
                  )}
                  {entry.github && (
                    <a href={entry.github} className={styles.previewLink} target="_blank" rel="noreferrer">
                      → GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
