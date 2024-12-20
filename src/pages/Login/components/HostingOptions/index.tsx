import React from "react";
import "./style.css";
import { HostingOption } from "../../interfaces";

interface HostingOptionsProps {
  selected: HostingOption;
  onChange: (option: HostingOption) => void;
}

const HostingOptions: React.FC<HostingOptionsProps> = ({
  selected,
  onChange,
}) => (
  <div className="hosting-options">
    <button
      className={`hosting-options-button ${
        selected === "SaaS" ? "active" : "left-inactive"
      }`}
      onClick={() => onChange("SaaS")}
    >
      SaaS
    </button>
    <button
      className={`hosting-options-button ${
        selected === "SelfHosted" ? "active" : "right-inactive"
      }`}
      onClick={() => onChange("SelfHosted")}
    >
      Self Hosted
    </button>
  </div>
);

export default HostingOptions;
