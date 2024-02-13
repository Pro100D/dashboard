import { BackdropStyled } from './Backdrop.styled';

export const Backdrop: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => <BackdropStyled>{children}</BackdropStyled>;
