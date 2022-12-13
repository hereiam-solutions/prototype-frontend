import styled from "styled-components";
import useModal from "../../hooks/useModal";

const Modal = () => {
  const { modalContent, setIsModalActive } = useModal();
  return (
    <StyledModalWrapper>
      <StyledModal
        onTouchStart={() => setIsModalActive(false)}
        onClick={() => setIsModalActive(false)}
      >
        {modalContent}

      </StyledModal>
    </StyledModalWrapper>
  );
};

const StyledModalWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;

  width: 100vw;
  height: 25vh;

  display: flex;
  justify-content: center;

  pointer-events: none;
`;

const StyledModal = styled.div`
  pointer-events: auto;

  max-width: 65vw;
  max-height: 33vh;

  margin-top: 1vh;
  padding: 1rem;

  font-size: 1.1rem;
  font-weight: 700;

  border-radius: 15px;

  background: var(--gray-200);
  color: var(--base);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 101;

  animation-name: fadeInTop;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
  @keyframes fadeInTop {
    0% {
      transform: translateY(-12vh);
      /* height: 0%; */
      /* margin-top: 0; */
    }
    100% {
      transform: translateY(0);
      /* height: 100%; */
      /* margin-top: 1rem; */
    }
  }
`;

export default Modal;
