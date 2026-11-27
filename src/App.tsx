import Backdrop from "./components/Backdrop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import TrustStrip from "./components/TrustStrip";

export default function App() {
  return (
    <div className="page">
      <Backdrop />
      <div className="content">
        <Header />
        <Hero />
        <SearchBar />
        <TrustStrip />
      </div>
    </div>
  );
}
