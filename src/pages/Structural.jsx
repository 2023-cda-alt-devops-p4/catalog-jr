import structJson from '../assets/json/StructData.json';
import styled from "styled-components";
import Card from "../components/Card.jsx";

const Structural = () => {

    return (
        <MainContainer>
            {structJson.map((data, index) => (
                <Card
                    key={`card-uml-${index}`}
                    name={data?.name}
                    description={data?.description}
                    avantages={data?.avantages}
                    exemple={data?.exemple}
                    img={data?.img}
                    alt={data?.imgAlt}
                />
            ))}
        </MainContainer>
    );
};

export default Structural;

const MainContainer = styled.div`
  padding-top: 70px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;