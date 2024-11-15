function openModal(element) {
    const modal = document.getElementById("imageModal");
    const expandedImg = document.getElementById("expandedImg");
    const captionText = document.getElementById("imgCaption");

    expandedImg.src = element.src.replace("-thumbnail", ""); // Adjust the path if needed
    captionText.innerHTML = element.alt;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
