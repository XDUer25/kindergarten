import Image from "next/image";
import { MotionSection } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { environments } from "@/lib/site-data";

export function Environment() {
  return (
    <section id="environment" className="bg-[#f8fcff] py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Campus"
          title="看得见的安全感，也看得见童年的鲜活"
          desc="从彩虹跑道到主题走廊，从明亮教室到多功能活动厅，每一处空间都服务于孩子的探索、表达与互动。"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {environments.map((item, index) => (
            <MotionSection key={item.title} delay={index * 0.06} className="group overflow-hidden rounded-[1.35rem] bg-white soft-shadow">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-[#1f3440]">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-[#607984]">{item.desc}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
