import { SocialLink } from "@/types";
import Link from "next/link";

export default function FooterSection() {
  // SNSリンクのダミーデータ
  const socialLinks: SocialLink[] = [
    {
      platform: "Instagram",
      url: "https://instagram.com/aromatic_beans",
      icon: "📷",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/aromatic_beans",
      icon: "🐦",
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/aromatic.beans",
      icon: "📘",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white">
      {/* メインフッターコンテンツ */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* ブランド情報 */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-orange-300 mb-4">
                AROMATIC BEANS
              </h3>
              <p className="text-amber-100 leading-relaxed max-w-md">
                世界各地から厳選したコーヒー豆を、 職人の手で丁寧に焙煎。
                特別な一杯で、あなたの毎日に新しい香りと味わいを。
              </p>
            </div>

            {/* お問い合わせ情報 */}
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-orange-300">
                お問い合わせ
              </h4>
              <div className="space-y-2 text-amber-100">
                <div className="flex items-center gap-3">
                  <span>📞</span>
                  <span>0120-123-456</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  <span>info@aromatic-beans.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>🕒</span>
                  <span>平日 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* ナビゲーションリンク */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-300">サイトマップ</h4>
            <nav className="space-y-3">
              <Link
                href="#hero"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                ホーム
              </Link>
              <Link
                href="#story"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                ブランドストーリー
              </Link>
              <Link
                href="#products"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                商品紹介
              </Link>
              <Link
                href="#reviews"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                お客様の声
              </Link>
              <Link
                href="#purchase"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                購入方法
              </Link>
            </nav>
          </div>

          {/* サポート・その他 */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-300">サポート</h4>
            <nav className="space-y-3">
              <Link
                href="/faq"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                よくあるご質問
              </Link>
              <Link
                href="/shipping"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                配送について
              </Link>
              <Link
                href="/returns"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                返品・交換
              </Link>
              <Link
                href="/privacy"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="block text-amber-100 hover:text-orange-300 transition-colors duration-200"
              >
                利用規約
              </Link>
            </nav>
          </div>
        </div>

        {/* SNSリンク */}
        <div className="mt-12 pt-8 border-t border-amber-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-lg font-bold text-orange-300 mb-4">
                フォローしてください
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.url}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="text-amber-100">{social.platform}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ニュースレター登録 */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold text-orange-300 mb-4">
                最新情報をお届け
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-amber-600 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200">
                  登録
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* コピーライト */}
      <div className="bg-amber-950 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-amber-300">
            <p className="text-sm">
              &copy; 2024 AROMATIC BEANS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="hover:text-orange-300 transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="hover:text-orange-300 transition-colors"
              >
                利用規約
              </Link>
              <Link
                href="/company"
                className="hover:text-orange-300 transition-colors"
              >
                運営会社
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
