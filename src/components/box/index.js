const defStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const Box = (props) => {
  const { style, children, ...other } = props;
  const newStyle = {};

  Object.keys(other).forEach((item) => {
    if (typeof other[item] === "boolean") {
      newStyle[item] = defStyle[item];
    } else {
      newStyle[item] = other[item];
    }
  });

  return <div style={{ ...newStyle, ...style }}>{children}</div>;
};

export { Box };
