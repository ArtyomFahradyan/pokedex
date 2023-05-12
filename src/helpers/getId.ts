const getId = (url: string) => {
  const split = url.split("/");

  return split[split.length - 2];
};

export default getId;
