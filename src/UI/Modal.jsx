import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(66, 79, 94, 0.4);
`;

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f9fafb;
  border-radius: 10px;
  padding: 50px 79px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 300px;
  @media (max-width: 1023px) {
    padding: 40px 50px;
  }
  @media (max-width: 767px) {
    padding: 40px 20px;
  }
`;

const Modal = ({ children, onSubmit, closeNewUserModal }) => {
  return (
    <Wrapper onClick={closeNewUserModal}>
      <Form onSubmit={onSubmit}>{children}</Form>
    </Wrapper>
  );
};

export default Modal;
