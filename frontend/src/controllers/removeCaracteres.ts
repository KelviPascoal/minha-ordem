export const removeCaracters = (text: string) => {
  const text1 = text.split("-").join("");
  const text2 = text1.split("(").join("");
  const text3 = text2.split(")").join("");
  const text4 = text3.split(" ").join("");
  return text4;
};
