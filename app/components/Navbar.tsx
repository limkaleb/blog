import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start gap-2">
            <Link href="https://limkaleb.github.io" className="hover:underline">
              <h1 className="text-xl font-medium">Home</h1>
            </Link>
            <Link href="/" className="hover:underline">
              <h1 className="text-xl font-medium">Blog</h1>
            </Link>
          </div>
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}
