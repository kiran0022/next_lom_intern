export async function getAllKyc() {
  const res = await fetch(`${process.env.API_URL}/api/kyc`, {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("Error while fetching kyc data");

  return res.json();
}
