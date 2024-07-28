import eye from "../../assets/eye.png";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  style?: string;
}

const InputField = ({
  label,
  placeholder,
  type = "text",
  style,
}: InputFieldProps) => {
  const isPassword = type === "password";

  return (
    <div className={`relative ${style}`}>
      <div
        className={`text-gray-300 text-xs flex ${
          isPassword ? "justify-between" : ""
        }`}
      >
        <p>{label}</p>
        {isPassword && <p>Forgot password?</p>}
      </div>
      <input
        className="p-3 rounded-md w-full bg-transparent border border-gray-700 mt-2 text-sm"
        type={type}
        placeholder={placeholder}
      />
      {isPassword && (
        <img src={eye} className="absolute top-[34px] right-3 text-white" />
      )}
    </div>
  );
};

export default InputField;
