import { useEffect, useState } from "react";

const useWaitFonts = (fontNames, allFonts = false) => {
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState([]);
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const fullLoad = done.filter((item) => item.isLoading);
    if (fullLoad.length === done.length && done.length > 0) {
      setLoading(false);
    }
  }, [done]);

  useEffect(() => {
    if (allFonts) {
      const listFonts = {};
      document.fonts.forEach((item) => {
        listFonts[item.family] = "1";
      });
      const needReload = Object.keys(listFonts).filter(
        (item) => !fonts.includes(item)
      );

      console.log(needReload);

      if (needReload.length > 0) {
        setDone(needReload.map((item) => ({ isLoading: false, name: item })));
        setFonts(needReload.map((item) => item));
      }
    } else if (Array.isArray(fontNames) && fontNames.length > 0) {
      const needReload = fontNames.filter((item) => !fonts.includes(item));

      if (needReload.length > 0) {
        setDone(needReload.map((item) => ({ isLoading: false, name: item })));
        setFonts(needReload.map((item) => item));
      }
    } else {
      setLoading(false);
    }
  }, [fontNames, fonts, allFonts]);

  useEffect(() => {
    const loadFont = (font, item) => {
      font
        .load()
        .then((font) => {
          console.log(
            `%c[FONT loaded] %c${font.family} `,
            "color: green",
            "color : #bada55"
          );
          setDone((prev) => {
            const find = prev.find((findItem) => findItem.name === item);
            if (find) {
              find.isLoading = true;
            }
            return [...prev];
          });
        })
        .catch((font) => {
          console.log(
            `%c[FONT error] %c${font.family} `,
            "color: red",
            "color : #bada55"
          );
          setDone((prev) => {
            const find = prev.find((findItem) => findItem.name === item);
            if (find) {
              find.isLoading = true;
            }
            return [...prev];
          });
        });
    };

    document.fonts.ready.then((data) => {
      fonts.forEach((item) => {
        document.fonts.forEach((font) => {
          if (font.family === item) {
            loadFont(font, item);
          }
        });
      });
    });
  }, [fonts, allFonts]);

  return loading;
};

export { useWaitFonts };
