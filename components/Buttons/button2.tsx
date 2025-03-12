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
    border: 2px solid #17C3B2;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.3s ease;
    z-index: 1;
    font-family: inherit;
    color: #ffffff;
    letter-spacing: 0.5px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(23, 195, 178, 0.2);
  }

  button::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #17C3B2;
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 105%;
  }

  button:hover {
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(23, 195, 178, 0.4);
  }

  button:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(23, 195, 178, 0.3);
  }
`;

export default Button2;
