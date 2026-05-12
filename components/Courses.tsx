import Image from "next/image";
import { MotionSection } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { courses, images } from "@/lib/site-data";

export function Courses() {
  return (
    <section id="courses" className="bg-white py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Curriculum"
          title="八大特色课程，打开成长的不同维度"
          desc="让健康、语言、社会、科学、艺术五大领域课程自然渗透在游戏与生活中，让兴趣成为最好的老师。"
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((course, index) => (
              <MotionSection
                key={course.name}
                delay={index * 0.04}
                className={`relative overflow-hidden rounded-2xl border border-white bg-gradient-to-br ${course.bg} p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100`}
              >
                <span className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/52" />
                <span className="absolute bottom-4 right-5 h-3 w-3 rounded-full bg-[#ffe58a]" />
                <span className={`relative grid h-11 w-11 place-items-center rounded-full ${course.iconBg}`}>
                  <course.icon size={21} />
                </span>
                <h3 className="relative mt-4 text-lg font-black text-[#1f3440]">{course.name}</h3>
              </MotionSection>
            ))}
          </div>
          <MotionSection className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-[#e8f8ff] p-3 soft-shadow">
            <div className="relative h-full min-h-[396px] overflow-hidden rounded-[1.1rem] bg-white">
              <Image
                src={images.steamKits}
                alt="幼儿园益智科学课程材料"
                fill
                className="object-contain p-6 [transform:rotate(90deg)_scale(1.38)]"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
