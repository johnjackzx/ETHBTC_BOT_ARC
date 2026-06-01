import PriceChart from "@/components/PriceChart";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        ETH/BTC Dashboard
      </h1>

      <PriceChart />
    </main>
  );
}
