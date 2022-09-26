const bold = document.querySelector(".bold-btn");
const italic = document.querySelector(".italic-btn");
const reset = document.querySelector(".reset-btn");
const save_btn = document.querySelector(".save-btn");
const add = document.querySelector(".add-btn");

let title = document.querySelector("#title");
let desc = document.querySelector("#Description");

function addNotes() {
  const card = document.createElement("li");
  card.classList.add("card");
  if (title.value) {
    card.innerHTML = `
    <h2>${title.value}</h2>
    <p>${desc.value}</p>
    <div class="button-group">
        <button class="copy">Copy</button>
        <button class="del">Delete</button>
      </div>`;
    document.querySelector("ul").appendChild(card);
  }

document.querySelector('.del').addEventListener("click",() => {
    card.remove()})
  const copy = document.querySelector('.copy');
    copy.addEventListener("click", () => {
        var range = document.createRange();
        range.selectNode(card.querySelector("p"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        copy.innerHTML = "Copied!";
        setTimeout(() => (copy.innerHTML = "Copy"), 5000);
      });
    }    


save_btn.addEventListener("click", (e) => {
  e.preventDefault();

  addNotes();

  document.querySelector("form").reset();
});

function toggle() {
  const toggles = document.querySelector(".container-notemaker");
  if (toggles.style.display === "none") {
    toggles.style.display = "block";
  } else {
    toggles.style.display = "none";
  }
}

reset.addEventListener("click", () => {
   
    document.querySelector("form").reset();
  });






