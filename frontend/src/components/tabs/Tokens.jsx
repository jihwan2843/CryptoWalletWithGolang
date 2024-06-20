const Tokens = () => {
  return (
    <div className="border border-black">
      <div className="flex justify-between">
        <div>token</div>
        <div>total value</div>
      </div>
      <div className="border border-black mt-3 flex justify-between">
        <div className="border border-black flex">
          <div className="border border-black">imgae</div>
          <div className="border border-black">token name</div>
        </div>
        <div className="border border-black">token amount</div>
      </div>
    </div>
  );
};

export default Tokens;
