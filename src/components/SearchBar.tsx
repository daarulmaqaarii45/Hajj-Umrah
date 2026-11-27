import type { ReactNode } from "react";
import { CalendarIcon, ChevronDown, KaabaIcon, PeopleIcon, SearchIcon } from "./Icons";

type FieldProps = {
  icon: ReactNode;
  label: string;
  value: string;
  className: string;
};

function Field({ icon, label, value, className }: FieldProps) {
  return (
    <button type="button" className={`field ${className}`}>
      {icon}
      <span className="field-text">
        <span className="field-label">{label}</span>
        <span className="field-value">{value}</span>
      </span>
      <ChevronDown size={22} color="#2b2b2b" width={2.2} />
    </button>
  );
}

export default function SearchBar() {
  return (
    <div className="search-card" id="packages">
      <Field className="field-package" icon={<KaabaIcon />} label="Select Package" value="Hajj or Umrah" />
      <Field className="field-date" icon={<CalendarIcon />} label="Travel Date" value="Choose Date" />
      <Field className="field-pilgrims" icon={<PeopleIcon />} label="Pilgrims" value="1 Person" />
      <div className="search-btn-wrap">
        <button type="button" className="search-btn">
          <SearchIcon />
          <span>Search Packages</span>
        </button>
      </div>
    </div>
  );
}
