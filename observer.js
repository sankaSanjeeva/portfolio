document.addEventListener("DOMContentLoaded", function () {
  let list = [
    { id: "about", is: true },
    { id: "experience", is: false },
    { id: "projects", is: false },
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        list.find(({ id }) => id === target.id).is = isIntersecting;
      });

      list.forEach(({ id }) => {
        document.querySelector(`.${id}`).classList.remove("text-slate-200");
      });

      document
        .querySelector(`.${list.find(({ is }) => is).id}`)
        .classList.add("text-slate-200");
    },
    { rootMargin: "-96px 0px 0px 0px" }
  );

  list.forEach(({ id }) => {
    observer.observe(document.querySelector(`#${id}`));
  });
});
