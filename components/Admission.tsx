import { Baby, Gift, Timer } from "lucide-react";
import { MotionSection } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { admission, schedule } from "@/lib/site-data";

const ageGroups = [
  { name: "托班（小小班）", range: "2023.9.1 - 2024.8.31" },
  { name: "小班", range: "2022.9.1 - 2023.8.31" },
  { name: "中班", range: "2021.9.1 - 2022.8.31" },
  { name: "大班（幼小衔接）", range: "2020.9.1 - 2021.8.31" }
];

export function Admission() {
  return (
    <section id="admission" className="bg-[#fff8d8] py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Enrollment"
          title="2026年秋季入园招生信息"
          desc="九年初心不改，十年品质如一。年龄段、收费标准、入离园时间与新生礼包一目了然，方便家长快速了解。"
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <MotionSection className="rounded-[1.5rem] bg-white p-6 soft-shadow">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e8f8ff] text-[#209bd0]">
                <Baby size={23} />
              </span>
              <h3 className="text-2xl font-black text-[#1f3440]">入园年龄段</h3>
            </div>
            <div className="grid gap-3">
              {ageGroups.map((item) => (
                <div key={item.name} className="grid gap-2 rounded-xl bg-[#fbfdff] p-4 md:grid-cols-[170px_1fr]">
                  <p className="font-bold text-[#4d6c78]">{item.name}</p>
                  <p className="font-black leading-7 text-[#1f3440]">{item.range}</p>
                </div>
              ))}
            </div>
          </MotionSection>

          <MotionSection delay={0.08} className="rounded-[1.5rem] bg-white p-6 soft-shadow">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#fff8d8] text-[#d39a00]">
                <Gift size={23} />
              </span>
              <h3 className="text-2xl font-black text-[#1f3440]">收费与新生礼包</h3>
            </div>
            <div className="grid gap-3">
              {admission.map((item) => (
                <div key={item.label} className="grid gap-2 rounded-xl bg-[#fbfdff] p-4 md:grid-cols-[120px_1fr]">
                  <p className="font-bold text-[#4d6c78]">{item.label}</p>
                  <p className="font-black leading-7 text-[#1f3440]">{item.value}</p>
                </div>
              ))}
            </div>
          </MotionSection>
        </div>

        <MotionSection delay={0.12} className="mt-6 rounded-[1.5rem] bg-[#72c8ee] p-6 text-white soft-shadow">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/22">
              <Timer size={23} />
            </span>
            <h3 className="text-2xl font-black">园所时间</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {schedule.map((item) => (
              <div key={item.label} className="rounded-xl bg-white/16 p-4 backdrop-blur">
                <p className="font-bold">{item.label}</p>
                <p className="mt-2 font-black">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl bg-white/18 p-4 text-sm font-semibold leading-7">
            户外活动不少于两个小时，三餐两点贯穿一日生活，帮助孩子建立稳定、有秩序的作息节奏。
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
