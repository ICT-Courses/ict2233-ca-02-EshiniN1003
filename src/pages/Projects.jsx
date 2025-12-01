import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="section fade">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 p-10 transition-colors">

          <h1 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
            Projects
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <ProjectCard
              title="Trip Me Website"
              description="A modern web interface designed with clean UI and responsive layout."
              image="/project1.png"
              link="https://final-assessment-group5.vercel.app/"
            />

            <ProjectCard
              title="Personal Portfolio"
              description="Project built with GitHub template. Used React and Tailwind CSS."
              image="/project2.png"
              link="https://my-portfolio-brown-xi-88.vercel.app/"
            />

            <ProjectCard
              title="Spendo - Financial Tracking App"
              description="A mobile app designed to help users track their income, expenses, and investments."
              image="/project3.jpg"
              link="https://github.com/ICT-Courses/final-assessment-group-4.git"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
