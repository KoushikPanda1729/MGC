"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@t2p-admin/ui/components/accordion";
import { brico } from "./fonts";
import { useAction } from "@/hooks/useAction";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};

const defaultFaqs = [
  {
    id: "faq-1",
    question: "What is Manobikash Guide Centre?",
    answer:
      "Manobikash GUIDE Centre, established in <strong class='text-foreground font-bold'>2014</strong>, is a trusted educational institute in Medinipur offering school tuition, spoken English training, skill development classes, and career guidance for students of all levels.",
  },
  {
    id: "faq-2",
    question: "What services do you offer?",
    answer:
      "We offer <strong class='text-foreground font-bold'>school academic tuition</strong>, <strong class='text-foreground font-bold'>Spoken English classes</strong>, <strong class='text-foreground font-bold'>skill-building programs</strong>, <strong class='text-foreground font-bold'>interview preparation</strong>, <strong class='text-foreground font-bold'>career counselling</strong>, and other learning support designed to help students grow academically and personally.",
  },
  {
    id: "faq-3",
    question: "Who can join your programs?",
    answer:
      "Our programs are open for <strong class='text-foreground font-bold'>school students, college students, job seekers, and anyone</strong> who wants to improve academically or enhance communication and personality development skills.",
  },
  {
    id: "faq-4",
    question: "What makes Manobikash Guide Centre unique?",
    answer:
      "We focus on <strong class='text-foreground font-bold'>personalized attention</strong>, <strong class='text-foreground font-bold'>experienced teachers</strong>, <strong class='text-foreground font-bold'>small batch sizes</strong>, and a <strong class='text-foreground font-bold'>supportive learning environment</strong> that helps every student strengthen fundamentals and gain confidence.",
  },
  {
    id: "faq-5",
    question: "Do you provide online and offline classes?",
    answer:
      "<strong class='text-foreground font-bold'>Yes</strong>. We provide both <strong class='text-foreground font-bold'>online</strong> and <strong class='text-foreground font-bold'>offline</strong> learning modes, allowing students to choose the option that fits their schedule and learning style.",
  },
  {
    id: "faq-6",
    question: "What is your teaching methodology?",
    answer:
      "Our teaching method focuses on <strong class='text-foreground font-bold'>concept clarity</strong>, <strong class='text-foreground font-bold'>regular assessments</strong>, <strong class='text-foreground font-bold'>practical learning</strong>, and <strong class='text-foreground font-bold'>interactive teaching</strong> to help students excel in both academics and communication.",
  },
  {
    id: "faq-7",
    question: "Do you provide certificates?",
    answer:
      "<strong class='text-foreground font-bold'>Yes</strong>. Students receive certificates for specific training programs such as Spoken English, Personality Development, and other skill-based courses.",
  },
  {
    id: "faq-8",
    question: "How can I get more information or enroll?",
    answer:
      "You can visit our <strong class='text-foreground font-bold'>Manobikash Guide Centre</strong> branch, contact us directly, or reach us through <strong class='text-foreground font-bold'>email</strong> for enrollment details, batch timings, and admissions.",
  },
];

export default function FaqSection() {
  const { faqs, fetchFaqs } = useAction();

  React.useEffect(() => {
    const abort = new AbortController();
    void fetchFaqs({ signal: abort.signal });
    return () => abort.abort();
  }, [fetchFaqs]);

  const accordionItems = React.useMemo(() => {
    // Use backend FAQs if available, otherwise use default FAQs
    const faqsToUse = faqs && faqs.length > 0 ? faqs : defaultFaqs;
    return faqsToUse.map((f) => ({
      id: f.id,
      title: f.question?.trim() || "Untitled FAQ",
      content: f.answer?.trim() || "",
    }));
  }, [faqs]);

  return (
    <section id="faqs" className="relative py-20 md:py-28 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Enhanced Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            className={cn(
              "mb-6 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl",
              brico.className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about Manobikash Guide Centre and how
            our academic and skill-development programs help students grow with
            expert guidance.
          </motion.p>
        </div>

        {/* Enhanced FAQ Accordion */}
        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* FAQ List */}
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue={accordionItems[0]?.id}
          >
            {accordionItems.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id}
                  className={cn(
                    "overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm shadow-md transition-all duration-300",
                    "data-[state=open]:shadow-xl data-[state=open]:border-primary/30 data-[state=open]:bg-gradient-to-br data-[state=open]:from-card data-[state=open]:to-card/80"
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      "group flex flex-1 items-center justify-between gap-4 px-6 py-5 text-left text-base md:text-lg font-semibold",
                      "outline-none transition-all duration-300 hover:text-primary hover:no-underline",
                      "focus-visible:ring-2 focus-visible:ring-primary/50",
                      "data-[state=open]:text-primary data-[state=open]:no-underline"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 text-sm font-bold text-primary group-data-[state=open]:from-primary group-data-[state=open]:to-purple-600 group-data-[state=open]:text-white transition-all duration-300">
                        {index + 1}
                      </span>
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      "overflow-hidden px-6 pb-5 pt-0 text-muted-foreground text-sm md:text-base leading-relaxed",
                      "data-[state=open]:animate-accordion-down",
                      "data-[state=closed]:animate-accordion-up"
                    )}
                  >
                    <div
                      className="pt-3 pl-11"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
