
document.addEventListener("DOMContentLoaded", () => {
    // Get the text content of the <h1> element
    const textElement = document.getElementById("text");
    const words = textElement.textContent.split(" ");
  
    // Wrap each word in a span and update the h1 content
    textElement.innerHTML = words.map((word) => `<span class="word">${word}</span>`).join(" ");
  
    // Animate each word with GSAP
    gsap.from(".word", {
      scrollTrigger: {
        trigger: "#text",
        start: "top 90%",
        end: "60% 60%",
        scrub: true,
      },
      opacity: 0.3,
      y: 20,
      stagger: 0.1, // Apply stagger automatically
      duration: 1,
    });
  });
  