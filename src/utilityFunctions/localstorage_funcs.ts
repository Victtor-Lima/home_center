export function setLocal(name: string, data: Array<object>) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocal(name: string) {
  const data = JSON.parse(localStorage.getItem(name) || '""');
  return data ? data : null;
}
