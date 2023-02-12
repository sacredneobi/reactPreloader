import { useState } from "react";
import { Box } from "../box";
import { Loading } from "../loading";

const Img = (props) => {
  const { width, height, style, alt, ...other } = props;

  const [loading, setLoading] = useState(true);

  return (
    <>
      <img
        onLoad={() => {
          setLoading(false);
        }}
        style={{ width, height, ...style, display: loading ? "none" : null }}
        alt={alt}
        {...other}
      />
      {loading ? (
        <Box display alignItems justifyContent width={width} height={height}>
          <Loading />
        </Box>
      ) : null}
    </>
  );
};

export { Img };
