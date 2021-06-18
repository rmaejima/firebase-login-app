import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  size?: string;
  color?: string;
}

export const LoadingSpinner: React.VFC<Props> = ({
  size = "4rem",
  color = "#000",
}) => {
  return <Spinner size={size} color={color} />;
};

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<{ size: string; color: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: transparent;
  border-top: 2px solid gray;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
  border-left: 4px solid ${({ color }) => color};
  border-radius: 50%;

  animation: ${rotate360} 0.5s linear infinite;
  transform: translateZ(0);
`;
