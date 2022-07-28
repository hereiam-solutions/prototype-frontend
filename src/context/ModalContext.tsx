import { ReactNode, createContext, useState } from "react";

// create a type for the context's value
type ModalContextType = {
  isModalActive: boolean;
  setIsModalActive: (isModalActive: boolean) => void;
  modalContent: string;
  setModalContent: (modalContent: string) => void;
};

// create the context and set a default value that matches the context type
const ModalContext = createContext<ModalContextType>({
  isModalActive: false,
  setIsModalActive: () => {},
  modalContent: "",
  setModalContent: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const ModalProvider = (children: ReactNode) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  return (
    <ModalContext.Provider
      value={{
        isModalActive: isModalActive,
        setIsModalActive: setIsModalActive,
        modalContent: modalContent,
        setModalContent: setModalContent,
      }}
    >
      <>{children}</>
    </ModalContext.Provider>
  );
};

export default ModalContext;
