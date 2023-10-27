export async function getAllShipping() {
  const res = await fetch(`${process.env.API_URL}/api/shipping`, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Error while fetching shipping data");

  return res.json();
}
