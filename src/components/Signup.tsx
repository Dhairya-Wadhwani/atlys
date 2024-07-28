import Modal from "./atoms/Modal";
import InputField from "./atoms/InputField";
import Button from "./atoms/Button";
import { useState } from "react";
import Login from "./Login";

interface SignupProps {
  onClose?: () => void;
}

const Signup = ({ onClose }: SignupProps) => {
  const [showLogin, setShowLogin] = useState(false);
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShowLogin(true);
    setShow(false);
  };

  return (
    <>
      <Modal
        cross={true}
        onClose={() => {
          setShow(false);
          onClose && onClose();
        }}
        show={show}
      >
        <>
          <p className="text-[#696969] text-sm text-center">SIGN UP</p>
          <p className="text-white text-base mt-2 text-center">
            Create an account to continue
          </p>
          <div className="mt-10">
            <InputField label="Email" placeholder="Enter your email" />
            <InputField
              label="Username"
              placeholder="Choose a preferred username"
              style="mt-4"
            />
            <InputField
              label="Password"
              placeholder="Choose a strong password"
              type="password"
              style="mt-4"
            />

            <Button
              text="Continue"
              style="w-full rounded mt-5 py-3 text-white"
              onClick={() => {
                setShow(false);
                onClose && onClose();
              }}
            />

            <p className="mt-3 text-darkGray text-sm">
              Already have an account?{" "}
              <span
                className="text-white font-light cursor-pointer"
                onClick={handleClose}
              >
                Login &rarr;
              </span>
            </p>
          </div>
        </>
      </Modal>
      {showLogin && <Login showCross={true} onClose={onClose} />}
    </>
  );
};

export default Signup;
