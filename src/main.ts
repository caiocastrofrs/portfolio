const age = Math.floor(
  Math.abs(Number(new Date()) - Number(new Date(1999, 2, 12))) / (1000 * 60 * 60 * 24) / 365,
);

document.querySelector<HTMLDivElement>("#age")!.innerHTML = String(age) + "y";
