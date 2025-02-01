interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 mt-4 bg-yellow-500 text-white rounded-lg shadow-xl
                    ${disabled ? "cursor-not-allowed" : "hover:bg-yellow-600"}`}
    >
      {label}
    </button>
  );
};

export default Button;
