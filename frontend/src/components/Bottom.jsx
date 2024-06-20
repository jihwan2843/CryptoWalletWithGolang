const Bottom = ({ setTab }) => {
  const onClickToken = () => {
    setTab(0);
  };
  const onClickDefi = () => {
    setTab(1);
  };
  const onClickNFT = () => {
    setTab(2);
  };
  const onClickHistory = () => {
    setTab(3);
  };

  return (
    <div className="bg-green-100 flex justify-around absolute bottom-0 w-full border border-black">
      <button className="bottom-style" onClick={onClickToken}>
        Token
      </button>
      <button className="bottom-style" onClick={onClickDefi}>
        Defi
      </button>
      <button className="bottom-style" onClick={onClickNFT}>
        NFT
      </button>
      <button className="bottom-style" onClick={onClickHistory}>
        History
      </button>
    </div>
  );
};
export default Bottom;
