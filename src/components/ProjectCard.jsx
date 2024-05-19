import React from "react";

const ProjectCard = ({ image, title, description, LivePreview, Github }) => {
  return (
    <div className="border border-gray-500 rounded-md p-5 flex-1">
      <img src={image} className="w-full h-auto" alt={title} />
      <h3 className="text-2xl font-semibold mt-8">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      <div className="flex mt-12 gap-2">
        <a
          href={LivePreview}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center"
        >
          Live preview
        </a>
        <a
          href={Github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 text-center"
        >
          Checkout github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
