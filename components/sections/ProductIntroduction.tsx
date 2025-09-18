import { Spec } from "@/types";
import { Star } from "lucide-react";

export function ProductIntroduction() {
  const specs: Spec[] = [
    { label: "酸味", value: 4 },
    { label: "甘さ", value: 4 },
    { label: "コク", value: 3 },
    { label: "苦味", value: 2 },
    { label: "香り", value: 5 },
  ];

  return (
    <section id="product" className="py-20 sm:py-28 bg-base-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 商品ビジュアル */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden ring-1 ring-border bg-[url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
          </div>

          {/* 商品テキストとスペック */}
          <div className="lg:col-span-2">
            <p className="text-sm tracking-widest text-muted-foreground">
              NEW RELEASE
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Aroma Verde シングルオリジン 200g
            </h2>
            <p className="mt-4 text-muted-foreground">
              柑橘のようなジューシーな酸味、キャラメルのような甘さ、カカオの余韻。軽やかなボディで、朝にも午後にも寄り添う一杯です。ペーパードリップに最適。
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-border p-5 bg-card">
                <h3 className="font-semibold">基本情報</h3>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                  <dt className="text-muted-foreground">焙煎度</dt>
                  <dd>浅中煎り（City-）</dd>
                  <dt className="text-muted-foreground">内容量</dt>
                  <dd>200g</dd>
                  <dt className="text-muted-foreground">価格</dt>
                  <dd>¥1,680（税込）</dd>
                  <dt className="text-muted-foreground">生産国 / 地域</dt>
                  <dd>グアテマラ / アンティグア</dd>
                </dl>
              </div>

              <div className="rounded-lg border border-border p-5 bg-card">
                <h3 className="font-semibold">テイスティングノート</h3>
                <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5">
                  <li>オレンジ、ベルガモット、ミルクチョコレート</li>
                  <li>クリーンで透明感のある後味</li>
                  <li>ミディアムボディ、ロングアフター</li>
                </ul>
              </div>
            </div>

            {/* スペック（★表現） */}
            <div className="mt-8">
              <h3 className="font-semibold">フレーバーバランス</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-muted-foreground">
                      {s.label}
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={
                            "h-4 w-4 " +
                            (i < s.value
                              ? "fill-primary text-primary"
                              : "text-muted-foreground")
                          }
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
