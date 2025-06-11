const Contact = () => {
  return (
    <section id="contact" className="py-8 font-serif">
      <h2 className="text-xl font-bold mb-4 font-sans">Contact</h2>
      <a href="mailto:wayjaywang@gmail.com" className="block mb-2 hover:underline">
        wayjaywang@gmail.com
      </a>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/wayjaywang/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact; 