import React, { useState, createContext } from "react";
import paper from "../assets/Images/paper.jpg";
import Login from "./Login";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

export const LocationContext = React.createContext();

function Welcome() {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [location, setLocation] = useState("");
  console.log({ location });
  const navigate = useNavigate();

  const navigateto = async () => {
    try {
      navigate(`/main?location=${location}`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <LocationContext.Provider value={location}>
        <div class="bg-gradient-to-r from-blue-500 to-green-500">
          <div className="flex flex-col">
            <div className="h-screen p-16">
              <img src={paper} className="w-[18rem] h-24" />
              <div className="flex gap-1 text-right ml-[80%] mt-[-5%]">
                <div
                  className="font-semibold cursor-pointer border-2 border-black py-2 px-3"
                  onClick={() => setLoginModal(true)}
                >
                  Login
                </div>
                <div
                  className="bg-black text-white font-bold cursor-pointer px-2 py-2"
                  onClick={() => setSignUpModal(true)}
                >
                  Sign-Up
                </div>
              </div>
              <h1 className="font-bold text-4xl mt-20 text-gray-800">
                Late for file submission?
              </h1>
              <h1 className="mt-3 text-2xl text-zinc-600">
                Print it right way from the choice of your shop
              </h1>
              {/* <input
              className="border border-black mt-12 p-4 w-8/12 bg-black/25 text-white"
              placeholder="Select your Location"
            /> */}

              <select
                onChange={(e) => setLocation(e.target.value)}
                className="border border-black mt-12 p-4 w-8/12 bg-black/25 text-white"
              >
                <option>Select the Option</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Silvassa">Silvassa</option>
                {/* <option value="297705">Bekasi</option>
              <option value="297706">Bogor</option>
              <option value="297707">Cirebon</option>
              <option value="297709">Borobudur</option>
              <option value="297719">Makassar</option> */}
              </select>
              <button
                onClick={navigateto}
                className="bg-blue-600 text-white ml-1 p-[1.1rem]"
              >
                FIND SHOPS
              </button>
            </div>
            {loginModal && (
              <Login
                setLoginModal={setLoginModal}
                setSignUpModal={setSignUpModal}
                location={location}
              />
            )}
            {signUpModal && (
              <SignUp
                setSignUpModal={setSignUpModal}
                setLoginModal={setLoginModal}
              />
            )}
          </div>
        </div>
      </LocationContext.Provider>
    </>
  );
}

export default Welcome;
