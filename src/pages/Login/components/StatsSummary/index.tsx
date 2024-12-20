import React from "react";
import { Stat } from "../../interfaces";
import "./style.css";

const StatsSummary: React.FC<Stat> = ({ number, description }) => (
  <div className="stats-item">
    <div className="stat-number">{number}</div>
    <div className="stat-description">{description}</div>
  </div>
);

export default StatsSummary;
