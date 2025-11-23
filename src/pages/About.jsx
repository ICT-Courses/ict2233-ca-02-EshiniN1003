export default function About() {
  return (
    <section className="section fade">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        
        <div className="p-10 bg-white dark:bg-gray-900 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h1>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            My belief is that project management is happening around us at all times,
            we're just not aware of it. For example, planning a vacation, making dinner,
            or fixing the house all incorporate elements of project management such as 
            gathering requirements, stakeholder management, budget management, etc.
            <br /><br />
            There have been many experiences in my life where I had to use project management
            frameworks to accomplish a goal. I'm confident in my intuitive understanding of 
            core project management values and the ability to apply these frameworks in a 
            professional setting.
          </p>
        </div>

        
        <div className="p-10 bg-white dark:bg-gray-900 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Skills
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-sm">
            <li className="py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-md text-center">Project Management</li>
            <li className="py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-md text-center">Communication</li>
            <li className="py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-md text-center">Backlog</li>
            <li className="py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-md text-center">UX/UI</li>
            <li className="py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-md text-center">Time Management</li>
            <li className="py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-md text-center">Git / GitHub</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
