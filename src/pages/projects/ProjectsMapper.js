const languagesIcons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
  TypeScript: "logos:typescript-icon",
  SCSS: "vscode-icons:file-type-scss2",
};

const ProjectsMapper = async (data) => {
  const maxProjects = 6;

  const splicedData = data.splice(0, maxProjects);

  const langUrls = splicedData.map((project) =>
    fetch(project.languages_url).then((response) => response.json())
  );

  const langResponses = await Promise.all(langUrls);
  const mappedLanguages = langResponses.map((langRes) =>
    Object.keys(langRes).map((lang) => ({
      name: lang,
      iconifyClass: languagesIcons[lang],
    }))
  );

  const mappedData = splicedData.map((project, index) => ({
    id: project.id,
    name: project.name,
    createdAt: project.created_at,
    url: project.html_url,
    description: project.description,
    isFork: project.fork,
    languages: mappedLanguages[index],
  }));

  return mappedData;
};

export default ProjectsMapper;
