export default function ProjectCard({ title, description, image, link }) {
    return (
        <div className="space-y-3">
            <img src={image} className="rounded-lg shadow-sm w-full h-48 object-cover" />
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            <a href={link} target="_blank" className="text-blue-600 text-sm font-medium">
                View Project →
                </a>
                </div>
                );
                }