
import { useContext } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LanguageContext } from "@/contexts/LanguageContext";
import GlassCard from "./ui/GlassCard";

const FAQSection = () => {
  const { t } = useContext(LanguageContext);
  
  const faqItems = [
    {
      question: t("faq_q1"),
      answer: t("faq_a1")
    },
    {
      question: t("faq_q2"),
      answer: t("faq_a2")
    },
    {
      question: t("faq_q3"),
      answer: t("faq_a3")
    },
    {
      question: t("faq_q4"),
      answer: t("faq_a4")
    },
    {
      question: t("faq_q5"),
      answer: t("faq_a5")
    },
    {
      question: t("faq_q6"),
      answer: t("faq_a6")
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 md:px-10 max-w-7xl mx-auto reveal-animation">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t("faq_title")}</h2>
        <p className="text-white/70 max-w-2xl mx-auto">{t("faq_subtitle")}</p>
      </div>

      <GlassCard 
        className="max-w-4xl mx-auto p-6 md:p-8"
        glowOnHover
        neonColor="purple"
      >
        <Accordion type="single" collapsible className="w-full divide-y divide-white/10">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="py-2 border-none">
              <AccordionTrigger className="text-white text-lg font-medium hover:text-yassin-neon-purple hover:no-underline transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </GlassCard>
    </section>
  );
};

export default FAQSection;
