import { Review } from "@/types";

export default function ReviewsSection() {
  // ダミーレビューデータ
  const reviews: Review[] = [
    {
      id: "1",
      customerName: "田中 美樹",
      rating: 5,
      comment:
        "香りがとても上品で、毎朝のコーヒータイムが特別な時間になりました。酸味と甘味のバランスが絶妙で、フルーティーな後味が印象的です。",
      purchaseDate: "2024年3月15日",
    },
    {
      id: "2",
      customerName: "佐藤 健一",
      rating: 5,
      comment:
        "コーヒー好きの妻へのプレゼントで購入しましたが、とても喜んでくれました。普段飲んでいるコーヒーとは全く違う上質な味わいで、私も一緒に楽しんでいます。",
      purchaseDate: "2024年3月10日",
    },
    {
      id: "3",
      customerName: "山田 さくら",
      rating: 4,
      comment:
        "在宅ワークのお供として購入。集中力が高まる香りで、仕事の効率も上がった気がします。パッケージもおしゃれで、友人にもおすすめしています。",
      purchaseDate: "2024年3月8日",
    },
  ];

  // 星評価コンポーネント
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-amber-50 to-white scroll-mt-16"
    >
      <div className="container mx-auto px-6">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Customer Reviews
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-800 leading-relaxed max-w-2xl mx-auto">
            お客様からいただいた嬉しいお声をご紹介
          </p>
        </div>

        {/* 総合評価 */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl font-bold text-amber-600 mb-2">4.9</div>
            <div className="flex justify-center mb-4">
              <StarRating rating={5} />
            </div>
            <p className="text-amber-800 text-lg">248件のレビューより</p>
            <p className="text-amber-600 text-sm mt-2">満足度98％</p>
          </div>
        </div>

        {/* レビュー一覧 */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === 1 ? "md:scale-105" : ""
              }`}
            >
              {/* レビューヘッダー */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-bold text-amber-900">
                    {review.customerName}
                  </h4>
                  <p className="text-sm text-amber-600">
                    {review.purchaseDate}
                  </p>
                </div>
                <div className="text-right">
                  <StarRating rating={review.rating} />
                </div>
              </div>

              {/* レビューコメント */}
              <blockquote className="text-amber-800 leading-relaxed">
                {review.comment}
              </blockquote>

              {/* 認証マーク */}
              <div className="mt-6 pt-4 border-t border-amber-100">
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <span>✓</span>
                  <span>認証済み購入者</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* レビュー統計 */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-amber-900 text-center mb-8">
              評価の詳細
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[5, 4, 3, 2, 1].map((star) => {
                const percentage =
                  star === 5 ? 85 : star === 4 ? 13 : star === 3 ? 2 : 0;
                return (
                  <div key={star} className="text-center">
                    <div className="flex justify-center mb-2">
                      <StarRating rating={star} />
                    </div>
                    <div className="h-2 bg-white rounded-full mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-amber-700 font-medium">
                      {percentage}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* レビュー投稿促進 */}
        <div className="text-center mt-12">
          <p className="text-amber-800 text-lg mb-4">
            あなたのご感想もお聞かせください
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
            レビューを投稿する
          </button>
        </div>
      </div>
    </section>
  );
}
