import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white bg-[#0A0A0A]">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {"<"}Akash{"/>"}
          </span>
        </Link>
        <p className="text-slate-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Akash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
