import MainLayout from "@/components/layouts/MainLayout";

const About = () => {
  return (
    <div className="w-full bg-black min-h-screen text-white">
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Watchdog</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Our Mission</h2>
            <p className="text-lg text-gray-300">
              We help artists and rights holders find where brands use their music 
              and turn these discoveries into revenue opportunities.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">The Problem We Solve</h2>
            <p className="text-lg text-gray-300">
              In today's digital landscape, music is used across countless platforms and 
              campaigns. Many of these uses go undetected, leading to millions in lost 
              revenue for artists and rights holders.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Our Approach</h2>
            <p className="text-lg text-gray-300">
              Using advanced AI technology, we scan millions of digital content pieces 
              to identify musical works and connect rights holders with brands for proper 
              licensing and compensation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <MainLayout>
    <About />
  </MainLayout>
);

export default AboutPage; 