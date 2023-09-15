import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Menu } from "./Menu";
import { useCallback, useState } from "react";
import { MenuIcon } from "@/components/icons/MenuiIcon";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      className={`${roboto.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}
    >
      <Link href="/">
        <Image src="/favicon.ico" width={80} height={80} alt="Icone Letra" />
      </Link>
      <button className="p-1 md:hidden" onClick={openMenu}>
        <MenuIcon className="fill-white w-10 h-10" />
      </button>
      <nav className="hidden md:flex items-center gap-10 text-md px-4">
        <Link href="/"> Sobre Min </Link>
        {/* <Link href="/portifolio"> Portfolio </Link> */}
        <Link href="/contatos"> Entre em Contato </Link>
      </nav>
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};
