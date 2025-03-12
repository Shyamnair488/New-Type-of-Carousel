import styled from 'styled-components';

const Button2 = () => {
  return (
    <StyledWrapper>
      <button>
        <div className="blur-gradient" />
        User Registration
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 0.8em 1.8em;
    border: 2px solid #17C3B2;
    position: relative;
    overflow: hidden;
    background-color: rgba(23, 195, 178, 0.1);
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    font-family: inherit;
    color: #ffffff;
    letter-spacing: 0.5px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(23, 195, 178, 0.2);
    cursor: pointer;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .blur-gradient {
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, 
      rgba(23, 195, 178, 0.4) 0%,
      rgba(23, 195, 178, 0.1) 50%,
      rgba(23, 195, 178, 0.05) 100%
    );
    pointer-events: none;
    z-index: -1;
    filter: blur(8px);
    opacity: 0.8;
    transition: all 0.4s ease;
  }

  button:hover .blur-gradient {
    filter: blur(12px);
    opacity: 1;
  }

  button::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: rgba(23, 195, 178, 0.3);
    transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 105%;
  }

  button:hover {
    color: #ffffff;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 20px rgba(23, 195, 178, 0.4);
    background-color: rgba(23, 195, 178, 0.2);
  }

  button:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 2px 10px rgba(23, 195, 178, 0.3);
  }

  @keyframes shimmer {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    background-position: -100% 0;
    transition: background-position 0.5s;
    pointer-events: none;
  }

  button:hover::after {
    animation: shimmer 1s infinite;
  }
`;

export default Button2;

