// type ButtonProps = {
//   props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
//   children: React.ReactNode;

// };
interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}
export default function Button(props: ButtonProps) {
  const { children, prefix, ...restProps } = props;
  return (
    <button className="w-full bg-blue-500 text-white py-1 rounded mt-3" {...restProps}>
      {children}
    </button>
  );
}
