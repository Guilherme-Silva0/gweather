type Props = {
  children: React.ReactNode;
  additionalClass?: string;
};

const Text = ({ children, additionalClass }: Props) => {
  return (
    <p
      className={`text-fist dark:text-gray-100 transition-all drop-shadow-sm ${additionalClass}`}
    >
      {children}
    </p>
  );
};

export default Text;
