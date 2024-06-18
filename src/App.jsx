import { useState } from "react";
import Bottom from "./components/Bottom";
import Display from "./components/Display";
import Header from "./components/Header";

const App = () => {
  const [button, setButton] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-blue-100 relative border border-black w-[480px] h-[800px]">
        <Header />
        <Display />
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
        <Bottom setButton={setButton} />
      </div>
    </div>
  );
};
export default App;
