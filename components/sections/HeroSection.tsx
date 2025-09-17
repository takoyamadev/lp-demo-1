import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden scroll-mt-16"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* テキストコンテンツ */}
          <div className="space-y-8 transition-all duration-1000">
            {/* ブランドロゴ */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-amber-900 leading-tight">
                AROMATIC
                <span className="block text-4xl lg:text-5xl font-light text-amber-700">
                  BEANS
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600"></div>
            </div>

            {/* キャッチコピー */}
            <div className="space-y-4">
              <p className="text-2xl lg:text-3xl font-light text-amber-800 leading-relaxed">
                朝を変える一杯、
                <br />
                <span className="font-medium">新しい香り。</span>
              </p>
              <p className="text-lg text-amber-700 max-w-md leading-relaxed">
                厳選された産地から直輸入。職人の手で丁寧に焙煎された、特別なコーヒー豆をお届けします。
              </p>
            </div>

            {/* CTAボタン */}
            <div className="space-y-4">
              <Link
                href="#purchase"
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                今すぐ購入する
              </Link>
              <p className="text-sm text-amber-600">送料無料・30日間返品保証</p>
            </div>
          </div>

          {/* 商品イメージ */}
          <div className="relative transition-all duration-1000 delay-300">
            <div className="relative">
              {/* メインコーヒー画像 */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AROMATIC BEANS コーヒー豆"
                  className="w-full h-80 object-cover rounded-2xl"
                  fill
                />
              </div>

              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                NEW
              </div>

              {/* 浮遊するコーヒー豆アイコン */}
              <div className="absolute -bottom-6 -left-6 bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white text-2xl">☕</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
