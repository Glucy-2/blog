async function loadFont(
  font: string,
  text: string,
  weight: number
): Promise<ArrayBuffer> {
  const API = `https://fonts.bunny.net/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;

  const css = await (
    await fetch(API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resources = Array.from(
    css.matchAll(
      /url\(([^)]+)\)\s*format\('(woff2|woff|opentype|truetype)'\)/g
    )
  );

  if (!resources.length) throw new Error("Failed to download dynamic font");

  const preferredFormats = ["truetype", "opentype", "woff", "woff2"];
  const resource = preferredFormats
    .map(format => resources.find(match => match[2] === format))
    .find(Boolean);

  if (!resource?.[1]) throw new Error("Failed to download dynamic font");

  const resourceUrl = resource[1].replace(/^['"]|['"]$/g, "");
  const res = await fetch(resourceUrl);

  if (!res.ok) {
    throw new Error("Failed to download dynamic font. Status: " + res.status);
  }

  return res.arrayBuffer();
}

async function loadFonts(
  text: string
): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>
> {
  const fontsConfig = [
    {
      name: "Noto Sans SC",
      font: "Noto+Sans+SC",
      weight: 400,
      style: "normal",
    },
    {
      name: "Noto Sans SC",
      font: "Noto+Sans+SC",
      weight: 700,
      style: "bold",
    },
  ];

  const fonts = await Promise.all(
    fontsConfig.map(async ({ name, font, weight, style }) => {
      const data = await loadFont(font, text, weight);
      return { name, data, weight, style };
    })
  );

  return fonts;
}

export default loadFonts;
