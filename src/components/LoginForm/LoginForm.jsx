import { Button } from '../common/ButtonStyled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperation';
import * as yup from 'yup';
import { Input, FormStyled, Label } from 'components/common/FormStyled';
import { Link } from 'react-router-dom';
import { Title } from 'components/common/TitleStyled';

const schema = yup.object().shape({
  email: yup.string().email().required('No email provided.'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };

  return (
    <>
      <Title>Аccount login</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
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
            <FormStyled>
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
                LogIn
              </Button>
            </FormStyled>
          );
        }}
      </Formik>
      <div>
        Don't have account? <Link to="/register">SginUp</Link>
      </div>
    </>
  );
};
