import React from "react";

const DownloadButton = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/sjohnssoncv.pdf"; 
    link.download = "sjohnssoncv.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button className="btn-primary z-30" onClick={downloadCV}>download my <span className="text-accent">resume.</span></button>;
};

export default DownloadButton;
