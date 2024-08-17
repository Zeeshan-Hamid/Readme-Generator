import { useState, useEffect } from "react";
import "./IconSelector.scss";

// Define categories for skills
const categories = {
  Frontend: [
    "angular",
    "react",
    "vue",
    "svelte",
    "html",
    "css",
    "bootstrap",
    "tailwind",
    "materialui",
    "jquery",
    "ember",
    "lit",
    "nextjs",
    "nuxt",
    "jquery",
   
    "pug",
    "sass",
    "less",
  ],
  Backend: [
    "nodejs",
    "express",
    "django",
    "flask",
    "fastapi",
    "spring",
    "rails",
    "laravel",
    "haskell",
    "rust",
    "go",
    "java",
    "dotnet",
    "php",
    "scala",
    "elixir",
    "kotlin",
    "graphql",
    
    "symfony",
    
  ],
  Databases: [
    "mongodb",
    "mysql",
    "postgres",
    "sqlite",
    "cassandra",
    "dynamodb",
    "redis",
    "planetscale",
    
    "firebase",
    
  ],
  Tools: [
    "docker",
    "kubernetes",
    "aws",
    "azure",
    "gcp",
    "git",
    "github",
    "gitlab",
    "jenkins",
    "vscode",
    "vim",
    "emacs",
    "sublime",
    "webpack",
    "babel",
  
    "gulp",
    "postman",
    "figma",
    
  ],
  Others: [
    "figma",
    "photoshop",
    "illustrator",
    "blender",
    "autocad",
    "latex",
    "maven",
    "gradle",
    "npm",
    "yarn",
    "pnpm",
    "vite",
    "rollupjs",
    "notion",
    
  ],
};

const IconSelector = ({ setFormData }) => {
  const [selectedIcons, setSelectedIcons] = useState([]);

  useEffect(() => {
    // Update formData with selected icons
    setFormData((prevData) => ({ ...prevData, icons: selectedIcons }));
  }, [selectedIcons, setFormData]);

  const handleCheckboxChange = (icon) => {
    setSelectedIcons((prev) =>
      prev.includes(icon) ? prev.filter((i) => i !== icon) : [...prev, icon]
    );
  };

  return (
    <div className="icon-selector">
      <h2>Show Off Your Skills!</h2>
      {Object.entries(categories).map(([category, icons]) => (
        <div key={category} className="icon-category">
          <h4>{category}</h4>
          <div className="icons">
            {icons.map((icon) => (
              <label key={icon} className="icon-checkbox">
                <span>
                  <img
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt="icon"
                  />
                </span>
                <input
                  type="checkbox"
                  checked={selectedIcons.includes(icon)}
                  onChange={() => handleCheckboxChange(icon)}
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconSelector;
