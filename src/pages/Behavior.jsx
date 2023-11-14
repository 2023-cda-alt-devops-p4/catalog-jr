import behavJson from "../assets/json/BehavData.json";
import Card from "../components/Card.jsx";
import styled from "styled-components";

const Behavior = () => {
    return (
        <MainContainer>
            {behavJson.map((data, index) => (
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

export default Behavior;

const MainContainer = styled.div`
  padding-top: 70px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;