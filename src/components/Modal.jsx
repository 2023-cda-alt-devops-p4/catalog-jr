import styled from "styled-components";

const Modal = ({src, alt}) => {

    return (
        <ModalContainer>
            <img src={src} alt={alt}/>
        </ModalContainer>
    );
};

export default Modal;

const ModalContainer = styled.div`
  background-color: gray;
  width: 50%;
  min-height: 50vh;
  position: fixed;
`;