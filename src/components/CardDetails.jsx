import React, { useState } from "react";
import { MdUpload } from "react-icons/md";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const CardDetails = () => {
  const [Colour, setColour] = useState(0);
  const [BlackWhite, setBlackWhite] = useState(0);
  const [Binding, setBinding] = useState(0);

  let Total = Colour * 10 * 5 + BlackWhite * 10 * 1 + Binding * 10;

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const locationval = queryParams.get("location");
  const [file, setfile] = useState(null);
  console.log({ file });
  const onFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setfile(uploadedFile);
    if (uploadedFile) {
      const downloadLink = document.createElement("a");
      const fileURL = URL.createObjectURL(uploadedFile);
      downloadLink.href = fileURL;
      downloadLink.download = uploadedFile.name;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div>
      <NavBar locationval={locationval} />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-7 rounded-lg flex justify-between gap-72">
          <div className="flex flex-col">
            <span className="font-bold text-lg">
              Royal Stationary And Xerox
            </span>
            <br />
            <p>
              1, Sanwariya to, Sai Palace Apartment, Yogi Chowk <br /> opposite
              Nilkanth Plaza Surat
            </p>
            <input
              type="file"
              id="upload"
              className="hidden"
              onChange={onFileChange}
            />
            <label
              htmlFor="upload"
              className="flex items-center bg-red-500 rounded-lg w-[110px] justify-center mt-10 cursor-pointer font-bold text-white py-2"
            >
              <MdUpload />
              Upload File
            </label>
            {file && <div>{file.name}</div>}
            <span className="mt-7 font-bold">Printing Pricing!</span>
            <br />
            <div className="flex">
              <span>Colour Print : &#x20B9;5 per page</span>
              <div className="flex gap-2 ml-[7.5rem]">
                <div
                  className="bg-gray-300 px-2 rounded-lg cursor-default"
                  onClick={() =>
                    Colour > 0 && setColour((prevColour) => prevColour - 1)
                  }
                >
                  -
                </div>
                <div>{Colour}</div>
                <div
                  className="bg-gray-300 px-2 rounded-lg cursor-default"
                  onClick={() => setColour((prevColour) => prevColour + 1)}
                >
                  +
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <span>Black and White : &#x20B9;1 per page</span>
              <div className="flex gap-2 ml-[6.2rem]">
                <div
                  className="bg-gray-300 px-2 rounded-lg cursor-default"
                  onClick={() =>
                    BlackWhite > 0 &&
                    setBlackWhite((prevBlackWhite) => prevBlackWhite - 1)
                  }
                >
                  -
                </div>
                <div>{BlackWhite}</div>
                <div
                  className="bg-gray-300 px-2 rounded-lg cursor-default"
                  onClick={() =>
                    setBlackWhite((prevBlackWhite) => prevBlackWhite + 1)
                  }
                >
                  +
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <p>Binding : &#x20B9;10 per file</p>
              <div className="flex gap-2 ml-40">
                <div
                  className="bg-gray-300 px-2 rounded-lg cursor-default"
                  onClick={() =>
                    Binding > 0 && setBinding((prevBinding) => prevBinding - 1)
                  }
                >
                  -
                </div>
                <div>{Binding}</div>
                <div
                  className="bg-gray-300 px-2 rounded-lg cursor-default"
                  onClick={() => setBinding((prevBinding) => prevBinding + 1)}
                >
                  +
                </div>
              </div>
            </div>
            <div className="mt-10 font-bold text-3xl font-serif">
              Total Price - &#x20B9;{Total}
            </div>
          </div>
          <img
            src="https://lh5.googleusercontent.com/p/AF1QipNdtqdpIdZ6kdBLOXg7NSQimpDDlkHTTi5jAXKL=w426-h240-k-no"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
