const Display = () => {
  return (
    <div className="flex justify-between ">
      <div className="bg-purple-100 m-6 p-5">
        <div className="flex justify-center mt-2">80.30</div>
        <div className="mt-3">Network : Ethereum</div>
      </div>
      <div className="bg-green-100 m-6 p-5">
        <div className="mt-2 button-style">Send</div>
        <div className="mt-3 button-style">Swap</div>
      </div>
    </div>
  );
};
export default Display;
