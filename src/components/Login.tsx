import Modal from "./atoms/Modal";
import InputField from "./atoms/InputField";
import Button from "./atoms/Button";
import { useState } from "react";
import Signup from "./Signup";
import { useLocation } from "react-router-dom";

interface LoginProps {
  showCross?: boolean;
  onClose?: () => void;
}

const Login = ({ showCross = false, onClose }: LoginProps) => {
  const [signUp, setSignup] = useState(false);
  const [show, setShow] = useState(true);

  const pathname = useLocation().pathname;

  const handleSignup = () => {
    setShow(false);
    setSignup(true);
  };
  return (
    <>
      <Modal
        cross={showCross}
        onClose={() => {
          setShow(false);
          onClose && onClose();
        }}
        show={show}
      >
        <>
          <p className="text-[#696969] text-sm text-center">WELCOME BACK</p>
          <p className="text-white text-base mt-2 text-center">
            Log into your account
          </p>
          <div className="mt-10">
            <InputField
              label="Email or Username"
              placeholder="Enter your email or username"
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              type="password"
              style="mt-4"
            />
            <a href="/home">
              <Button
                text="Login now"
                style="w-full rounded mt-5 py-3 text-white"
                onClick={() => {}}
              />
            </a>
            <p className="mt-3 text-darkGray text-sm">
              Not register yet?{" "}
              <span
                className={`text-white font-light ${
                  pathname === "/" ? "pointer-events-none" : "cursor-pointer"
                }`}
                onClick={handleSignup}
              >
                Register &rarr;
              </span>
            </p>
          </div>
        </>
      </Modal>
      {signUp && <Signup onClose={onClose} />}
    </>
  );
};

export default Login;
