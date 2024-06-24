import { SearchByCategory } from "../Utility_functions/types_project/types";

export async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro: " + response.status);
    const json = await response.json();
    return json;
  } catch (e) {
    return null;
  }
}
