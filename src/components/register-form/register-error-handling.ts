import { AxiosError } from 'axios';

export const handleRegisterError = (
  err: unknown,
  setErrMsg: React.Dispatch<React.SetStateAction<string>>
) => {
  if (err instanceof AxiosError && !err?.response) {
    setErrMsg('No Server response');
  } else if (err instanceof AxiosError && err.response?.status === 409) {
    console.log(err);
    setErrMsg('Username taken');
  } else {
    setErrMsg('Registration failed');
  }
};
