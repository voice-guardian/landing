import { BlogCallToAction } from "@/components/BlogCallToAction";
import { BlogContent } from "@/components/BlogContent";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <BlogCallToAction />
      <section className="py-24">
        <BlogContent />
      </section>
    </div>
  );
};

export default Blog; 