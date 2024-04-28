import { posts } from "./dataBase.js";

export function createModal(postId) {
  let post = {};

  for (let i = 0; i < posts.length; i++) {
    if (postId === posts[i].id) {
      post = posts[i];
      break; // Exit the loop once the post is found
    }
  }

  const modalContainer = document.createElement("div");
  const modalContent = document.createElement("div");
  const postsUser = document.createElement("div");
  const imgUser = document.createElement("img");
  const postInfo = document.createElement("div");
  const name = document.createElement("div");
  const stack = document.createElement("div");
  const postTitle = document.createElement("h2");
  const text = document.createElement("p");

  const buttonCloseModal = document.createElement("button");

  modalContainer.classList.add("modal__container");
  modalContent.classList.add("modal__content");

  buttonCloseModal.classList.add("modal__close");
  buttonCloseModal.innerText = "X";

  postsUser.classList.add("posts__user-modal");
  imgUser.src = post.img;
  postInfo.classList.add("posts__info");
  name.classList.add("posts__name");
  name.innerText = post.user;
  stack.classList.add("posts__stack");
  stack.innerText = post.stack;
  postTitle.classList.add("posts__title-modal");
  postTitle.innerText = post.title;
  text.classList.add("posts__text-modal");
  text.innerText = post.text;

  modalContainer.append(postsUser, postTitle, text, modalContent);
  postsUser.append(imgUser, postInfo);
  postInfo.append(name, stack);

  modalContent.append(buttonCloseModal);

  return modalContainer;
}
