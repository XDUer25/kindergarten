"use client";

import Image from "next/image";
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingBadge } from "@/components/Motion";
import { images, stats, trustBadges } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#e8f8ff] pt-28">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white to-transparent" />
      <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-16 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2b93bd] soft-shadow">
            <Sparkles size={16} />
            中科院幼儿园信阳教育实验园
          </p>
          <h1 className="text-[2rem] font-black leading-tight text-[#17323e] sm:text-4xl md:text-5xl">
            罗山县天蓝蓝幼儿园
          </h1>
          <p className="mt-6 max-w-xl text-xl font-semibold leading-9 text-[#395a66] md:text-2xl">
            给孩子一个科学与艺术共生的童年。
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#5c7480]">
            建于2016年，按市级示范园标准设计建设，以爱心、专注、倾听、和谐为园所文化，让孩子在安全、专业、有爱的环境里自然成长。
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-bold text-[#3f6877] soft-shadow">
            <MapPin size={17} className="text-[#d39a00]" />
            河南省罗山县 · 天湖大道欣荣花园西侧
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#admission" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#72c8ee] px-7 py-4 text-base font-bold text-white shadow-lg shadow-sky-200 transition hover:bg-[#43addc]">
              查看招生信息
              <ArrowRight size={18} />
            </a>
            <a href="#environment" className="inline-flex items-center justify-center rounded-full border border-[#bfe9f7] bg-white px-7 py-4 text-base font-bold text-[#286d86] transition hover:bg-[#f4fcff]">
              参观园所环境
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2 rounded-full bg-white/82 px-4 py-2 text-sm font-bold text-[#3f6877]">
                <badge.icon size={16} className="text-[#78bf62]" />
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white p-3 soft-shadow">
            <Image
              src={images.hero}
              alt="罗山县天蓝蓝幼儿园外立面与彩虹跑道"
              fill
              priority
              className="rounded-[1.5rem] object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
          <FloatingBadge className="absolute -right-2 top-8 hidden rounded-2xl bg-[#fff8d8] p-4 text-[#31424a] shadow-xl shadow-yellow-100 md:block">
            <div className="flex items-center gap-2 text-sm font-black">
              <ShieldCheck size={18} />
              透明守护每一天
            </div>
          </FloatingBadge>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
              className="rounded-2xl bg-white/78 p-5 text-center backdrop-blur soft-shadow"
            >
              <p className="text-3xl font-black text-[#209bd0]">{stat.value}</p>
              <p className="mt-1 text-sm font-bold text-[#607984]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
