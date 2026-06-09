type Project = {
  title: string;
  description: string;
  stack: string[];
  links: {
    github: string;
    website: string;
  };
};

const projects_list: Project[] = [];

projects_list.push({
  title: "Name Every Pokémon",
  description:
    "Minigame com o objetivo de adivinhar o nome de todos os Pokémon de uma determinada geração",
  stack: ["React", "TypeScript", "Tailwind"],
  links: {
    github: "https://github.com/caiocastrofrs/name-every-pokemon",
    website: "https://name-every-pokemon.vercel.app/",
  },
});

const projects = `<div class="flex flex-col gap-1">
    ${projects_list.map(
      (project: Project) => `
    <div class="w-100 border-1 rounded border-neutral-700 p-3 m-auto hover:scale-101 ease-linear duration-20">
        <div class="flex justify-between">
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 class="size-6">
                <path fill-rule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>
            <div class="flex gap-1">
                ${String(
                  project.stack.map(
                    (t) =>
                      `<span class="inline-block text-xs font-bold bg-neutral-800 p-1 rounded">${t}</span>`,
                  ),
                ).replaceAll(",", "")}
            </div>
        </div>
        <p class="text-indigo-500 text-lg">${project.title}</p>
        <p class="bg-neutral-800 rounded p-2 text-justify text-sm">${project.description}.</p>
        <div class="flex justify-end *:underline *:decoration-4 *:decoration-indigo-500 *:decoration-dotted *:underline-offset-5 *:hover:bg-neutral-800 *:p-1 *:m-1">
            <a target="_blank" href="${project.links.github}">Github</a>
            <a target="_blank" href="${project.links.website}">Website</a>
        </div>
    </div>`,
    )}
</div>`;

export default projects;
