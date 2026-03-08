import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <div className="welcome-container">
        {/* Floating numbered circles */}
        <div className="bubble-wrapper">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                top: `${20 + i * 40}px`,
                left: `${20 + (i % 3) * 60}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${6 + i}s`,
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Text + Buttons */}
        <div className="welcome-content">
          <h2 className="welcome-title">Welcome to PopX</h2>
          <p className="welcome-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button
            className="welcome-btn primary"
            onClick={() => navigate("/create-account")}
          >
            Create Account
          </button>
          <button
            className="welcome-btn secondary"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>

      {/* Inline CSS styles */}
      <style>{`
        .welcome-container {
          position: relative;
          max-width: 400px;
          margin: 5rem auto;
          padding: 1.5rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }

        .bubble-wrapper {
          position: absolute;
          inset: 0;
        }

        .bubble {
          position: absolute;
          width: 32px;
          height: 32px;
          background: #facc15;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #000;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          animation: bubble 4s infinite ease-in-out;
        }

        @keyframes bubble {
          0%   { transform: translateY(0); opacity: 1; }
          50%  { transform: translateY(-20px); opacity: 0.8; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .welcome-content {
          position: relative;
          z-index: 10;
        }

        .welcome-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .welcome-text {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .welcome-btn {
          width: 100%;
          height: 48px;
          border-radius: 8px;
          font-weight: 500;
          margin-bottom: 0.75rem;
          cursor: pointer;
          border: none;
        }

        .welcome-btn.primary {
          background: #6b21a8;
          color: #fff;
        }

        .welcome-btn.secondary {
          background: #d8b4fe;
          color: #000;
        }
      `}</style>
    </>
  );
}

export default Welcome;