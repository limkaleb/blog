import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="hover:underline">
            <h1 className="text-2xl font-medium">Soli Deo Gloria</h1>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}
