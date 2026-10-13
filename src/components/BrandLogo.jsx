import Link from "next/link";

export default function BrandLogo({ className = "", imgClassName = "h-[40px] sm:h-[46px]" }) {
  return (
    <Link href="/" className={`inline-flex items-center group flex-shrink-0 ${className}`}>
      <div className="bg-transparent px-2 py-1 flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.03]">
        <img
          src="/images/logo-imag.png"
          alt="Qardh Al Hasan Fintech Sdn. Bhd."
          className={`${imgClassName} w-auto object-contain block`}
        />
      </div>
    </Link>
  );
}

