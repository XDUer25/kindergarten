import Image from "next/image";
import { GraduationCap, Heart, MessageCircleHeart } from "lucide-react";
import { MotionSection } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/lib/site-data";

const teacherPoints = [
  {
    title: "持证上岗",
    text: "每班两教一保，用规范流程守护一日生活。",
    icon: GraduationCap
  },
  {
    title: "懂得倾听",
    text: "关注孩子行为背后的情绪需求与表达方式。",
    icon: MessageCircleHeart
  },
  {
    title: "有爱有边界",
    text: "在冲突中引导换位思考，在探索中适时放手。",
    icon: Heart
  }
];

export function Teachers() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Teachers"
          title="用专业守护童心，用爱心陪伴成长"
          desc="教师不仅照看孩子，更理解孩子。她们知道何时靠近、何时等待，让每一次互动都成为成长的机会。"
        />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionSection className="relative overflow-hidden rounded-[1.5rem] bg-[#e8f8ff] p-3 soft-shadow">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem]">
              <Image src={images.honorWall} alt="罗山县天蓝蓝幼儿园家园认可与荣誉墙" fill className="object-cover" sizes="(min-width: 1024px) 52vw, 100vw" />
            </div>
          </MotionSection>
          <div className="grid content-center gap-5">
            {teacherPoints.map((item, index) => (
              <MotionSection key={item.title} delay={index * 0.08} className="rounded-2xl bg-[#fbfdff] p-6">
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#fff8d8] text-[#d39a00]">
                    <item.icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-[#1f3440]">{item.title}</h3>
                    <p className="mt-2 text-base leading-8 text-[#607984]">{item.text}</p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
