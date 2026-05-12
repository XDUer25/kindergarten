"use client";

import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { images, navItems } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/86 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d8f2cf] bg-white">
            <Image src={images.logo} alt="罗山县天蓝蓝幼儿园园徽" fill className="object-cover" sizes="48px" priority />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-bold text-[#2d8c4c] md:text-xl">
              罗山县天蓝蓝幼儿园
            </span>
            <span className="block text-xs font-semibold text-[#6fa7bd]">
              TIANLANLAN KINDERGARTEN
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-[#35525d] transition hover:text-[#209bd0]">
              {item.label}
            </a>
          ))}
        </div>

        <a href="tel:18336253113" className="hidden items-center gap-2 rounded-full bg-[#ffe58a] px-5 py-3 text-sm font-bold text-[#31424a] transition hover:bg-[#ffd95c] md:flex">
          <Phone size={17} />
          预约咨询
        </a>

        <button
          type="button"
          aria-label={open ? "关闭导航" : "打开导航"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full bg-[#e8f8ff] text-[#1f3440] lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#e6f4f8] bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-[#35525d] hover:bg-[#e8f8ff]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
