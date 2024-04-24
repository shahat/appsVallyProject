export const scrollTo = (id) => {
  const scollTo = document.getElementById(id);
  scollTo.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "nearest",
  });
};
