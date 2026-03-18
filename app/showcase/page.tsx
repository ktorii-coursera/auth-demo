import type { Metadata } from "next";
import styles from "./showcase.module.css";

export const metadata: Metadata = {
  title: "Happy Little Hackathon — Showcase & Awards",
};

const entries = [
  {
    num: "01",
    trophy: "🏆",
    title: "Item Completion Sounds",
    desc: "For this hackathon, we designed and implemented an experiment to test playing a satisfying sound whenever a learner completes an item in the course. We used Claude Code to make all the changes. Check out the demo video!",
    creator: "Jonathan Stone & Peter Clarke",
    link: "https://github.com/webedx-spark/web/pull/61212",
    gradient: "g1",
  },
  {
    num: "02",
    trophy: "🌟",
    title: "Streaks in Course Home Header",
    desc: "Quick demo of streaks in course home header and ability to share streak. This is what was copied to my clipboard when I clicked share: \"I just extended my weekly learning streak on Coursera! 🔥 7 weeks and counting\"",
    creator: "Ashley Abdel-Sayed",
    link: "https://coursera.slack.com/archives/C069JSBAD7E/p1773331706681109",
    gradient: "g2",
  },
  {
    num: "03",
    trophy: "🗺️",
    title: "Quest Map & Quick Recap",
    desc: "Quick Demo of: Quick Recap, Quest Map, and Specialization Map.",
    creator: "Ody Mbegbu",
    link: "https://github.com/ombegbu-coursera/quest-map",
    gradient: "g3",
  },
  {
    num: "04",
    trophy: "🍅",
    title: "Pomodoro Technique Integration",
    desc: "You may have heard of the Pomodoro technique that some learners use to stay on track with their learning. I integrated this within Coursera with the help of Claude Code, making it persistent across sessions of learning. We've got cool animations to top it all off 🤩",
    creator: "Aaditya Nileshbhai Dave",
    link: "https://github.com/webedx-spark/web/pull/61412",
    gradient: "g4",
  },
  {
    num: "05",
    trophy: "🔍",
    title: "Visual Experience Audit",
    desc: "Demo for \"Visual Experience Audit\": Call a claude skill with a link to a screenshot/figma/coursera page and quickly get feedback in Lighthouse-style with a numeric score based on some concrete criteria — CDS adoption/accessibility/responsiveness, along with individual issues listed and some quick win suggestions.",
    creator: "Herman Starikov",
    link: "https://coursera.slack.com/archives/C069JSBAD7E/p1773333859050719",
    gradient: "g5",
  },
  {
    num: "06",
    trophy: "🤖",
    title: "AI Paths / Zero to One",
    desc: "I decided to go the Zero to One route 😊 The idea is to empower learners who would prefer to learn how to steer AI tools to be who they want to be rather than spending 6 months learning to be it. I feel like that kind of learning will soon be a thing.",
    creator: "Oluwaseun Akintola",
    link: "https://github.com/webedx-spark/web/pull/61450",
    gradient: "g6",
  },
  {
    num: "07",
    trophy: "✨",
    title: "Course Completion Recommended Previews",
    desc: "There are two flows: Specialization completion or standalone course completion, and in progress specialization or pathway. The goal is to increase course and s12n enrollments and the # of course completions by enticing learners with highlights + motivational metadata from their recommended or next courses in their learning plan.",
    creator: "Jabari Kemp",
    link: "https://coursera.slack.com/archives/C069JSBAD7E/p1773334023972879",
    gradient: "g7",
  },
  {
    num: "08",
    trophy: "🧭",
    title: "Career GPS",
    desc: "Feeling frustrated and lost in the Coursera discovery system!? Not sure what to do now you've finished a course and got that shiny cert you've proudly shared to your linked network of random folks you met at meetups and in prior jobs?! Career GPS to the rescue!!",
    creator: "James Tyack",
    link: "https://staging.d13rohr6xrnd6z.amplifyapp.com/",
    gradient: "g8",
  },
  {
    num: "09",
    trophy: "⏱️",
    title: "Pomodoro Floating Widget",
    desc: "I actually ended up doing a pomodoro timer as well! but to a much smaller scale and without the cool animations 😅. I used Nikkie Ella's Coursera UI template to get Claude to build a quick prototype for it but as a floating widget!",
    creator: "Abdulfatai Adeshina",
    link: "https://coursera.slack.com/archives/C069JSBAD7E/p1773336792645439",
    gradient: "g9",
  },
  {
    num: "10",
    trophy: "🌐",
    title: "Component Atlas",
    desc: "\"What does every version of this component look like across Coursera?\" We get this question quite a bit in visual experience. Today that means hours of global search, analyzing files, and figuring out the test path to actually see it in product. /component-atlas does this in one command by utilizing subagents to analyze the codebase and bring all those components to storybook.",
    creator: "Ken Torii",
    link: "https://coursera.slack.com/archives/C069JSBAD7E/p1773339321034019",
    gradient: "g10",
  },
  {
    num: "11",
    trophy: "🎵",
    title: "Learning Wrapped",
    desc: "\"You completed 9 courses this year\" is accurate. But it doesn't make anyone feel anything. What if we gave learners a Spotify Wrapped-style experience for their year of learning? Learning Wrapped turns a learner's year long data (hours, courses, streaks, skills, personality) into a 9-card animated story they can tap through and share. Built with Claude Code in a day.",
    creator: "Diwakar Reddy Malipeddi",
    link: "https://dmalipeddi-coursera.github.io/learning-wrapped/",
    gradient: "g11",
  },
];

export default function ShowcasePage() {
  return (
    <main className={styles.main}>
      {/* Decorative orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      {/* Corner accents */}
      <div className={styles.cornerTR} />
      <div className={styles.cornerTL} />

      {/* Decorative 4-point star */}
      <svg className={styles.decoStar} viewBox="0 0 64 64" fill="none">
        <path d="M32 0 L34 29 L64 32 L34 35 L32 64 L30 35 L0 32 L30 29 Z" fill="#a78bff" />
      </svg>

      <div className={styles.page}>
        {/* Header */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>March 2026 · Coursera</p>
          <h1 className={styles.title}>
            Happy Little
            <span className={styles.titleLine2}>Hackathon</span>
            <span className={styles.titleAccent}>Showcase &amp; Awards</span>
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

            {/* Trophy */}
            <div className={styles.trophy}>{entry.trophy}</div>

            {/* Media placeholder */}
            <div className={styles.media}>
              <div className={`${styles.mediaBg} ${styles[entry.gradient]}`} />
              <div className={styles.playBtn} />
              <span className={styles.mediaLabel}>Demo</span>
            </div>

            {/* Description */}
            <div className={styles.desc}>
              <span className={styles.descTitle}>{entry.title}</span>
              {entry.desc}
              <span className={styles.descCreator}>{entry.creator}</span>
            </div>

            {/* Award */}
            <div className={styles.awardCol}>
              <span className={styles.awardBadge}>🏅 Award</span>
              <span className={styles.awardName}>
                Innovation
                <br />
                Award
              </span>
              <a href={entry.link} className={styles.previewLink} target="_blank" rel="noreferrer">
                → GO TO PREVIEW
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
