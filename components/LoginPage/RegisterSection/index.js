import { useState } from 'react';
import { api } from '../../../utils'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from 'next/router'

import {
  LinkStyled,
  RegisterContainer,
  RegisterWrapper,
  RegisterHeader,
  RegisterText,
  RegisterSubHeader,
  InvitationCodeInput,
  EmailInput,
  UsernameInput,
  PasswordInput,
  RegisterButton,
  BackButton,
  ErrorMessageStyled,
} from './RegisterElements';

function RegisterSection() {

  const router = useRouter()

  // Checks if email is unique in database
  const [error, setError] = useState(false);

  // Unique registration code
  const invitationCode = 'Aloysius123'

  // React hooks form
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = async (data) => {
    try {
      const email = data.email;
      const username = data.username;
      const password = data.password;

      await api.post('/auth/register', {
        username,
        email,
        password,
      });

      // Return to login on successful account creation
      router.replace('/register/success');

    } catch (err) {
      // If either username or email has been used previously
      // Enforced by the unique label for these fields
      setError(true);
    }
  };


  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterHeader>Create an Account</RegisterHeader>

        <RegisterText>We are currently beta testing, and only those who have received an invitational code may sign up at this point in time.</RegisterText>

        {/* Start of form */}
        <form onSubmit={handleSubmit(onSubmit)}>

          <RegisterSubHeader>Invitation Code</RegisterSubHeader>
          <InvitationCodeInput
            name='code'
            type="text"
            placeholder=" Code"
            {...register("invitationCode", {
              required: '⚠️ Please enter the code provided.',
              validate: value => value === invitationCode || '❌ The code is incorrect.'
            })}
          />

          <ErrorMessageStyled>
            <ErrorMessage
              errors={errors}
              name="invitationCode"
              render={({ message }) => <p>{message}</p>}
            />
          </ErrorMessageStyled>

          <RegisterSubHeader>Email</RegisterSubHeader>
          <EmailInput
            type="text"
            placeholder="Email"
            {...register("email", {
              required: 'We promise not to spam you.',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: '❌ Please enter a valid email.'
              }
            })}
          />

          <ErrorMessageStyled>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p>{message}</p>}
            />
          </ErrorMessageStyled>
          {error && <span style={{ color: 'red', fontSize: '0.9rem' }}>❌ Your email is already in use</span>}

          <RegisterSubHeader>Username</RegisterSubHeader>
          <UsernameInput
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "What can we address you by?",
              minLength: {
                value: 3,
                message: '❌ Your username must be at least 3 characters long.'
              }
            })}
          />

          <ErrorMessageStyled>
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => <p>{message}</p>}
            />
          </ErrorMessageStyled>

          <RegisterSubHeader>Password</RegisterSubHeader>
          <PasswordInput
            placeholder='Password'
            type='password'
            {...register("password", {
              required: "Pick a password, we won't tell anyone.",
              minLength: {
                value: 8,
                message: '❌ Your password must be at least 8 characters long.'
              }
            })}
          />

          <ErrorMessageStyled>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p>{message}</p>}
            />
          </ErrorMessageStyled>

          <RegisterSubHeader>Confirm Password</RegisterSubHeader>
          <PasswordInput
            placeholder='Re-enter your password'
            type='password'
            {...register("confirmPassword", {
              required: "Please re-enter your password.",
              validate: value => value === getValues("password") || '❌ Your passwords do not match.'
            })}
          />

          <ErrorMessageStyled>
            <ErrorMessage
              errors={errors}
              name="confirmPassword"
              render={({ message }) => <p>{message}</p>}
            />
          </ErrorMessageStyled>

          <RegisterButton type="submit" />

        </form>

        <LinkStyled href='./login'>
          <BackButton>Back</BackButton>
        </LinkStyled>

      </RegisterWrapper>
    </RegisterContainer>
  )
}

export default RegisterSection;