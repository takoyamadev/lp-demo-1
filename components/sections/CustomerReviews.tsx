import { ReviewType } from "@/types";
import Link from "next/link";

export function CustomerReviews() {
  const reviews: ReviewType[] = [
    {
      id: 1,
      name: "Mika / 30代",
      comment:
        "朝の一杯が楽しみになりました。柑橘の香りがふわっと広がって、後味がとてもクリーン。",
    },
    {
      id: 2,
      name: "Ken / 20代",
      comment:
        "浅煎りが苦手でしたが、これは甘さとのバランスがよくて飲みやすい。毎日ドリップしています。",
    },
    {
      id: 3,
      name: "Sara / 40代",
      comment:
        "ミルクとの相性も抜群。休日のラテに使っています。香りが長く続くのが好きです。",
    },
    {
      id: 4,
      name: "Yuto / 30代",
      comment:
        "フルーティーなコーヒーが好きで色々試していますが、これは特に気に入りました。リピートします。",
    },
    {
      id: 5,
      name: "Aki / 50代",
      comment:
        "コーヒー通の友人に勧められて購入。期待以上の美味しさで驚きました。香り高くて上品な味わいです。",
    },
    {
      id: 6,
      name: "Hana / 20代",
      comment:
        "初めてのシングルオリジンでしたが、飲みやすくて気に入りました。朝の目覚めにぴったりです。",
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-base-200">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">お客様の声</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-lg border border-border p-6 bg-card"
            >
              <div className="text-sm text-muted-foreground">
                “{review.comment}”
              </div>
              <div className="mt-4 text-sm font-medium">{review.name}</div>
            </div>
          ))}
        </div>

        {/* CTA セクション */}
        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <p className="text-lg font-medium">気になったら、まずは一袋から。</p>
          <p className="mt-2 text-muted-foreground">
            オンラインストアで全国配送。最短翌営業日出荷。
          </p>
          <div className="mt-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium text-primary-foreground shadow hover:opacity-90 transition"
            >
              公式オンラインストアで購入
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
