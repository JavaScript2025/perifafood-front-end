const Botao = ({ children, variant = "laranja", className = "", ...props }) => {
  let classes = "";

  if (variant === "laranja") {
    classes =
      "px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#F27E63] to-[#F25E5E] hover:from-[#E86B45] hover:to-[#E44B49] transition-all duration-300 cursor-pointer";
  } else if (variant === "vermelho") {
    classes =
      "px-5 py-3 rounded-full font-semibold text-white bg-red-400 hover:bg-red-700 cursor-pointer";
  } else if (variant === "azul") {
    classes = "px-3 py-2 bg-blue-600 font-semibold text-white rounded-full hover:bg-blue-800 cursor-pointer";
  } else if (variant === "cinza") {
    classes =
      "px-5 py-3 rounded-full text-white font-semibold bg-gray-500 hover:bg-gray-700 transition-all duration-300 cursor-pointer";
  }

  const finalClasses = `${classes} ${className}`;

  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  );
};

export default Botao;
