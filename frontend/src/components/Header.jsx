import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoCopyOutline } from "react-icons/io5";

const Header = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 10000); // 10초 후에 복사 상태 초기화
  };
  return (
    <div className="bg-red-100 flex justify-end items-center p-5">
      <div className="border border-black mr-1 px-3 rounded-xl">
        0xcd4...8fy43
      </div>
      <CopyToClipboard text="0xcd4...8fy43" onCopy={handleCopy}>
        <button>
          <IoCopyOutline />
        </button>
      </CopyToClipboard>
    </div>
  );
};
export default Header;
