type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default Main;
