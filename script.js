function changeContent() {
    const info = document.getElementById("info");
    info.textContent = "Changing the text dynamically!";
    info.style.color = "blue";
    info.style.fontSize = "18px";
    info.style.fontWeight = "bold";
}

function toggleElement() {
    const container = document.getElementById("extra-info-container");
    const existing = document.getElementById("extra-info");

    if (existing) {
        container.removeChild(existing);
    } else {
        const newDiv = document.createElement("div");
        newDiv.id = "extra-info";
        newDiv.textContent = "This element was added via JavaScript!";
        container.appendChild(newDiv);
    }
}

