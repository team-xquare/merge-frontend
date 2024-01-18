const fontGenerator = (size: number, weight: number, letterSpace: number) =>
  `
  font-size: ${size}px;
  font-weight: ${weight};
  letter-spacing: ${(size/100)*letterSpace}px;
`;

// bold = 700 , semi-bold = 600 , medium = 500 , reqular = 400

export const font = {
  heading1: fontGenerator(64,700,-1.5),
  heading2: fontGenerator(,,),
  heading3: fontGenerator(,,),
  heading4: fontGenerator(,,),
  heading5: fontGenerator(,,),
  heading6: fontGenerator(,,),
  
  subTitle1: fontGenerator(,,),
  subTitle2: fontGenerator(,,),
  subTitle3: fontGenerator(,,),

  body1: fontGenerator(,,);
  body2: fontGenerator(,,);

  caption: fontGenerator(,,);
  label: fontGenerator(,,);
} as const;

export type fontKeyOfType = keyof typeof font;
