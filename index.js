const f1 = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Работа с DOM";
  document.body.prepend(h1);
};
f1();

const f2 = () => {
  const main = document.querySelector("#main");
  const a = document.createElement("a");
  a.textContent = "Статья про DOM";
  a.setAttribute("href", "https://ru.wikipedia.org/wiki/Document_Object_Model");
  main.append(a);
};
f2();

const f3 = (cvet) => {
  document.body.style.background = `${cvet}`;
};
f3("red");

const f4 = (text) => {
  const list = document.querySelector("#list");
  const li = document.createElement("li");
  li.textContent = text;
  list.append(li);
};
f4("js");

const f5 = () => {
  const copy = document.querySelector("#copyright");
  copy.remove();
};
f5();
