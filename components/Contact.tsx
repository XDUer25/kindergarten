import Image from "next/image";
import { MapPin, PhoneCall } from "lucide-react";
import { MotionSection } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { contacts, images } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="欢迎预约入园参观"
          desc="如果您正在为孩子选择一所安全、专业、有温度的幼儿园，欢迎来天蓝蓝实地看看。"
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionSection className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#e8f8ff] via-white to-[#fff8d8] p-7 soft-shadow">
            <span className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#72c8ee]/18" />
            <span className="absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-[#ffe58a]/35" />
            <div className="relative grid gap-4">
              {contacts.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/88 p-5 backdrop-blur">
                  <p className="text-sm font-bold text-[#6b818b]">{item.label}</p>
                  <p className="mt-2 text-xl font-black text-[#1f3440]">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
              <a href="tel:18336253113" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#72c8ee] px-5 py-4 font-black text-white transition hover:bg-[#43addc]">
                <PhoneCall size={18} />
                拨打赵园长
              </a>
              <a href="tel:19713020958" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffe58a] px-5 py-4 font-black text-[#31424a] transition hover:bg-[#ffd95c]">
                <PhoneCall size={18} />
                拨打黄园长
              </a>
            </div>
          </MotionSection>

          <MotionSection delay={0.08} className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] soft-shadow">
            <Image src={images.building} alt="罗山县天蓝蓝幼儿园外围与彩虹跑道" fill className="object-cover" sizes="(min-width: 1024px) 56vw, 100vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17323e]/78 to-transparent p-7 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 text-sm font-bold backdrop-blur">
                <MapPin size={16} />
                天湖大道欣荣花园西侧
              </p>
              <h3 className="mt-4 text-3xl font-black">预约来园参观</h3>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
