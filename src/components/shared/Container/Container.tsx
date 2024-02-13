import React from 'react';
import { ContainerWrapper } from './Container.styled';

export const Container: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => <ContainerWrapper>{children}</ContainerWrapper>;
