import styled from "styled-components";

const Component = styled.input`
  padding: 10px;
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
  border-bottom: 2px solid white;
`;

export const Input = (props) => {
  return <Component {...props} />;
};
