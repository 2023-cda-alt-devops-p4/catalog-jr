import styled from "styled-components";
import Modal from "../components/Modal.jsx";
import {useState} from "react";

const Card = ({name, description, avantages, exemple, img, alt}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <CardContainer onClick={() => setIsOpen((prevState) => !prevState)}>
                <h1>{name}</h1>
                <h4>Description</h4>
                <p>{description}</p>
                <h4>Avantages</h4>
                <p>{avantages}</p>
                <h4>Exemple</h4>
                <p>{exemple}</p>
            </CardContainer>
            {isOpen && (
                <Modal src={img} alt={alt}/>
            )}
        </>
    );
};

export default Card;

const CardContainer = styled.div`
  width: 20%;
  height: 700px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  font-family: "Roboto Light", sans-serif;
  padding: 15px;
  box-shadow: 21px 27px 15px -3px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    transition: 0.3s all ease-in-out;
  }
`;