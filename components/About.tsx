import { MotionSection } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { features, values } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Tianlanlan"
          title="以爱与专业，陪伴孩子看见更大的世界"
          desc="罗山县天蓝蓝幼儿园有限公司建于2016年，2018年开园，持续将中科院幼儿园的课程理念、三餐两点、区角活动与户外活动体系融入日常。"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {features.map((feature, index) => (
            <MotionSection key={feature.title} delay={index * 0.08} className="rounded-2xl border border-[#e3f4fa] bg-[#fbfdff] p-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#fff8d8] text-[#d39a00]">
                <feature.icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-black text-[#1f3440]">{feature.title}</h3>
              <p className="mt-3 text-base leading-8 text-[#607984]">{feature.desc}</p>
            </MotionSection>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {values.map((value, index) => (
            <MotionSection key={value.title} delay={index * 0.06} className="rounded-2xl bg-[#e8f8ff] p-6 text-center">
              <h3 className="text-2xl font-black text-[#209bd0]">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#58737e]">{value.text}</p>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
