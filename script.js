function toggleSwitch() {
    const toggleSwitch = document.getElementById("toggle-switch");
    const toggleLabel = document.getElementById("toggle-label");

    toggleSwitch.classList.toggle("active");

    if (toggleSwitch.classList.contains("active")) {
        toggleLabel.textContent = "Restoran Açık";
    } else {
        toggleLabel.textContent = "Restoran Kapalı";
    }
}

function toggleBulkOrder() {
    const bulkOrderButton = document.getElementById("bulk-order-button");

    if (bulkOrderButton.classList.contains("active")) {
        bulkOrderButton.classList.remove("active");
        bulkOrderButton.textContent = "Toplu Sipariş: Kapalı";
    } else {
        bulkOrderButton.classList.add("active");
        bulkOrderButton.textContent = "Toplu Sipariş: Açık";
    }
}

function toggleView(view) {
    const yorumlarView = document.getElementById("yorumlar");
    const siparislerView = document.getElementById("siparisler");

    if (view === "yorumlar") {
        yorumlarView.style.display = "flex";
        siparislerView.style.display = "none";
    } else {
        yorumlarView.style.display = "none";
        siparislerView.style.display = "flex";
    }
}

function performSearch() {
    const searchInput = document.getElementById("search-input").value;
    alert("Arama yapılıyor: " + searchInput);
}


// Sayfayı gösteren fonksiyon
function showPage(page) {
    // Öncelikle tüm sayfaları gizleriz
    const pages = document.querySelectorAll('.main-content');
    pages.forEach(function(pageElement) {
        pageElement.style.display = 'none';
    });

    // Gösterilmesi gereken sayfayı gösteririz
    const pageToShow = document.getElementById(page);
    if (pageToShow) {
        pageToShow.style.display = 'flex'; // Sayfayı görünür yap
    }
}
