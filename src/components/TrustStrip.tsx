import { HandshakeIcon, HeadsetIcon, PlaneIcon, ShieldCheckIcon } from "./Icons";

const items = [
  { icon: <ShieldCheckIcon />, lines: ["Secure", "Booking"] },
  { icon: <HeadsetIcon />, lines: ["24/7", "Support"] },
  { icon: <PlaneIcon />, lines: ["Trusted", "Travel Partner"] },
  { icon: <HandshakeIcon />, lines: ["Dedicated", "Support"] },
];

export default function TrustStrip() {
  return (
    <div className="trust">
      {items.map((item, i) => (
        <div className="trust-group" key={item.lines.join(" ")}>
          {i > 0 && <span className="trust-divider" aria-hidden="true" />}
          <div className="trust-item">
            {item.icon}
            <span className="trust-text">
              {item.lines[0]}
              <br />
              {item.lines[1]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
