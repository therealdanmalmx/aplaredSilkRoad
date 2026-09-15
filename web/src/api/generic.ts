export default async function getOnId<T>(
  id: string,
  endpoint: string,
): Promise<T> {
  const res = await fetch(`/api/v1/${endpoint}/${id}`);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  return res.json();
}
