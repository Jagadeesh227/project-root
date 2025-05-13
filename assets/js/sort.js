function sortList() {
    let list = document.getElementById("nameList");
    let items = Array.from(list.children);
    items.sort((a, b) => a.innerText.localeCompare(b.innerText));
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
}