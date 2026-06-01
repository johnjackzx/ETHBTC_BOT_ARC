"use client";

import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function PriceChart() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart = createChart(ref.current, {
      width: 800,
      height: 400,
    });

    const lineSeries = chart.addLineSeries();

    fetch("/api/chart")
      .then((r) => r.json())
      .then((prices) => {
        const formatted = prices.map(
          ([timestamp, price]: [number, number]) => ({
            time: Math.floor(timestamp / 1000),
            value: price,
          })
        );

        lineSeries.setData(formatted);
      });

    return () => chart.remove();
  }, []);

  return <div ref={ref} />;
}
