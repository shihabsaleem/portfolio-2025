import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 p-8 gap-16 sm:p-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <Link href="/" className="font-display text-2xl">
          Shihab
        </Link>

        <div className="flex items-center gap-6">
          <Link className="hover:text-green-100" href="/about">
            About
          </Link>
          <Link className="hover:text-green-100" href="/">
            Work
          </Link>
          <Link className="hover:text-green-100" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
