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
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

const defaultFaqs = [
  {
    id: "faq-1",
    question: "What is Manobikash Guide Centre?",
    answer:
      "Manobikash GUIDE Centre, established in <strong class='text-black'>2018</strong>, is a trusted educational institute in Medinipur offering school tuition, spoken English training, skill development classes, and career guidance for students of all levels.",
  },
  {
    id: "faq-2",
    question: "What services do you offer?",
    answer:
      "We offer <strong class='text-black'>school academic tuition</strong>, <strong class='text-black'>Spoken English classes</strong>, <strong class='text-black'>skill-building programs</strong>, <strong class='text-black'>interview preparation</strong>, <strong class='text-black'>career counselling</strong>, and other learning support designed to help students grow academically and personally.",
  },
  {
    id: "faq-3",
    question: "Who can join your programs?",
    answer:
      "Our programs are open for <strong class='text-black'>school students, college students, job seekers, and anyone</strong> who wants to improve academically or enhance communication and personality development skills.",
  },
  {
    id: "faq-4",
    question: "What makes Manobikash Guide Centre unique?",
    answer:
      "We focus on <strong class='text-black'>personalized attention</strong>, <strong class='text-black'>experienced teachers</strong>, <strong class='text-black'>small batch sizes</strong>, and a <strong class='text-black'>supportive learning environment</strong> that helps every student strengthen fundamentals and gain confidence.",
  },
  {
    id: "faq-5",
    question: "Do you provide online and offline classes?",
    answer:
      "<strong class='text-black'>Yes</strong>. We provide both <strong class='text-black'>online</strong> and <strong class='text-black'>offline</strong> learning modes, allowing students to choose the option that fits their schedule and learning style.",
  },
  {
    id: "faq-6",
    question: "What is your teaching methodology?",
    answer:
      "Our teaching method focuses on <strong class='text-black'>concept clarity</strong>, <strong class='text-black'>regular assessments</strong>, <strong class='text-black'>practical learning</strong>, and <strong class='text-black'>interactive teaching</strong> to help students excel in both academics and communication.",
  },
  {
    id: "faq-7",
    question: "Do you provide certificates?",
    answer:
      "<strong class='text-black'>Yes</strong>. Students receive certificates for specific training programs such as Spoken English, Personality Development, and other skill-based courses.",
  },
  {
    id: "faq-8",
    question: "How can I get more information or enroll?",
    answer:
      "You can visit our <strong class='text-black'>Manobikash Guide Centre</strong> branch, contact us directly, or reach us through <strong class='text-black'>email</strong> for enrollment details, batch timings, and admissions.",
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
    // If there's an error, also fall back to default FAQs
    const faqsToUse = faqs && faqs.length > 0 ? faqs : defaultFaqs;
    return faqsToUse.map((f) => ({
      id: f.id,
      title: f.question?.trim() || "Untitled FAQ",
      content: f.answer?.trim() || "",
    }));
  }, [faqs]);

  // Always show FAQs (default or from API), never show error or loading states

  return (
    <section id="faqs" className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <motion.h2
            className={cn(
              "mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 md:text-5xl",
              brico.className
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about Manobikash Guide Centre and how
            our academic and skill-development programs help students grow with
            expert guidance.
          </motion.p>
        </div>

        {/* Body */}
        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute -left-4 -top-4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-4 -right-4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          {/* FAQ List - Always show (using default FAQs if API fails) */}
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-xl border border-border/40 bg-card/30 p-2 backdrop-blur-sm"
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
                    "my-1 overflow-hidden rounded-lg border-none bg-card/50 px-2 shadow-sm transition-all",
                    "data-[state=open]:bg-card/80 data-[state=open]:shadow-md"
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      "group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium",
                      "outline-none transition-all duration-300 hover:text-primary hover:no-underline",
                      "focus-visible:ring-2 focus-visible:ring-primary/50",
                      "data-[state=open]:text-primary data-[state=open]:no-underline"
                    )}
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      "overflow-hidden pb-4 pt-0 text-muted-foreground whitespace-pre-line",
                      "data-[state=open]:animate-accordion-down",
                      "data-[state=closed]:animate-accordion-up"
                    )}
                  >
                    <div
                      className="pt-3"
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
