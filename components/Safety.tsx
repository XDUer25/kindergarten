import { CheckCircle2, ClipboardCheck, ShieldCheck, Sparkles, Utensils } from "lucide-react";
import { MotionSection } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { safeguards } from "@/lib/site-data";

const icons = [ShieldCheck, Utensils, Sparkles, ClipboardCheck];

export function Safety() {
  return (
    <section className="bg-[#e8f8ff] py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Care"
          title="把安全、营养与卫生做在每天的细节里"
          desc="三餐两点、恒温环境、卫生消毒和透明管理共同构成家长放心的托付基础。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {safeguards.map((item, index) => {
            const Icon = icons[index] ?? CheckCircle2;

            return (
              <MotionSection
                key={item.title}
                delay={index * 0.06}
                className="relative overflow-hidden rounded-[1.5rem] bg-white p-6 soft-shadow"
              >
                <span className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#e8f8ff]" />
                <span className="absolute bottom-5 right-6 h-4 w-4 rounded-full bg-[#ffe58a]" />
                <div className="relative flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#fff8d8] text-[#d39a00]">
                    <Icon size={23} />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-[#1f3440]">{item.title}</h3>
                    <p className="mt-2 text-base leading-8 text-[#607984]">{item.text}</p>
                  </div>
                </div>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
