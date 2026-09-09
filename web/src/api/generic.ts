export default async function getOnId<T>(
  id: string,
  endpoint: string,
): Promise<T> {
  const res = await fetch(`http://localhost:3000/${endpoint}/${id}`);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  return res.json();
}
