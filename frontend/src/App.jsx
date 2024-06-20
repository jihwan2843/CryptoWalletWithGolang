import { useState } from "react";
import Bottom from "./components/Bottom";
import Display from "./components/Display";
import Header from "./components/Header";
import Tokens from "./components/tabs/Tokens";
import NFTs from "./components/tabs/NFTs";
import Defis from "./components/tabs/Defis";

const App = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-blue-100 relative border border-black w-[480px] h-[800px]">
        <Header />
        <Display />
        {tab == 0 ? <Tokens /> : ""}
        {tab == 1 ? <Defis /> : ""}
        {tab == 2 ? <NFTs /> : ""}
        {tab == 3 ? "" : ""}
        <Bottom setTab={setTab} />
      </div>
    </div>
  );
};
export default App;
