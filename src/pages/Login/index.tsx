import React, { useState } from "react";
import "./style.css";
import githubIcon from "../../assets/github.png";
import bitbucketIcon from "../../assets/bitbucket.png";
import azureDevopsIcon from "../../assets/azureDevops.png";
import gitlabIcon from "../../assets/gitlab.png";
import Logo from "../../components/Logo";
import upArrow from "../../assets/upArrow.svg";
import pieChart from "../../assets/pieChart.svg";

interface AuthProvider {
  provider: string;
  iconPath: string;
}

interface Stat {
  number: string;
  description: string;
}

const Login: React.FC = () => {
  const [selectedHoistingOptions, setSelectedHoistingOptions] = useState<
    "LEFT" | "RIGHT"
  >("LEFT");
  
  const authProviders: AuthProvider[] = [
    { provider: "Github", iconPath: githubIcon },
    { provider: "Bitbucket", iconPath: bitbucketIcon },
    { provider: "Azure Devops", iconPath: azureDevopsIcon },
    { provider: "GitLab", iconPath: gitlabIcon },
  ];

  const statsData: Stat[] = [
    { number: "30+", description: "Language Support" },
    { number: "10K+", description: "Developers" },
    { number: "100K+", description: "Hours Saved" },
  ];
  
  return (
    <div className="app-container">
      <div className="left-section">
        <div className="feature1 container">
          <div className="header">
            <Logo className="feature1-logo" />
            <p className="title">AI to Detect & Autofix Bad Code</p>
          </div>
          <div className="stats-container">
            {statsData.map(({ number, description }) => (
              <div className="stats-item">
                <div className="stat-number">{number}</div>
                <div className="stat-description">{description}</div>
              </div>
            ))}
          </div>
          <div className="stats2-card">
            <div className="stats2-card-column">
              <img
                src={pieChart}
                alt="Pie Chart"
                className="stats2-pie-chart"
              />
              <p className="stats2-title">Issues Fixed</p>
              <p className="stats2-number">500K+</p>
            </div>
            <div className="stats2-card-column">
              <p className="stats2-percentage">
                <img src={upArrow} alt="Up arrow" className="up-arrow" /> 14%
              </p>
              <p className="stats2-week">This week</p>
            </div>
          </div>
        </div>

        <Logo className="left-section-logo" />
      </div>
      <div className="right-section">
        <div className="auth-container">
          <div className="logo-container">
            <div className="logo-company-name">
              <Logo className="right-section-logo" />
              CodeAnt AI
            </div>
            <h1 className="welcome-message">Welcome to CodeAnt AI</h1>
            <div className="hosting-options">
              <button
                className={
                  selectedHoistingOptions === "LEFT"
                    ? "active"
                    : "left-inactive"
                }
                onClick={() => setSelectedHoistingOptions("LEFT")}
              >
                SAAS
              </button>
              <button
                className={
                  selectedHoistingOptions === "RIGHT"
                    ? "active"
                    : "right-inactive"
                }
                onClick={() => setSelectedHoistingOptions("RIGHT")}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <div className="auth-buttons-container">
            {authProviders.map((auth) => (
              <button key={auth.provider} className="auth-button" type="button">
                <img
                  src={auth.iconPath}
                  alt={`${auth.provider} Icon`}
                  className="auth-icon"
                />
                Sign in with {auth.provider}
              </button>
            ))}
          </div>
        </div>
        <p className="privacy-policy">
          By signing up you agree to the <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
