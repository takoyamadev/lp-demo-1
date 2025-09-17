import { Product } from "@/types";

export default function ProductSection() {
  // ダミー商品データ
  const product: Product = {
    id: "1",
    name: "エチオピア イルガチェフェ",
    description:
      "花のような香りとフルーティーな酸味が特徴的な、エチオピア高地産の最高級コーヒー豆",
    price: 2800,
    roastLevel: 3,
    taste: {
      acidity: 4,
      bitterness: 2,
      sweetness: 4,
      body: 3,
    },
    origin: "エチオピア・イルガチェフェ地域",
    imageUrl:
      "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  // 星評価コンポーネント
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? "text-orange-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-6">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Featured Product
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-800 leading-relaxed max-w-2xl mx-auto">
            新発売の特別なコーヒー豆をご紹介します
          </p>
        </div>

        {/* 商品詳細 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* 商品画像 */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
                NEW ARRIVAL
              </div>
            </div>

            {/* 商品情報 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
                  {product.name}
                </h3>
                <p className="text-lg text-amber-800 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-orange-600">
                    ¥{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-amber-600">/200g</span>
                </div>
              </div>

              {/* 産地情報 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-amber-900 mb-3">
                  産地情報
                </h4>
                <p className="text-amber-800">
                  <span className="font-semibold">原産地：</span>
                  {product.origin}
                </p>
                <p className="text-amber-800 mt-2">
                  <span className="font-semibold">焙煎度：</span>
                  ミディアムロースト（焙煎度 {product.roastLevel}/5）
                </p>
              </div>
            </div>
          </div>

          {/* 味の特徴チャート */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16">
            <h4 className="text-2xl font-bold text-amber-900 text-center mb-8">
              味の特徴
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-lg font-semibold text-amber-900 mb-3">
                  酸味
                </div>
                <StarRating rating={product.taste.acidity} />
                <div className="text-sm text-amber-600 mt-2">フルーティー</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-amber-900 mb-3">
                  苦味
                </div>
                <StarRating rating={product.taste.bitterness} />
                <div className="text-sm text-amber-600 mt-2">マイルド</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-amber-900 mb-3">
                  甘味
                </div>
                <StarRating rating={product.taste.sweetness} />
                <div className="text-sm text-amber-600 mt-2">ナチュラル</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-amber-900 mb-3">
                  コク
                </div>
                <StarRating rating={product.taste.body} />
                <div className="text-sm text-amber-600 mt-2">ミディアム</div>
              </div>
            </div>
          </div>

          {/* おすすめの淹れ方 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">☕</div>
              <h5 className="text-xl font-bold text-amber-900 mb-3">
                ドリップコーヒー
              </h5>
              <p className="text-amber-800 text-sm leading-relaxed">
                15g の豆に対して250ml
                のお湯（90-95℃）で丁寧に抽出。花のような香りを楽しめます。
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">🫖</div>
              <h5 className="text-xl font-bold text-amber-900 mb-3">
                フレンチプレス
              </h5>
              <p className="text-amber-800 text-sm leading-relaxed">
                4分間じっくり抽出することで、豆本来の甘味とコクを存分に味わえます。
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">🧊</div>
              <h5 className="text-xl font-bold text-amber-900 mb-3">
                アイスコーヒー
              </h5>
              <p className="text-amber-800 text-sm leading-relaxed">
                濃い目に抽出してから氷で急冷。フルーティーな酸味が際立つすっきりとした味わい。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
