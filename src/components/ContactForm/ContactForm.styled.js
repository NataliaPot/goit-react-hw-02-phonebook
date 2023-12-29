import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid #000;
  padding-top: 12px;
  padding-left: 12px;
  padding-bottom: 12px;

  max-width: 400px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  max-width: 200px;
  margin-bottom: 28px;
  border: 1px solid black;
  outline: 3px solid white;
  background-color: #fff;
  &:focus {
    border-radius: 3px;
    border: 1px solid rgb(0, 158, 186);
    outline: 2px solid rgb(0, 158, 186, 0.3);
    box-shadow: 0px 0 5px 3px rgba(0, 158, 186, 0.3);
    background-color: #fff;
  }

  &:hover {
    border-radius: 3px;
    border: 1px solid rgb(0, 158, 186);
    outline: 2px solid rgb(0, 158, 186, 0.3);
    box-shadow: 0px 0 5px 3px rgba(0, 158, 186, 0.3);
    background-color: #fff;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 1000000s ease-in-out 0s;
  }
`;

export const Button = styled.button`
  padding: 2px 8px;
  max-width: 120px;
  background-color: #fff;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  box-shadow: 0.1px 1.1px 1.5px rgb(150, 150, 150);
  cursor: pointer;

  &:hover {
    border: 1px solid #009eba;
    color: rgb(0, 158, 186);
  }

  &:active {
    color: white;
    background-color: #009eba;
    border: 1px solid #009eba;
    box-shadow: 0.1px 1.1px 1.5px white;
    outline: none;
  }
`;

export const TitlePhonebook = styled.h1`
  font-size: 36px;
`;
export const TitleContacts = styled.h2`
  font-size: 36px;
`;
