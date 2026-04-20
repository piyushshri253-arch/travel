const FAQ = () => {
  const faqs = [
    "How much does a Bali honeymoon trip cost?",
    "What is included in a honeymoon package?",
    "Best time to visit?",
  ];

  return (
    <section className="py-12 px-4 md:px-16">
      
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Frequently Asked Questions
      </h2>

      {faqs.map((q, i) => (
        <div key={i} className="border-b py-4">
          <p className="font-medium">{q}</p>
        </div>
      ))}

    </section>
  );
};

export default FAQ;