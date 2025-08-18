import chroma from "chroma-js";

export const generatePalette = (harmony = "random", names = []) => {
  const baseColor = chroma.random().hex();

  let colors = [];

  switch (harmony) {
    case "complementary":
      colors = [
        baseColor,
        chroma(baseColor).set("hsl.h", "+180").hex()
      ];
      break;

    case "analogous":
      colors = chroma
        .scale([
          chroma(baseColor).set("hsl.h", "-30"),
          baseColor,
          chroma(baseColor).set("hsl.h", "+30")
        ])
        .colors(5);
      break;

    case "triadic":
      colors = [
        baseColor,
        chroma(baseColor).set("hsl.h", "+120").hex(),
        chroma(baseColor).set("hsl.h", "-120").hex()
      ];
      break;

    case "monochromatic":
      colors = chroma
        .scale([baseColor, "#fff"])
        .mode("lab")
        .colors(5);
      break;

    default: // random
      colors = Array.from({ length: 5 }, () => chroma.random().hex());
  }

  return colors.map((hex, i) => ({
    id: i,
    name: names[i] || `Color-${i}`,
    hex
  }));
};
