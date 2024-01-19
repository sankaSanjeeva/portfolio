document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector("#cursor");

  document.addEventListener("mousemove", function (e) {
    const x = e.pageX;
    const y = e.pageY;

    cursor.style.background = `radial-gradient( 600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80% )`;
  });
});
