import React from 'react';
import { ContainerWrapper } from './Container.styled';
type ContainerProps = {
  children: React.ReactElement;
};
export const Container = ({ children }: ContainerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
