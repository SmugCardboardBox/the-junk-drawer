document.getElementById("year").textContent = new Date().getFullYear();

const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  clearTimeout(toastTimer);
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".coming-soon").forEach((button) => {
  button.addEventListener("click", () => showToast("That drawer isn't ready yet."));
});

document.querySelectorAll(".copy-hash").forEach((button) => {
  button.addEventListener("click", async () => {
    const hash = button.dataset.hash;
    try {
      await navigator.clipboard.writeText(hash);
      showToast("Copied SHA-256.");
    } catch {
      showToast("SHA-256 is shown below.");
    }
  });
});
