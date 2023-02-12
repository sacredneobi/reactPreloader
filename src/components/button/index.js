import "./style.css";

const Button = (props) => {
  const { caption, ...other } = props;

  return (
    <button className="button" {...other}>
      {caption}
    </button>
  );
};

export { Button };
