import educationData from './education.json';

const Education = () => {
  return (
    <section id="education" className="py-8 font-serif">
      <h2 className="text-2xl font-bold mb-4 font-sans">Education</h2>
      <div className="space-y-8">
        {educationData.map((edu) => (
          <div key={edu.institution} className="prose max-w-none dark:prose-invert">
            <div className="flex justify-between items-baseline gap-4">
              <h3 className="!text-2xl !mb-0 max-w-lg">{edu.institution}</h3>
              <p className="text-sm !mt-0 text-right">{edu.date}</p>
            </div>
            <p className="!mt-0 text-zinc-500 dark:text-zinc-400">{edu.degree}</p>
            {edu.details.length > 0 && (
              <ul className="list-disc pl-5 mt-4">
                {edu.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 