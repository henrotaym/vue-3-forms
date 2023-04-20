const fakeFetch = <R>(resolved: R, delay: number) =>
  new Promise<R>((resolve) => setTimeout(() => resolve(resolved), delay));

export default fakeFetch;
