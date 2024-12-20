import React from "react";
import "./style.css";
import { AuthProvider } from "../../interfaces";

interface AuthButtonProps {
  provider: AuthProvider;
}

const AuthButton: React.FC<AuthButtonProps> = ({ provider }) => (
  <button className="auth-button" type="button">
    <img
      src={provider.iconPath}
      alt={`${provider.provider} Icon`}
      className="auth-icon"
    />
    Sign in with {provider.provider}
  </button>
);

export default AuthButton;
