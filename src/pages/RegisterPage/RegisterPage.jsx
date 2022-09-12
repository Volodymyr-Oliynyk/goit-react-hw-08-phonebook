import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;