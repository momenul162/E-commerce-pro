const NewsLetter = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="mb-8 max-w-md mx-auto">
          Subscribe to our newsletter for exclusive offers and updates.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-primary hover:bg-white/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
