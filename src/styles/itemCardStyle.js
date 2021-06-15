import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 4%;
  margin-bottom: 4%;
`;

const InstrumentCard = styled.div`
  display: flex;
`;

const WholeCardContainer = styled.div`
  margin-right: 4%;
  margin-left: 4%;
`;

const IndividualCard = styled.div`
  margin: 5%;
`;

const InstrumentTitle = styled.h2`
  align-self: flex-start;
  margin-bottom: 1%;
  margin-top: 3%;
  margin-right: 2%;
  margin-left: 2%;
  color: #919191;
`;

const ViewTitle = styled.h1`
  margin-top: 2%;
  margin-bottom: 2%;
`;

const AddButton = styled.button`
  background-color: black;
  border-radius: 50%;
  font-size: 16px;
`;

const PopImage = styled.img`
  width: 100%;
  height: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Ulist = styled.ul`
  list-style-type: none;
  font-size: 16px;
  text-align: center;
  padding-left: 0;
`;
export {
  CardContainer,
  InstrumentCard,
  WholeCardContainer,
  IndividualCard,
  InstrumentTitle,
  ViewTitle,
  AddButton,
  PopImage,
  ButtonContainer,
  Ulist
};
