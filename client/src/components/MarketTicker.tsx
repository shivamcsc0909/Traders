import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TickerItem {
  symbol: string;
  price: number;
  change: number;
}

export function MarketTicker() {
  const [data, setData] = useState<TickerItem[]>([
    { symbol: "EUR/USD", price: 1.0845, change: 0.12 },
    { symbol: "GBP/USD", price: 1.2630, change: -0.05 },
    { symbol: "USD/JPY", price: 151.20, change: 0.34 },
    { symbol: "BTC/USD", price: 65430.00, change: 1.25 },
    { symbol: "ETH/USD", price: 3450.50, change: 0.85 },
    { symbol: "GOLD", price: 2165.40, change: -0.15 },
    { symbol: "SPX500", price: 5180.25, change: 0.45 },
    { symbol: "NAS100", price: 18100.50, change: 0.65 },
    { symbol: "USD/INR", price: 83.45, change: 0.02 },
    { symbol: "GBP/JPY", price: 191.50, change: 0.18 },
  ]);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          price: item.price * (1 + (Math.random() - 0.5) * 0.0005),
          change: item.change + (Math.random() - 0.5) * 0.05,
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Double the data for seamless looping
  const tickerData = [...data, ...data];

  return (
    <div className="w-full bg-slate-900 py-2 border-b border-slate-800 overflow-hidden relative z-40">
      <div className="flex animate-ticker whitespace-nowrap">
        {tickerData.map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-6 text-sm font-mono">
            <span className="font-bold text-slate-200">{item.symbol}</span>
            <span className="text-slate-400">{item.price.toFixed(item.symbol.includes("JPY") || item.symbol === "USD/INR" ? 2 : 4)}</span>
            <span
              className={cn(
                "flex items-center gap-0.5 text-xs font-medium",
                item.change >= 0 ? "text-green-400" : "text-red-400"
              )}
            >
              {item.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {Math.abs(item.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
