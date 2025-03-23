import { CallToAction } from "@/components/CallToAction";
import { BlogContent } from "@/components/BlogContent";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <CallToAction />
      <section className="py-24">
        <BlogContent />
      </section>
    </div>
  );
};

export default Blog; 