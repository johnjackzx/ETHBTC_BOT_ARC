export async function GET() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eth&days=30"
  );

  const data = await res.json();

  return Response.json(data.prices);
}
