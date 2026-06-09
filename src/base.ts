import blog from "./blog";
import contact from "./contact";
import home from "./home";
import projects from "./projects";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
        <canvas id="cube" class="w-auto h-20 flex justify-center m-auto mb-10"></canvas>
        <header class="border-b-5 border-indigo-50 border-dotted mb-5 mx-auto sm:w-md">
            <nav class="mb-3">
                <ul class="flex gap-1 justify-center *:border-3 *:border-x-indigo-400 *:border-b-indigo-50 *:p-0.5 *:mb-1 *:hover:bg-indigo-400 *:pr-1 *:hover:-translate-y-2 *:hover:scale-130 *:duration-40 *:ease-linear">
                    <a href="/">
                        <li>Início</li>
                    </a>
                    <a href="/projects">
                        <li>Projetos</li>
                    </a>
                    <a href="/blog">
                        <li>Blog</li>
                    </a>
                    <a href="/contact">
                        <li>Contato</li>
                    </a>
                </ul>
            </nav>
        </header>
        <main id="main-content">
        </main>
`;

window.addEventListener("load", () => {
  const path = window.location.pathname;

  switch (path) {
    case "/projects":
      document.querySelector<HTMLDivElement>("#main-content")!.innerHTML = projects;
      break;
    case "/blog":
      document.querySelector<HTMLDivElement>("#main-content")!.innerHTML = blog;
      break;
    case "/contact":
      document.querySelector<HTMLDivElement>("#main-content")!.innerHTML = contact;
      break;
    case "/":
    default:
      document.querySelector<HTMLDivElement>("#main-content")!.innerHTML = home;
      break;
  }
});
