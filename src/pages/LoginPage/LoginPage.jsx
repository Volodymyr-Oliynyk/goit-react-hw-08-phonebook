import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
