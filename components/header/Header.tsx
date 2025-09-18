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
    <header className="bg-white/90 fixed top-0 left-0 right-0 z-50">
      <div className="grid grid-cols-3 items-center h-16 mx-12">
        <div>
          <Link
            className="flex items-center space-x-2 text-yellow-700"
            href="#"
          >
            <div>
              <Logo width={20} height={20} />
            </div>
            <div className="font-bold">AROMA VERDE</div>
          </Link>
        </div>

        <div>
          <ul className="hidden md:flex justify-center">
            {navs.map((item) => (
              <li key={item.name} className="inline-block px-4">
                <Link
                  className="text-gray-600 hover:text-gray-900 font-semibold"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-end">
          <div className="dropdown dropdown-end md:hidden">
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
    </header>
  );
}
