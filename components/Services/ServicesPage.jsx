"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import ServiceCard from "./ServiceCard";

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const services = [
    {
      number: "01",
      category: isArabic ? "تطوير" : "BUILD",
      title: isArabic ? "تطوير البرمجيات" : "Software Development",
      description: isArabic
        ? "نحوّل متطلباتك إلى برامج سريعة وموثوقة، بكود منظم وقابل للتطوير لينمو مع أعمالك."
        : "We turn your requirements into fast, reliable software, built clean and ready to grow with your business.",
      tags: isArabic
        ? [
            "تطبيقات الويب",
            "تطبيقات سطح المكتب",
            "تطبيقات الموبايل",
            "واجهات البرمجة والخلفية",
            "صفحات الهبوط",
            "مواقع الشركات",
            "مواقع الأعمال الشخصية",
            "حلول ويب مخصصة",
            "تصميم متجاوب",
          ]
        : [
            "Web Apps",
            "Desktop Apps",
            "Mobile Apps",
            "APIs & Backend",
            "Landing Pages",
            "Business Websites",
            "Portfolio Websites",
            "Custom Web Solutions",
            "Responsive Design",
          ],
      features: isArabic
        ? [
            "أداء سريع وآمن وقابل للتوسع",
            "كود منظم وموثق يسهل صيانته",
            "يعمل على الويب وسطح المكتب والموبايل",
            "اختبار شامل وتسليم جاهز للإطلاق",
          ]
        : [
            "Fast, secure, and scalable by design",
            "Clean, documented code you can maintain",
            "Works across web, desktop, and mobile",
            "Tested, launch-ready delivery",
          ],
      cta: isArabic ? "ناقش معنا الخدمة" : "Discuss this service",
      image: "/Images/dev-img.jpeg",
    },
    {
      number: "02",
      category: isArabic ? "الجودة" : "QUALITY",
      title: isArabic
        ? "اختبار البرمجيات وضمان الجودة"
        : "Software Testing & QA",
      description: isArabic
        ? "اكتشف الأخطاء قبل أن يواجهها المستخدمون، من خلال اختبار دقيق وتقارير واضحة."
        : "Find bugs before your users do, with clear documentation.",
      tags: isArabic
        ? [
            "الاختبار اليدوي",
            "الاختبار الآلي",
            "اختبار واجهات API",
            "اختبار قواعد البيانات",
            "الاختبار الوظيفي",
            "حلول ويب مخصصة",
          ]
        : [
            "Manual Testing",
            "Automation Testing",
            "API Testing",
            "Database Testing",
            "Functional Testing",
            "Custom Web Solutions",
          ],
      features: isArabic
        ? [
            "تقارير أخطاء تفصيلية بخطوات واضحة لإعادة إنتاجها",
            "تغطية للاختبارات اليدوية والآلية",
            "واجهات برمجية موثوقة وبيانات دقيقة",
            "إصدار موثوق بعد مراجعة الجودة النهائية",
          ]
        : [
            "Detailed bug reports with clear steps to reproduce",
            "Manual and automated test coverage",
            "Reliable APIs and accurate data",
            "A release you can trust, with a final QA sign-off",
          ],
      cta: isArabic ? "اكتشف الخدمة" : "Explore service",
      image: "/Images/test-img.jpeg",
    },
    {
      number: "03",
      category: isArabic ? "الإطلاق" : "LAUNCH",
      title: isArabic ? "من الفكرة إلى الإطلاق" : "From Idea to Launch",
      description: isArabic
        ? "لديك فكرة ولكن لا تعرف من أين تبدأ؟ نساعدك على تطويرها والتخطيط لها وتنفيذها حتى تصبح منتجًا جاهزًا للإطلاق والاستخدام."
        : "Got an idea but not sure where to start? We help you shape it, plan it, and build it until it’s live and ready for real users.",
      tags: isArabic
        ? [
            "دراسة وتقييم الفكرة",
            "تخطيط المنتج",
            "تصميم النماذج الأولية",
            "تطوير النسخة الأولية MVP",
            "دعم الإطلاق",
          ]
        : [
            "Idea Validation",
            "Product Planning",
            "UI/UX Prototyping",
            "MVP Development",
            "Launch Support",
          ],
      features: isArabic
        ? [
            "فكرة مدروسة وخطة عمل واضحة",
            "نموذج أولي ونسخة MVP قابلة للعرض على المستخدمين",
            "توجيه تقني في كل مرحلة",
            "دعم الإطلاق لتحويل فكرتك إلى منتج حقيقي",
          ]
        : [
            "A validated idea with a clear roadmap",
            "Prototype and MVP you can show to users",
            "Technical guidance at every stage",
            "Launch support, so your idea goes live",
          ],
      cta: isArabic ? "اكتشف الخدمة" : "Explore service",
      image: "/Images/idea-img.jpeg",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      dir={isArabic ? "rtl" : "ltr"}
      className="services-page relative text-white"
    >
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 top-0 z-50 h-[5px] w-full origin-left bg-gradient-to-r from-[#006B80] via-[#00A6BD] to-[#00D5E8] shadow-[0_0_10px_rgba(0,229,255,0.25)]"
      />

      {/* Services */}
      {services.map((service, index) => (
        <ServiceCard
          key={service.number}
          service={service}
          index={index}
          isArabic={isArabic}
        />
      ))}
    </section>
  );
}
