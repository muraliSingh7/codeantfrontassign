import React from "react";
import "./style.css";
import { IconPieChart, IconUparrow } from "../../../../components/Icons";

const StatsCard: React.FC = () => (
  <div className="stats2-card">
    <div className="stats2-card-column">
      <IconPieChart className="stats2-pie-chart" />
      <p className="stats2-title">Issues Fixed</p>
      <p className="stats2-number">500K+</p>
    </div>
    <div className="stats2-card-column">
      <p className="stats2-percentage">
        <IconUparrow className="stats2-up-arrow" />
        14%
      </p>
      <p className="stats2-week">This week</p>
    </div>
  </div>
);

export default StatsCard;
