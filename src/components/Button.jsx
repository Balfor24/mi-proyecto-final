const Button = ({ variant, style, children }) => {
  return (
    <>
      {variant === "primary" && (
        <button
          style={style}
          className="bg-primary hover:bg-on-sobre rounded-[24px] text-on-primary flex items-center justify-center px-[24px] py-[8px] font-bold"
        >
          {children}
        </button>
      )}

      {variant === "secondary" && (
        <button
          style={style}
          className="bg-transparent hover:border-on-sobre hover:text-on-sobre rounded-[24px] border-[1.5px] border-primary text-primary flex items-center justify-center px-[24px] py-[8px] font-bold"
        >
          {children}
        </button>
      )}

      {variant === "tertiary" && (
        <button
          style={style}
          className="bg-transparent hover:border-on-sobre hover:text-on-sobre w-[208px] rounded-[24px] border-[1.5px] border-primary text-primary flex items-center justify-center px-[4px] py-[8px]"
        >
          {children}
        </button>
      )}

      {variant === "cuaternario" && (
        <button
          style={style}
          className="bg-on-primary hover:bg-on-sobre hover:text-surface w-[208px] rounded-[24px]  text-on-surface flex items-center justify-center px-[40px] py-[12px] text-[20px] font-semibold"
        >
          {children}
        </button>
      )}

    </>
  );
};

export default Button;
