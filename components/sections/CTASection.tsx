import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="purchase"
      className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-orange-300 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* メインメッセージ */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              特別な朝を
              <br />
              <span className="text-yellow-200">今すぐ始めませんか？</span>
            </h2>

            <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              厳選されたコーヒー豆で、
              <br />
              あなたの毎日に新しい香りと味わいを。
            </p>

            {/* 特典情報 */}
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-yellow-200">
                🎉 新発売記念キャンペーン
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-3xl">🚚</div>
                  <div className="font-semibold">送料無料</div>
                  <div className="text-sm opacity-90">全国どこでも</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">🔄</div>
                  <div className="font-semibold">30日間返品保証</div>
                  <div className="text-sm opacity-90">
                    満足できなければ全額返金
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">💎</div>
                  <div className="font-semibold">初回限定20%OFF</div>
                  <div className="text-sm opacity-90">今だけの特別価格</div>
                </div>
              </div>
            </div>

            {/* CTA ボタン */}
            <div className="space-y-6">
              <Link
                href="https://example.com/store"
                className="inline-block bg-white text-orange-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                公式オンラインストアで購入
              </Link>

              <p className="text-lg font-light opacity-90">または</p>

              <Link
                href="https://example.com/subscription"
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-12 py-5 rounded-full font-bold text-xl hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                定期購入で更にお得に
              </Link>
            </div>

            {/* 価格情報 */}
            <div className="space-y-4 pt-8">
              <div className="text-3xl font-bold">
                <span className="line-through opacity-60">¥3,500</span>
                <span className="ml-4 text-yellow-200">¥2,800</span>
              </div>
              <p className="text-lg opacity-90">200g入り・送料込み・税込価格</p>
            </div>

            {/* 信頼要素 */}
            <div className="pt-8 border-t border-white/30">
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span>SSL暗号化通信</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💳</span>
                  <span>各種決済対応</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>カスタマーサポート対応</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
