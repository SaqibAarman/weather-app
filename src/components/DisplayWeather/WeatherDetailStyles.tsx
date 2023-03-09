import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
`;

export const WrapperMain = styled.div`
  width: 500px;
  margin-top: 10px;
  align-self: center;
  padding: 50px;
  border-radius: 20px;
  position: relative;
  background: rgb(205, 202, 202);
  border: 1px solid black;
`;

export const MainCardTitle = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const MainCardSubTitle = styled.span`
  position: absolute;
  left: 10px;
  color: grey;
  margin-top: -6px;
`;

export const Heading = styled.h1`
  font-size: 5rem;
  margin: -10px;
  margin-left: 150px;
`;

export const Icon = styled.img`
  width: 100px;
  position: absolute;
  top: 45px;
  right: 178px;
`;

export const MainTitle = styled.span`
  position: absolute;
  top: 125px;
  left: 315px;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const Description = styled.span`
  position: absolute;
  left: 10px;
  font-size: 1.5rem;
`;

export const DetailSection = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-gap: 20px;
`;

export const RightSection = styled.div`
  justify-self: right;
  width: 300px;
`;

export const ColumnName = styled.h4`
  text-align: left;
  margin-right: 30px;
  font-size: 1.2rem;
`;

export const TableData = styled.td`
  border-bottom: 2px dashed grey;
`;

export const TableDataSpan = styled.span`
  font-size: 1.2rem;
`;

export const LeftSection = styled.div``;
