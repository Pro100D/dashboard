import { SingInForm } from 'components/SingIn/SingInForm';
import { SingUpForm } from 'components/SingUp/SingUpForm';
import { useSelector } from 'react-redux';

import { isShowSingInFormSelector } from '../../redux/auth/selectors';

export const Landing = () => {
  const isRegister = useSelector(isShowSingInFormSelector);

  return isRegister ? <SingInForm /> : <SingUpForm />;
};
