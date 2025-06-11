import Image from 'next/image';
import experienceData from './experience.json';

const Experience = () => {
  return (
    <section id="experience" className="py-8 font-serif">
      <h2 className="text-2xl font-bold mb-4 font-sans">Work Experience</h2>
      <div className="space-y-8">
        {experienceData.map((job) => (
          <div key={job.company + job.title} className="prose max-w-none dark:prose-invert">
            <div className="flex justify-between items-baseline gap-4">
              <h3 className="!text-2xl !mb-0 max-w-lg">{job.company}</h3>
              <p className="text-sm !mt-0 text-right">{job.date}</p>
            </div>
            <p className="!mt-0 text-zinc-500 dark:text-zinc-400">{job.title}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 