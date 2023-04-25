type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className="w-full h-full grid place-items-center">{children}</main>
  );
};

export default Main;
