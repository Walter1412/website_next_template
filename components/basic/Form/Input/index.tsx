import React from 'react';
// type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  prefix?: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { ...restProps } = props;
  const Prefix = function () {
    return <div className="border-gray-500 w-4 h-full">test</div>;
  };

  return (
    <div>
      <Prefix></Prefix>
      <input className="border-gray-500 border-2 w-full py-1 px-2 rounded" ref={ref} {...restProps} />
    </div>
  );
});
export default Input;
