const fontGenerator = (size: number, weight: number, letterSpace: number) =>
  `
  font-size: ${size}px;
  font-weight: ${weight};
  letter-spacing: ${(size/100)*letterSpace}px;
`;

// bold = 700 , semi-bold = 600 , medium = 500 , reqular = 400

export const font = {
  heading1: fontGenerator(64,700,-1.5),
  heading2: fontGenerator(56,600,-0.5),
  heading3: fontGenerator(48,600,0),
  heading4: fontGenerator(32,600,0.25),
  heading5: fontGenerator(32,600,0),
  heading6: fontGenerator(20,600,0.15),
  
  subTitle1: fontGenerator(20,600,0.15),
  subTitle2: fontGenerator(18,600,0.15),
  subTitle3: fontGenerator(14,600,0.1),

  body1: fontGenerator(18,400,0.15),
  body2: fontGenerator(16,400,0.15),

  caption: fontGenerator(16,400,0.15),
  label: fontGenerator(16,500,0.15)
} as const;

export type fontKeyOfType = keyof typeof font;
