import { ProductType } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

export function ProductIntroduction() {
  const product: ProductType = {
    name: "Aroma Verde シングルオリジン 200g",
    description:
      "柑橘のようなジューシーな酸味、キャラメルのような甘さ、カカオの余韻。軽やかなボディで、朝にも午後にも寄り添う一杯です。ペーパードリップに最適。",
    roastLevel: "浅中煎り（City-）",
    price: "¥1,680（税込）",
    weight: "200g",
    origin: "グアテマラ / アンティグア",
    tastingNote: [
      "オレンジ、ベルガモット、ミルクチョコレート",
      "クリーンで透明感のある後味",
      "ミディアムボディ、ロングアフター",
    ],
    flavorBalance: [
      { label: "酸味", value: 4 },
      { label: "甘さ", value: 4 },
      { label: "コク", value: 3 },
      { label: "苦味", value: 2 },
      { label: "香り", value: 5 },
    ],
    imagePath: "/product1.jpg",
  };

  return (
    <section id="product" className="py-20 sm:py-28 bg-base-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 商品ビジュアル */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={product.imagePath}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 商品テキストとスペック */}
          <div className="lg:col-span-2">
            <p className="text-sm tracking-widest text-muted-foreground">
              NEW RELEASE
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {product.name}
            </h2>
            <p className="mt-4 text-muted-foreground">{product.description}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-border p-5 bg-card">
                <h3 className="font-semibold">基本情報</h3>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                  <dt className="text-muted-foreground">焙煎度</dt>
                  <dd>{product.roastLevel}</dd>
                  <dt className="text-muted-foreground">内容量</dt>
                  <dd>{product.weight}</dd>
                  <dt className="text-muted-foreground">価格</dt>
                  <dd>{product.price}</dd>
                  <dt className="text-muted-foreground">生産国 / 地域</dt>
                  <dd>{product.origin}</dd>
                </dl>
              </div>

              <div className="rounded-lg border border-border p-5 bg-card">
                <h3 className="font-semibold">テイスティングノート</h3>
                <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5">
                  {product.tastingNote.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* スペック（★表現） */}
            <div className="mt-8">
              <h3 className="font-semibold">フレーバーバランス</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {product.flavorBalance.map((flavor) => (
                  <div
                    key={flavor.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-muted-foreground">
                      {flavor.label}
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={
                            "h-4 w-4 " +
                            (i < flavor.value
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
