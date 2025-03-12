import styled from 'styled-components';

const Button2 = () => {
  return (
    <StyledWrapper>
      <button>
        User Registration
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 1em 2.2em;
    border: 2px solid #8B5CF6;
    position: relative;
    overflow: hidden;
    background-color: rgba(139, 92, 246, 0.1);
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    font-family: inherit;
    color: #ffffff;
    letter-spacing: 1px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
    backdrop-filter: blur(10px);
  }

  button::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(35deg);
    background: linear-gradient(45deg, #8B5CF6, #7C3AED);
    transition: 0.6s ease;
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 110%;
  }

  button:hover {
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
    border-color: #7C3AED;
  }

  button:active {
    transform: translateY(1px);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  }

  @media (hover: hover) {
    button::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        rgba(139, 92, 246, 0.3),
        rgba(124, 58, 237, 0.3)
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -2;
    }

    button:hover::after {
      opacity: 1;
    }
  }
`;

export default Button2; 