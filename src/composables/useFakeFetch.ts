const delay = (delay: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), delay));

export default delay;
