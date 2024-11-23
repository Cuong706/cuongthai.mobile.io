const images = [
    "banner11.jpg",
    "banner2.webp",
    "banner 3.jpg"
];

let currentIndex = 0;

// Hàm chuyển ảnh trước
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBanner();
}

// Hàm chuyển ảnh tiếp theo
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBanner();
}

// Hàm cập nhật ảnh
function updateBanner() {
    const bannerImage = document.getElementById("banner-image");
    bannerImage.src = images[currentIndex];
}


