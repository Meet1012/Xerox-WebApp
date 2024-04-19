import React, { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/setup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LocationContext } from "./Welcome";
import Main from "./Main";
function Login({ setLoginModal, setSignUpModal, location }) {
  const navigate = useNavigate();

  const locationval = useContext(LocationContext);
  console.log({ locationval });

  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    console.log({ phone });
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      console.log(confirmation);
      setUser(confirmation);
      console.log("Success");
    } catch (err) {
      console.error(err);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      data.user.phoneNumber && toast.success("LoggedIn successfully");
      // data.user.phoneNumber &&
      //   setTimeout(() => {
      //     navigate(<Main />);
      //   }, 200);
    } catch (err) {
      console.error(err);
    }
  };

  const navigation = () => {
    navigate(<Main />);
  };

  const clickfunction = () => {
    setSignUpModal(true);
    setLoginModal(false);
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
          <div className=" p-10 relative transform overflow-hidden  bg-white text-left h-screen shadow-xl transition-all  sm:w-4/12 sm:max-w-lg">
            <AiOutlineCloseCircle
              className="text-2xl cursor-pointer"
              onClick={() => setLoginModal && setLoginModal(false)}
            >
              X
            </AiOutlineCloseCircle>
            <h1 className="font-semibold text-3xl mt-3">Login</h1>
            <h1 className="mt-3">
              or{" "}
              <button className="text-blue-500 text-sm" onClick={clickfunction}>
                create an account
              </button>
            </h1>

            <PhoneInput
              inputStyle={{ height: "63px", width: "320px" }}
              containerStyle={{ marginTop: "20px" }}
              placeholder="Phone number"
              value={phone}
              onChange={(phone) => setPhone("+" + phone)}
            />
            <div id="recaptcha"></div>
            <button
              onClick={sendOtp}
              className="bg-orange-500 p-5 text-white font-semibold text-xs w-80 mt-2"
            >
              Send Otp
            </button>
            {user && (
              <input
                onChange={(e) => setOtp(e.target.value)}
                className="p-5 border border-gray-300  w-80 mt-2"
                placeholder="One time password"
              />
            )}
            {otp && (
              <button
                onClick={verifyOtp}
                className="bg-orange-500 p-5 text-white font-semibold text-xs w-80 mt-2"
              >
                Verify Otp
              </button>
            )}
            <button
              onClick={navigation}
              className="bg-blue-500 text-white p-5 font-semibold text-xs w-80 mt-4"
            >
              LOGIN
            </button>
            <h1 className="text-xs font-medium mt-2">
              By clicking on login I accept the Terms & Condtions & <br />{" "}
              Privacy policy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
