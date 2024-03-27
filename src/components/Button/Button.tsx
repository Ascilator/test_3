type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      className={`px-5 py-3 border border-cyan-500 bg-cyan-500 rounded-xl text-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
