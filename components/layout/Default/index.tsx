import TheHeader from '../../basic/Header';
import TheFooter from '../../basic/Footer';
export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen border-2 border-black">
      <TheHeader></TheHeader>
      <main className="w-full">{children}</main>
      <TheFooter></TheFooter>
    </div>
  );
}
