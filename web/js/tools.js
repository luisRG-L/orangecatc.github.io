const stringer = document.getElementById("stringer");
stringer.innerHTML = `
<h2>Transformador de texto </h2>
<input type="text" class="input">
<button>Compile</button>
<label></label>
`;
const input = stringer.getElementsByClassName('input')[1];
const btn = stringer.querySelector("button");
const label = stringer.querySelector("label");
btn.addEventListener("click", (ev) => {
    let response = input.innerHTML;
    response = response.replace(" ", "%");
    label.innerHTML = response;
    alert("C");
});
