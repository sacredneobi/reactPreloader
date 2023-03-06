import { useCallback } from "react";
import { Box, Button, Img, Loading, useWaitFonts } from "./components";

function App() {
  const loading = useWaitFonts([
    "Material Symbols Rounded",
    "Material Symbols Outlined",
    "Material Symbols Sharp",
  ]);

  const handleOnLink = useCallback((event) => {
    window.open("https://sacredapp.us/root?from=github");
    event.stopPropagation();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box display justifyContent alignItems height="100%" width="100%">
      <Box name="header" display flexDirection alignItems gap="20px">
        <Img src="./logo.png" alt="logo" width={192} height={192} />

        <Button
          caption={`Проект: https://sacredapp.us/root управления магазином\n\nlogin: admin, password: admin\n\nДемо бот: https://t.me/SACRED_SOFT_bot`}
          onClick={handleOnLink}
          style={{ textAlign: "center" }}
        />
      </Box>
    </Box>
  );
}

export default App;
