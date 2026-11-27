import { ChevronDown, Logo, UserIcon } from "./Icons";

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="/" aria-label="HajjWay Travel Services home">
        <Logo />
        <span className="logo-text">
          <span className="logo-name">HajjWay</span>
          <span className="logo-sub">TRAVEL SERVICES</span>
        </span>
      </a>

      <nav className="nav" aria-label="Main">
        <a href="/" aria-current="page" className="nav-link active">Home</a>
        <a href="#packages" className="nav-link has-caret">
          Packages <ChevronDown />
        </a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#guide" className="nav-link">Pilgrim’s Guide</a>
        <a href="#gallery" className="nav-link">Gallery</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      <a className="account" href="#account">
        <UserIcon />
        <span>My Account</span>
        <ChevronDown color="#fff" width={3.2} />
      </a>
    </header>
  );
}
