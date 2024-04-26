import { users, posts, sugestsUsers } from "./dataBase.js";
import { createModal } from "./modal.js"

function createPost(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        const perfilContainer = document.querySelector(".perfil__container");
        const img = document.createElement("img");
        const perfilInfo = document.createElement("div");
        const stack = document.createElement("h2");
        const name = document.createElement("p");

        perfilInfo.classList.add("perfil__info");
        img.src = user.img;
        name.innerText = user.user;
        name.classList.add("perfil__name");
        stack.innerText = user.stack;
        stack.classList.add("perfil__stack");

        perfilInfo.append(name, stack);
        perfilContainer.append(img, perfilInfo);
    }
}
function createSectionSugest(sugestsUsers) {
    for (let i = 0; i < sugestsUsers.length; i++) {
        let sugestsUser = sugestsUsers[i];

        const sugestPerfilContainer = document.querySelector(
            ".sugest__perfil-container"
        );
        const sugestPerfil = document.createElement("div");
        const sugestUserConteiner = document.createElement("div");
        const sugestImg = document.createElement("img");
        const sugestInfo = document.createElement("div");
        const name = document.createElement("h2");
        const stack = document.createElement("p");
        const divButton = document.createElement("div");
        const button = document.createElement("button");

        sugestPerfil.classList.add("sugest__perfil");
        sugestUserConteiner.classList.add("sugest__user");
        sugestImg.classList.add("sugest__img");
        sugestImg.src = sugestsUser.img;
        sugestInfo.classList.add("sugest__info");
        name.innerText = sugestsUser.user;
        name.classList.add("perfil__name");
        stack.innerText = sugestsUser.stack;
        stack.classList.add("perfil__stack");
        divButton.classList.add("btn");
        button.classList.add("disable");
        button.classList.add("active");
        button.innerText = "Seguir";

        button.addEventListener("click", () => {
            button.classList.toggle("disable");
        });

        sugestInfo.append(name, stack);
        divButton.append(button);
        sugestUserConteiner.append(sugestImg, sugestInfo);
        sugestPerfil.append(sugestUserConteiner, divButton);
        sugestPerfilContainer.append(sugestPerfil);
    }
}
function createPostSection(posts) {
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        const postsContainerUser = document.querySelector(
            ".posts__container-user"
        );
        const postsUser = document.createElement("div");
        const imgUser = document.createElement("img");
        const postInfo = document.createElement("div");
        const name = document.createElement("div");
        const stack = document.createElement("div");
        const postTitle = document.createElement("h2");
        const text = document.createElement("p");
        const buttonContainer = document.createElement("div");
        const button = document.createElement("button");
        const likeContainer = document.createElement("div");
        const imgLike = document.createElement("img");
        const imgLiked = document.createElement("img");
        const contagem = document.createElement("p");

        postsUser.classList.add("posts__user");
        imgUser.src = post.img;
        postInfo.classList.add("posts__info");
        name.classList.add("posts__name");
        name.innerText = post.user;
        stack.classList.add("posts__stack");
        stack.innerText = post.stack;
        postTitle.classList.add("posts__title");
        postTitle.innerText = post.title;
        text.classList.add("posts__text");
        text.innerText = post.text;

        let newParagraph = textReduction(text.innerText, 131);

        buttonContainer.classList.add("button__container");
        button.classList.add("post__button");
        button.datasetId = posts[i].id;
        button.innerText = "Abrir Post";
        button.addEventListener("click", () => {
            handleModal();
        });

        likeContainer.classList.add("likeConteiner");
        imgLiked.classList.add("liked");
        contagem.innerText = post.likes;
        contagem.classList.add("n_like");

        imgLike.src = "./src/assets/images/like.svg";
        imgLike.addEventListener("click", () => {
            imgLike.classList.toggle("liked");
            if (imgLike.classList.contains("liked")) {
                imgLike.src = "./src/assets/images/liked.svg";
                contagem.innerText = Number(contagem.innerText) + 1;
            } else {
                imgLike.src = "./src/assets/images/like.svg";
                contagem.innerText = Number(contagem.innerText) - 1;
            }
        });

        postsContainerUser.append(
            postsUser,
            postTitle,
            newParagraph,
            buttonContainer
        );
        postsUser.append(imgUser, postInfo);
        postInfo.append(name, stack);
        buttonContainer.append(button, likeContainer);
        likeContainer.append(imgLike, contagem);
    }
}

function textReduction(text, characters) {
    let newParagraph = document.createElement("p");
    newParagraph.classList.add("posts__text");

    for (let i = 0; i < characters; i++) {
        newParagraph.textContent += text[i];
    }
    newParagraph.textContent += "...";

    return newParagraph;
}
function handleModal() {
    const modalController = document.querySelector(".modal");
    const buttonsCloseModal = document.querySelectorAll(".post__button");
  
    for (let i = 0; i < buttonsCloseModal.length; i++) {
      const buttonCloseModal = buttonsCloseModal[i];
  
      buttonCloseModal.addEventListener("click", function (event) {
        modalController.innerHTML = "";
  
        const modalContent = createModal(Number(event.target.datasetId));
        console.log(modalContent)

        modalController.appendChild(modalContent);
  
        modalController.showModal();
  
        closeModal();
      });
    }
  }
  
  function closeModal() {
    const modalClose = document.querySelector(".modal__close");
    const modalController = document.querySelector(".modal");

    modalClose.addEventListener("click", function () {
      modalController.close();
    });
  }

  handleModal();

createPostSection(posts);
createSectionSugest(sugestsUsers);
createPost(users);
