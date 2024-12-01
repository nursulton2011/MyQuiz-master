export const Button = ({ text, type, id, ...props }) => {
  return (
    <button type={type} id={id} {...props}>
      {text}
    </button>
  );
};
