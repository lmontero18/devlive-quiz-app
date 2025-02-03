interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-white">
        Enter your name
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-white p-2 border rounded-xl focus:outline-none bg-transparent"
      />
    </div>
  );
};

export default InputField;
