const btnSair = document.querySelector(".btn-sair");

btnSair.addEventListener("click", () => {
    window.location.href = "/login/login.html";
});


const todosOsItens = document.querySelectorAll(".item");


todosOsItens.forEach((todosItem) => {
    todosItem.addEventListener("click", () => {
        todosOsItens.forEach((item) => {
            item.classList.remove("ativo");
        });
        todosItem.classList.add("ativo");
    });

});
