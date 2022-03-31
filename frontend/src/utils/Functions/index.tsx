export const ToUpperCaseText = (text: string) => {
  return text.toUpperCase();
};

export const GetCurrentYear = () => {
  const now = new Date();

  return now.getFullYear();
};