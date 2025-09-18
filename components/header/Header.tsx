import { NavItem } from "@/components/header/Header.type";
import { Logo } from "@/components/logo/Logo";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  const navs: NavItem[] = [
    { name: "ストーリー", href: "#story" },
    { name: "商品紹介", href: "#product" },
    { name: "お客様の声", href: "#reviews" },
  ];

  return (
    <div className="flex h-16 navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="flex-none">
        <Link className="flex items-center space-x-2 text-orange-400" href="#">
          <div>
            <Logo width={40} height={40} />
          </div>
          <div>Cofee Bliss</div>
        </Link>
      </div>

      {/* PCサイズで表示 */}
      <div className="flex-1 flex justify-center">
        <ul className="hidden md:block">
          {navs.map((item) => (
            <li key={item.name} className="inline-block px-4">
              <Link
                className="text-gray-600 hover:text-gray-900"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <Menu tabIndex={0} role="button" className="m-1 cursor-pointer" />
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {navs.map((item) => (
              <li key={item.name} className="inline-block px-4">
                <Link
                  className="text-gray-600 hover:text-gray-900"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
