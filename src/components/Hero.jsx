export default function Hero() {
  return (
    <section className="section fade">
      <div
        className="
          max-w-5xl mx-auto px-6 py-16 rounded-3xl bg-cover bg-center shadow-lg text-center
          bg-white/10 dark:bg-black/20 backdrop-blur-md transition-colors
        "
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        
        <img
          src="/profile.png"
          className="rounded-full w-40 h-40 object-cover mx-auto mb-6 shadow-xl border-4 border-white dark:border-gray-700"
          alt="Profile"
        />

        
        <h1 className="text-5xl md:text-5xl font-bold leading-tight text-white dark:text-gray-100">
          Eshini Nethmini
        </h1>

        
        <p className="mt-4 text-white dark:text-gray-200 text-lg max-w-xl mx-auto">
          An empathetic leader who enjoys using rational thinking to tackle
          business problems in IT Project Management
        </p>

        
        <div className="mt-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src="/linkedin-icon.png" className="w-10 h-10 mx-auto" alt="LinkedIn" />
          </a>
        </div>

        
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://drive.google.com/file/d/1JqFkF94hF0YulljdquL49vod0lW_bbrr/view?usp=drive_link"
            className="px-6 py-3 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
          >
            VIEW RESUME
          </a>

          <a
            href="mailto:eshini.nethmini1003@gmail.com"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            HIRE ME
          </a>
        </div>
      </div>
    </section>
  );
}
