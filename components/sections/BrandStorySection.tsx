import Image from "next/image";

export function BrandStorySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-amber-100 leading-relaxed">
              コーヒーへの情熱から生まれた、新しいブランド
            </p>
          </div>

          {/* ストーリーコンテンツ */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">
                こだわりの産地直輸入
              </h3>
              <p className="text-lg leading-relaxed text-amber-50">
                私たちは世界各地のコーヒー農園を直接訪問し、
                最高品質の豆だけを厳選しています。
                エチオピアの高地、グアテマラの火山性土壌、
                ブラジルの豊かな大地から生まれる、
                それぞれ異なる個性を持つコーヒー豆。
              </p>
              <p className="text-lg leading-relaxed text-amber-50">
                農園主との直接的な関係を大切にし、
                フェアトレードを通じて持続可能な
                コーヒー文化の発展に貢献しています。
              </p>
            </div>

            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/4226463/pexels-photo-4226463.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="コーヒー農園"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* 焙煎へのこだわり */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="https://images.pexels.com/photos/3992206/pexels-photo-3992206.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="焙煎工程"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent rounded-2xl"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">
                職人による丁寧な焙煎
              </h3>
              <p className="text-lg leading-relaxed text-amber-50">
                20年以上の経験を持つマスターロースターが、
                一つ一つの豆の特性を見極めながら、 最適な焙煎度を追求します。
              </p>
              <p className="text-lg leading-relaxed text-amber-50">
                小ロット焙煎により、いつも新鮮な状態で
                お客様にお届け。香り高く、深い味わいの
                コーヒーをご堪能いただけます。
              </p>
            </div>
          </div>

          {/* 数値で見るこだわり */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
              <div className="text-lg text-amber-100">提携農園数</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold text-orange-400 mb-2">20</div>
              <div className="text-lg text-amber-100">焙煎経験年数</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold text-orange-400 mb-2">
                100%
              </div>
              <div className="text-lg text-amber-100">フェアトレード</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
