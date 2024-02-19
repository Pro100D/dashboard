import { SingInForm } from 'components/SingIn/SingInForm';
import { SingUpForm } from 'components/SingUp/SingUpForm';
import { useSelector } from 'react-redux';

import { isRegisterSelector } from '../../redux/auth/selectors';

export const Landing = () => {
  const isRegister = useSelector(isRegisterSelector);

  return isRegister ? <SingInForm /> : <SingUpForm />;
};
