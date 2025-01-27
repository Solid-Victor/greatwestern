import Image from 'next/image';

export default function CEOSection({ ceo }: { ceo: typeof import('@/data').aboutData.ceo }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <Image 
              src={ceo.image}
              alt={ceo.name}
              width={400}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">{ceo.name}</h2>
            <p className="text-xl text-primary mb-4">{ceo.title}</p>
            <p className="text-gray-600 mb-6 whitespace-pre-line">{ceo.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ceo.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 