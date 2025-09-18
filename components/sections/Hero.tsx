import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* ヒーロー画像 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Fresh roasted coffee beans background"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center text-white">
          {/* ブランドロゴ（テキストロゴ） */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <span className="text-sm tracking-widest">AROMA VERDE</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            朝を変える一杯、新しい香り。
          </h1>
          <p className="mt-6 text-base/7 sm:text-lg/8 text-white/90">
            高地で育ったシングルオリジン。丁寧な浅中煎りで、柑橘の明るい酸味と
            カカオの余韻が心地よく広がります。サステナブルな栽培とフェアな取引で、
            あなたの毎日をやさしく満たすコーヒーです。
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="https://example.com/store"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:opacity-90 transition"
            >
              今すぐ購入する
            </Link>
            <Link
              href="#story"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-medium text-white ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              こだわりを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
