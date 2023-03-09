import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  border: 3px dashed grey;
  border-radius: 20px;
  width: max-content;
  padding: 0px 20px 10px 20px;
  margin-left: 25%;
`;

export const Wrapper = styled.div`
  padding: 15px;
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  font-family: "Times New Roman", Times, serif;
`;

export const FormContainer = styled.form`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 2px dashed rgb(2, 57, 88);
  margin-right: 10px;
  outline: none;
`;

export const SubmitButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  font-size: 1.2rem;
  border: none;
  border-radius: 20px;
  border: 2px solid black;
  background: rgb(2, 57, 88, 0.8);
  cursor: pointer;
  color: white;

  &:hover {
    background: transparent;
    color: black;
  }

  &:focus {
    outline: none;
  }
`;
