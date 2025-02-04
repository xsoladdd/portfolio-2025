export const joinClass = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
