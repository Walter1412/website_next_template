import Form, { Input, Button } from '../../components/basic/Form';
import { GetStaticProps } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup.object().shape({
  account: yup.string().required(),
  password: yup.string().required(),
});
type FormValues = {
  account: string;
  password: string;
};
export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <div className="default-wrapper">
      <div className="default-container">
        <div className="w-full flex">
          <div className="w-1/2 border-2 border-danger"></div>
          <div className="w-1/2 border-2 border-gray-500 py-4 px-6 m-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <label>Account</label>
              <Input {...register('account')} />
              <label>Password</label>
              <Input {...register('password')} />
              <Button type="submit">Test</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
