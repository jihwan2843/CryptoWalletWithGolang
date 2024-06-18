const Bottom = ({ setButton }) => {
  return (
    <div className="bg-green-100 flex justify-around absolute bottom-0 w-full border border-black">
      <ul className="bottom-style">Token</ul>
      <ul className="bottom-style">Defi</ul>
      <ul className="bottom-style">NFT</ul>
      <ul className="bottom-style">History</ul>
    </div>
  );
};
export default Bottom;
