export const fetcherGetJson = (url: string) =>
  fetch(url).then((res) => res.json());
