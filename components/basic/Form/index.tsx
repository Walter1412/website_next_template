import Input from './Input';
import Button from './Button';

interface FormProps {
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  children: React.ReactNode;
}
const Form = function Form(props: FormProps) {
  const { children, ...restProps } = props;
  return <form {...restProps}>{children}</form>;
};
export default Form;
export { Input, Button };
