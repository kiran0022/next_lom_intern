export default async function getAllProduct() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("error while fetching products data");

  return res.json();
}
