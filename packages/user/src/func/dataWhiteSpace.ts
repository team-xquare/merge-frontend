export const dataWhiteSpace = (data: any) => {
  const values = Object.values(data);
  return values.every((element) => element !== '');
};
