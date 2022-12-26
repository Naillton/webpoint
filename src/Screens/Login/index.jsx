import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Inputs from '../../Components/Input';
import Button from '../../Components/Button';

import {
  Container
} from './styles';

const schema = yup.object({
  email: yup.string().max(50).email().required('Campo obrigatorio'),
  password: yup.string().min(8).max(20).required('Campo obrigatorio')
}).required();

const Login = () => {

  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return(
    <Container>
      <p>Login</p>
      <Controller
        control={control}
        render={({ field: { onChange, value }}) =>(
          <Inputs
            type='email'
            placeholder='Digite seu Email'
            value={value}
            onChange={onChange}
            error={errors?.email}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({ field: { onChange, value }}) =>(
          <Inputs
            type='password'
            placeholder='Digite sua senha'
            value={value}
            onChange={onChange}
            error={errors?.password }
          />
        )}
        name="password"
      />
      <Button
        func={() => console.log('ok')}
        text='Entrar'
      />
    </Container>
  );
}

export default Login;
