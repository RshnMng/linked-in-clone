import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
//
//
function Header() {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      <Image
        className="rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
        width={70}
        height={70}
        alt="image"
      />

      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 max-w-96">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            placeholder="search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div>
        <Link href="/" className="icon">
          <MenuIcon className="h-5" />
        </Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
      </div>
    </div>
  );
}
export default Header;
