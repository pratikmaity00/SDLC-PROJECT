const texts = [
    "Find your dream home",
    "Search. Select. Settle.",
    "Smart Living Starts Here",
    "Move In With Confidence"
  ];

  let index = 0;
  const heading = document.getElementById("heading");

  setInterval(() => {
    heading.classList.add("opacity-0");

    setTimeout(() => {
      index = (index + 1) % texts.length;
      heading.textContent = texts[index];
      heading.classList.remove("opacity-0");
    }, 500); // fade out first

  }, 2000);