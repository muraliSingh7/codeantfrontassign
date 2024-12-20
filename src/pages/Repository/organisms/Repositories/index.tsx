import React from "react";
import { IconAdd, IconRefresh } from "../../../../components/Icons";
import repositoryData from "../../data/repositoryData";
import RepositoryCard from "../../components/RepositoryCard";
import "./style.css";

const Repositories: React.FC = () => {
  return (
    <div className="repositories">
      <div className="repositories-content">
        <div className="repositories-header">
          <div className="repositories-header-wrapper">
            <div className="repositories-title">
              <p className="repositories-title-text">Repositories</p>
              <p className="repositories-count">
                {repositoryData.length} total repositories
              </p>
            </div>
            <div className="repositories-buttons">
              <button className="repositories-button-refresh">
                <IconRefresh /> Refresh All
              </button>
              <button className="repositories-button-add">
                <IconAdd /> Add Repository
              </button>
            </div>
          </div>
          <input
            className="repositories-search"
            placeholder="Search Repository"
            aria-label="Search Repository"
          />
        </div>

        {repositoryData.map((repo, index) => (
          <RepositoryCard
            {...repo}
            key={repo.title}
            className={
              index === repositoryData.length - 1
                ? "repositories-last-card"
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Repositories;
