import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/setup";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { AiOutlineCloseCircle } from "react-icons/ai";

function SignUp({ setSignUpModal, setLoginModal }) {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const sendOtp = async () => {
    console.log({ phone });
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (err) {
      console.error(err);
    }
  };
  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      data.user.phoneNumber && toast.success("LoggedIn successfully");
      data.user.phoneNumber &&
        setTimeout(() => {
          navigate("/main");
        }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const clickfunction = () => {
    setSignUpModal(false);
    setLoginModal(true);
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
              onClick={() => setSignUpModal && setSignUpModal(false)}
            >
              X
            </AiOutlineCloseCircle>
            <h1 className="font-semibold text-3xl mt-3">Sign-Up</h1>
            <h1 className="mt-3">
              or{" "}
              <button
                className="text-blue-500 text-sm"
                onClick={clickfunction}
              >
                login to your account
              </button>
            </h1>
            <div className="flex flex-col gap-2">
              <PhoneInput
                inputStyle={{ height: "63px", width: "320px" }}
                containerStyle={{ marginTop: "20px" }}
                placeholder="Phone number"
                value={phone}
                onChange={(phone) => setPhone("+" + phone)}
              />
              <div id="recaptcha"></div>
              {phone && (
                <button
                  onClick={sendOtp}
                  className="bg-orange-500 p-5 text-white font-semibold text-xs w-80"
                >
                  Send Otp
                </button>
              )}
              {user && (
                <input
                  className="p-6 border border-gray-300  w-80"
                  placeholder="One time password"
                  value={otp}
                />
              )}
              <input
                className="p-6 border border-gray-300  w-80"
                placeholder="Name"
              />
              <input
                className="p-6 border border-gray-300  w-80"
                placeholder="Email"
              />
              {otp && (
                <button
                  onClick={verifyOtp}
                  className="bg-orange-500 p-5 text-white font-semibold text-xs w-80 "
                >
                  Verify Otp
                </button>
              )}
              <button className="bg-blue-500 text-white p-6 font-semibold text-xs w-80">
                SIGNUP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
