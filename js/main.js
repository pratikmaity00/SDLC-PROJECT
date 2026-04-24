// ACCORDIAN
const items = document.querySelectorAll("details");

  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        items.forEach((el) => {
          if (el !== item) el.removeAttribute("open");
        });
      }
    });
  });