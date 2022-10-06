const accd = document.getElementsByClassName("contentBx");
for (let i = 0; i < accd.length; i++) {
    accd[i].addEventListener("click", function () {
        for (let j = 0; j < accd.length; j++) {
            if (j != i) {
                accd[j].classList.remove("active");
            }
        }
        this.classList.toggle("active");
    });
}