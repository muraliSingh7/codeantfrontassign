import React from "react";
import "./style.css";
import Navbar from "./organisms/Navbar";
import Repositories from "./organisms/Repositories";

const Repository: React.FC = () => {
  return (
    <div className="repository-container">
      <Navbar />
      <Repositories />
    </div>
  );
};

export default Repository;
