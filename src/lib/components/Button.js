import styled from "styled-components";

const Component = styled.button`
  padding: 10px;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  outline: none;
  cursor: pointer;
`;

export const Button = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};
