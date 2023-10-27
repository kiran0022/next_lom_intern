export default async function getAllProduct() {
  const res = await fetch(`${process.env.API_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("error while fetching products data");

  return res.json();
}
