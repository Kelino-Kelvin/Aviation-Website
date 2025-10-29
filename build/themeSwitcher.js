// I kind hope this works :)

const root = document.documentElement;
document.getElementById('toggle').addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
});
