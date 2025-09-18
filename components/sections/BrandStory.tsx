import Image from "next/image";

export function BrandStory() {
  return (
    <section id="story" className="relative py-20 sm:py-28 bg-base-200">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* イメージ写真 */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-border">
          <Image
            src="/brand-story.jpg"
            alt="Coffee farm and beans"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* テキスト領域 */}
        <div>
          <p className="text-sm tracking-widest text-muted-foreground">
            OUR STORY
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            産地からカップまで、透明な旅路
          </h2>
          <p className="mt-5 text-base/7 text-muted-foreground">
            私たちのコーヒーは、中米の標高1,800mの小規模農園で育てられています。手摘みで完熟チェリーのみを収穫し、丁寧なウォッシュド精製で雑味を排し、浅中煎りで香りを最大限に引き出しました。フェアな価格での直接取引により、農園の持続可能な運営と品質向上を支えています。
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="rounded-md border border-border p-3">
              ・標高1,800mのシングルオリジン
            </li>
            <li className="rounded-md border border-border p-3">
              ・手摘み収穫 / ウォッシュド精製
            </li>
            <li className="rounded-md border border-border p-3">
              ・浅中煎りで香りと甘さを両立
            </li>
            <li className="rounded-md border border-border p-3">
              ・サステナブル / ダイレクトトレード
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
