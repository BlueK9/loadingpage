window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const body = document.body;
  
    let words = document.querySelectorAll(".word");
    let maxWordIndex = words.length - 1;
  
    let hideLoader = () => {
        if (currentWordIndex === maxWordIndex) {
            setTimeout(() => {
                loader.classList.add("loader--hidden");
                loader.addEventListener("transitionend", () => {
                    document.body.removeChild(loader);
                });
  
  
                // Quita la clase "loading" para permitir el desplazamiento
                body.classList.remove("loading");
            }, 9500);
  
        }
  
    };

    