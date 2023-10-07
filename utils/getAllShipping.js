export async function getAllShipping() {
  const res = await fetch("http://localhost:3000/api/shipping", {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("error while fetching shipping data");

  return res.json();
}
