import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  MenuIcon,
  SearchIcon,
  UsersIcon,
  Briefcase,
  MessagesSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
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

      <div className="flex-1 ml-3">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 max-w-96">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            placeholder="search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div className="flex items-center space-x-4 px-6">
        <Link href="/" className="icon">
          <MenuIcon className="h-5" />
          <p>Name</p>
        </Link>
        <Link href="/" className="icon hidden md:flex">
          <UsersIcon className="h-5" />
          <p>Network</p>
        </Link>
        <Link href="/" className="icon hidden md:flex">
          <Briefcase className="h-5" />
          <p>Jobs</p>
        </Link>

        <Link href="/" className="icon">
          <MessagesSquare className="h-5" />
          <p>Messaging</p>
        </Link>

        {/* User button */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Sign in button if not signed in */}
        <SignedOut>
          <Button
            asChild
            variant="outline"
            className="bg-blue-600 text-white font-bold"
          >
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}
export default Header;
