export default function Backdrop() {
  return (
    <>
      {/* Left edge: faint geometric pattern */}
      <div className="bg-pattern" aria-hidden="true">
        <svg width="150" height="560" viewBox="0 0 150 560" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hwStar" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M10 10H54V54H10Z" fill="none" stroke="#d4b676" strokeOpacity=".34" strokeWidth="1.2" />
              <path d="M32 2L62 32L32 62L2 32Z" fill="none" stroke="#d4b676" strokeOpacity=".34" strokeWidth="1.2" />
              <circle cx="32" cy="32" r="9" fill="none" stroke="#d4b676" strokeOpacity=".3" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="150" height="560" fill="url(#hwStar)" />
        </svg>
      </div>

      {/* Soft beige swoosh at left */}
      <svg className="bg-swoosh" aria-hidden="true" viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40C90 20 160 90 260 150C320 186 380 210 420 220L420 300L0 300Z" fill="#e6d6ae" fillOpacity=".22" />
        <path d="M0 90C80 70 150 130 240 190C300 228 360 246 420 252" fill="none" stroke="#d9bb74" strokeOpacity=".45" strokeWidth="1.5" />
      </svg>

      {/* Hero photo */}
      <img className="hero-img" src="/hero.jpg" alt="Pilgrims gathered around the Kaaba in Makkah at sunset" />
      <div className="hero-img-fade" aria-hidden="true" />

      {/* Bottom green waves */}
      <svg className="bg-waves" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 1672 142" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 8C150 34 290 112 440 142L0 142Z" fill="#0a3d2a" />
        <path d="M0 2C158 28 300 110 460 142" fill="none" stroke="#c8a24a" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        <path d="M0 14C146 42 280 116 424 142" fill="none" stroke="#e2c777" strokeWidth="1" strokeOpacity=".7" vectorEffect="non-scaling-stroke" />
        <path d="M1672 30C1560 34 1380 90 1250 142L1672 142Z" fill="#0a3d2a" />
        <path d="M1672 20C1550 24 1370 84 1232 142" fill="none" stroke="#c8a24a" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        <path d="M1672 34C1560 40 1388 94 1268 142" fill="none" stroke="#e2c777" strokeWidth="1" strokeOpacity=".7" vectorEffect="non-scaling-stroke" />
      </svg>
    </>
  );
}
