export async function getAllKyc() {
  const res = await fetch("http://localhost:3000/api/kyc", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Error while fetching kyc data");

  return res.json();
}
