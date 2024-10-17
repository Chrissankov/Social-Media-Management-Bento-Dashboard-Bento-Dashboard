import "./App.css";
import aiContent from "../assets/images/illustration-ai-content.webp";
import audienceGrowth from "../assets/images/illustration-audience-growth.webp";
import consistentSchedule from "../assets/images/illustration-consistent-schedule.webp";
import createPost from "../assets/images/illustration-create-post.webp";
import fiveStars from "../assets/images/illustration-five-stars.webp";
import growFollowers from "../assets/images/illustration-grow-followers.webp";
import multipleAccounts from "../assets/images/illustration-multiple-platforms.webp";
import schedulePosts from "../assets/images/illustration-schedule-posts.webp";

export default function App() {
  return (
    <main>
      <section aria-label="bento grid" className="bento">
        <div className="bento-item schedule">
          <h2>
            Create and schedule content
            <em className="text--purple"> quicker</em>.
          </h2>
          <img
            src={createPost}
            alt="picture of a button being clicked with a cursor; button says create a post"
          />
        </div>
        <div className="bento-item social">
          <h2>
            Social Media <span className="text--yellow">10x</span>{" "}
            <em>Faster</em> with AI
          </h2>
          <img src={fiveStars} alt="5 stars" />
          <p>Over 4,000 5-star reviews</p>
        </div>
        <div className="bento-item timing">
          <h2>Schedule to social media.</h2>
          <img src={schedulePosts} />
          <p>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
        <div className="bento-item content">
          <h2>Write your content using AI.</h2>
          <img src={aiContent} />
        </div>
        <div className="bento-item multiple">
          <img
            src={multipleAccounts}
            alt="social media handles for twitter and instagram"
          />
          <h2>Manage multiple accounts and platforms.</h2>
        </div>
        <div className="bento-item growth">
          <p className="large">{`>56%`}</p>
          <h2>faster audience growth</h2>
          <img src={audienceGrowth} />
        </div>
        <div className="bento-item consistency">
          <h2>Maintain a consistent posting schedule.</h2>
          <img src={consistentSchedule} />
        </div>
        <div className="bento-item followers">
          <img src={growFollowers} alt="" />
          <h2>Grow followers with non-stop content.</h2>
        </div>
      </section>
    </main>
  );
}
