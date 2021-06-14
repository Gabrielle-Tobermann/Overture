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
export {
  CardContainer, InstrumentCard, WholeCardContainer, IndividualCard, InstrumentTitle, ViewTitle
};
