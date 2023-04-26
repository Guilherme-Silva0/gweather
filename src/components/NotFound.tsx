import Text from "./Text";

const NotFound = () => {
  return (
    <div className="w-full grid place-items-center gap-3 pb-3">
      <img className="w-full drop-shadow-md" src="/404.svg" alt="Not Found" />
      <Text additionalClass="text-2xl font-bold">City not found!</Text>
    </div>
  );
};

export default NotFound;
