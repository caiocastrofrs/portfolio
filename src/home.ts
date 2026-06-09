const age = Math.floor(
  Math.abs(Number(new Date()) - Number(new Date(1999, 2, 12))) / (1000 * 60 * 60 * 24) / 365,
);

const home = `
<div class="mx-auto sm:w-md p-3">
  <span class="font-[Instrument_Serif] text-3xl text-indigo-400 text-center block font-bold">Caio Castro</span>
  <div class="flex flex-col justify-center items-center mb-10">
      <span>${age}y</span>
      <span>Desenvolvedor Web</span>
      <span>São Paulo, Brasil</span>
  </div>
  <div>
    <h3 class="text-md font-bold mb-5">Sobre mim:</h3>
    <ul class="list-disc *:ml-3">
        <li>Estou no segundo semestre de ADS na Faculdade Impacta;</li>
        <li>Formado no curso Certified Tech Developer da Digital House;</li>
        <li>Minha stack principal é React com JS/TS, mas tenho interesse em qualquer ferramenta de Web Dev;</li>
        <li>Trabalhei como Dev Frontend Jr por quase 2 anos usando React e Next.js 11.</li>
    </ul>
  </div>
</div>
`;

export default home;
