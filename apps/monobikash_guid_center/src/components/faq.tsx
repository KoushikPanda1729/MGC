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
    question: "What is Bunni Education Service Pvt Ltd?",
    answer:
      "Manobikash GUIDE Centre , established in <strong class='text-black'>2018</strong>, is an EdTech company focused on improving English communication and soft skills through its brands — <strong class='text-black'>Young Guru Academy</strong> and <strong class='text-black'>Talk2Partners</strong>.",
  },
  {
    id: "faq-2",
    question: "What are your main brands and services?",
    answer:
      "Our main brands are <strong class='text-black'>Young Guru Academy</strong> and <strong class='text-black'>Talk2Partners</strong>.\n\nWe offer <strong class='text-black'>Spoken English training</strong>, <strong class='text-black'>Soft Skills programs</strong>, <strong class='text-black'>Interview Preparation</strong>, <strong class='text-black'>Career Counselling , Seminars, Webinars</strong> , and other learning opportunities for learners of all backgrounds.",
  },
  {
    id: "faq-3",
    question: "Who can join your programs?",
    answer:
      "Anyone —  <strong class='text-black'> students, job seekers, professionals, or corporate employees </strong> — who wants to improve their English speaking , confidence, and communication skills can join our programs.",
  },
  {
    id: "faq-4",
    question: "What makes Bunni Education Service unique?",
    answer:
      "We combine <strong class='text-black'>real conversation practice</strong>, <strong class='text-black'>personalized guidance</strong>, and <strong class='text-black'>modern technology</strong> to make English learning <strong class='text-black'>easy</strong>, <strong class='text-black'>practical</strong>, and <strong class='text-black'>affordable</strong> for everyone.",
  },
  {
    id: "faq-5",
    question: "Do you provide online and offline classes?",
    answer:
      "<strong class='text-black'>Yes</strong>. We offer both <strong class='text-black'>online</strong> and <strong class='text-black'>offline</strong> learning options.\n\nLearners can study from anywhere using the <strong class='text-black'>Talk2Partners App</strong> or attend <strong class='text-black'>offline</strong> sessions at selected centers.",
  },
  {
    id: "faq-6",
    question: "What is your teaching methodology?",
    answer:
      "Our approach blends <strong class='text-black'>interactive learning</strong>, <strong class='text-black'>real-life speaking practice</strong>, <strong class='text-black'>short video lessons</strong>, and <strong class='text-black'>one-to-one guidance</strong> to help learners build fluency and confidence effectively.",
  },
  {
    id: "faq-7",
    question: "Do you provide certificates?",
    answer:
      "<strong class='text-black'>Yes</strong>. Participants receive a <strong class='text-black'>Certificate of Participation</strong> at the time of the competition as a recognition of their effort and performance.",
  },
  {
    id: "faq-8",
    question: "How can I get more information or enroll?",
    answer:
      "You can visit our <strong class='text-black'>official website</strong>, download the <strong class='text-black'>Talk2Partners App</strong>, or contact us at <strong class='text-black'>info@bunnieducation.com</strong> for more details about enrollment and upcoming programs.",
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
            Everything you need to know about Bunni Education Service Pvt Ltd
            and how to transform your skills through flexible online courses
            with expert guidance.
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
