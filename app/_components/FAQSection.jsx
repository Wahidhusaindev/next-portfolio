import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer full-stack web development services including React.js, Next.js, Node.js, and MERN/MEVN stack development. I specialize in building interactive, scalable, and visually polished user interfaces.",
  },
  {
    question: "How much experience do you have?",
    answer:
      "I have 3.5+ years of real-world experience working with React.js, Next.js, Node.js, MongoDB, Express.js, and Vue.js on production-grade applications.",
  },
  {
    question: "What is your hourly rate?",
    answer:
      "My freelance rate ranges between $25–57/hour depending on project scope, complexity, and timeline. I’m flexible with hourly, fixed, and long-term contracts.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes. I work fully remotely and have experience collaborating with distributed teams across multiple time zones. I’m based in the United Kingdom.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "React.js, Next.js, Node.js, TypeScript, JavaScript, MERN/MEVN stack, Tailwind CSS, ShadCN UI, MongoDB, Express.js, Vue.js, and modern frontend tooling.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "Absolutely. I help maintain, refactor, optimize, and modernize existing applications, including legacy codebases.",
  },
];

export default function FAQSection() {
  return (
    <section
      className="bg-black text-white py-20 px-4 sm:px-6"
      aria-labelledby="faq-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          Frequently Asked <span className="text-indigo-500">Questions</span>
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Get answers to common questions about my services and expertise
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
