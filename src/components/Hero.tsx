import { ArrowRight, PlayIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="eyebrow-row">
        <span className="eyebrow-line" aria-hidden="true" />
        <span className="eyebrow">YOUR SACRED JOURNEY</span>
        <span className="eyebrow-line" aria-hidden="true" />
      </div>

      <h1 className="hero-title">
        <span className="hero-title-strong">Hajj &amp; Umrah</span>
        <span>Made Easy</span>
      </h1>

      <p className="tagline">Plan. Book. Travel. With Complete Peace of Mind.</p>

      <div className="cta-row">
        <a className="btn-primary" href="#packages">
          <span>Explore Packages</span>
          <ArrowRight />
        </a>
        <button className="btn-story" type="button">
          <span className="play-circle">
            <PlayIcon />
          </span>
          <span>Watch Our Story</span>
        </button>
      </div>
    </section>
  );
}
