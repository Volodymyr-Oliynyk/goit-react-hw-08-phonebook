import { Button } from 'components/common/ButtonStyled';
import { Title } from 'components/common/TitleStyled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authOperation';
import * as yup from 'yup';
import { Input, Label, FormStyled } from '../common/FormStyled';
import { Link } from 'react-router-dom';
// import { Input } from 'components/common/InputStyled';

const nameReg = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/);

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .matches(
      nameReg,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('No name provided.'),
  email: yup.string().email().required('No email provided.'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(registerUser(user));
    resetForm();
  };

  return (
    <div>
      <Title>Create Account</Title>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
           
          } = props;

          return (
            <FormStyled >
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name && 'error'}
              />
              {errors.name && touched.name && <div>{errors.name}</div>}

              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && 'error'}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}

              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && 'error'}
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}

              <Button type="submit" disabled={isSubmitting}>
                SignUp
              </Button>
            </FormStyled>
          );
        }}
      </Formik>
      <div>
        Do you have an account?<Link to="/login">Login</Link>
      </div>
    </div>
  );
};
