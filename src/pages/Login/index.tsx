import React, { useState } from "react";
import "./style.css";
import githubIcon from "../../assets/github.png";
import bitbucketIcon from "../../assets/bitbucket.png";
import azureDevopsIcon from "../../assets/azureDevops.png";
import gitlabIcon from "../../assets/gitlab.png";
import Logo from "../../components/Logo";
import {
  AuthButton,
  HostingOptions,
  StatsCard,
  StatsSummary,
} from "./components";
import { AuthProvider, HostingOption, Stat } from "./interfaces";

const Login: React.FC = () => {
  const [selectedHostingOption, setSelectedHostingOption] =
    useState<HostingOption>("SaaS");

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
    <div className="login-container">
      <div className="section left">
        <div className="stat-container">
          <div className="stat-header">
            <Logo className="stat-logo" />
            <p className="stat-title">AI to Detect & Autofix Bad Code</p>
          </div>
          <div className="stats-summary-container">
            {statsData.map((stat) => (
              <StatsSummary key={stat.description} {...stat} />
            ))}
          </div>
          <StatsCard />
        </div>
        <Logo className="left-section-logo" />
      </div>
      <div className="section right">
        <div className="auth-container">
          <div className="logo-container">
            <div className="logo-company-name">
              <Logo className="right-section-logo" />
              CodeAnt AI
            </div>
            <h1 className="welcome-message">Welcome to CodeAnt AI</h1>
            <HostingOptions
              selected={selectedHostingOption}
              onChange={setSelectedHostingOption}
            />
          </div>
          <div className="auth-buttons-container">
            {authProviders.map((auth) => (
              <AuthButton key={auth.provider} provider={auth} />
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
