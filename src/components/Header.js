import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/*Top Nav */}
      <div className="flex items-center bg-amazon_blue flex-grow py-2">
        <div className="mt-2 flex items-center px-4 flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={113}
            height={50}
            style={{ objectFit: "contain" }}
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-11 p-2" />
        </div>

        {/* Right */}
        <div className="flex items-center text-xs text-white space-x-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer link"
          >
            <p className="ml-14">
              {session ? ` Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className=" ml-14 font-bold md:text-sm">Account & Lists</p>
          </div>
        </div>

        <div className="flex items-center text-xs text-white space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center cursor-pointer link"
          >
            <span className="absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Cart</p>
          </div>
        </div>
      </div>

      {/*Bot Nav */}
      <div className="flex items-center space-x-7 p-2 pl-2 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Clinic</p>
        <p className="link">Customer Service</p>
        <p className="link">Best Sellers</p>
        <p className="link">Amazon Basics</p>
        <p className="link">Today's Deals</p>
        <p className="link">Prime</p>
        <p className="link">New Releases</p>
        <p className="link">Music</p>
        <p className="link">Books</p>
        <p className="link">Registry</p>
        <p className="link">Gift Cards</p>
        <p className="link">Fashion</p>
        <p className="link">Amazon Home</p>
        <p className="link">Toys & Games</p>
        <p className="link">Pharmacy</p>
        <p className="link">Sell</p>
        <p className="link">Coupons</p>
        <p className="link">Computers</p>
        <p className="link">Video Games</p>
        <p className="link">Automotive</p>
      </div>
    </header>
  );
}
