import Image from "next/image";
import { images, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#17323e] py-10 text-white">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="relative h-14 w-14 overflow-hidden rounded-full bg-white">
            <Image src={images.logo} alt="罗山县天蓝蓝幼儿园园徽" fill className="object-cover" sizes="56px" />
          </span>
          <div>
            <p className="text-xl font-black">罗山县天蓝蓝幼儿园</p>
            <p className="mt-1 text-sm text-white/68">科学与艺术共生的童年</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/72">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-white/12 pt-6 text-sm text-white/56">
        © 2026 罗山县天蓝蓝幼儿园有限公司. All rights reserved.
      </div>
    </footer>
  );
}
