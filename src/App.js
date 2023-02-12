import { useCallback } from "react";
import { Box, Button, Img } from "./components";

function App() {
  const handleOnLink = useCallback((event) => {
    window.open("https://sacredapp.us/root");
    event.stopPropagation();
  }, []);

  return (
    <Box display justifyContent alignItems height="100%" width="100%">
      <Box name="header" display flexDirection alignItems gap="20px">
        <Img src="./logo.png" alt="logo" width={192} height={192} />
        <Button
          caption={`Проект управления магазином, магазин в телеграмм\n\nlogin: admin, password: admin`}
          onClick={handleOnLink}
          style={{ textAlign: "center" }}
        />
      </Box>
    </Box>
  );
}

export default App;
