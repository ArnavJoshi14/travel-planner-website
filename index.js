document.querySelector(".light").addEventListener("mouseenter", function() {
    document.querySelector(".text1").innerHTML = "Organize your travel itineraries, bookings and routes. Add accommodation, activities and transport to each destination.";
    document.querySelector(".text1").classList.add("light-dropdown");
});
document.querySelector(".light").addEventListener("mouseleave", function() {
    document.querySelector(".text1").innerHTML = "";
    document.querySelector(".text1").classList.remove("light-dropdown");
});

document.querySelector(".green").addEventListener("mouseenter", function() {
    document.querySelector(".text2").innerHTML = "Plan the perfect group trip with your friends and family. Create collaborative itineraries, share ideas and make decisions together.";
    document.querySelector(".text2").classList.add("green-dropdown");
});
document.querySelector(".green").addEventListener("mouseleave", function() {
    document.querySelector(".text2").innerHTML = "";
    document.querySelector(".text2").classList.remove("green-dropdown");
});

document.querySelector(".purple").addEventListener("mouseenter", function() {
    document.querySelector(".text3").innerHTML = "Create travel journals and share them with your friends - or keep them to yourself. Upload your travel photos and generate travel reels.";
    document.querySelector(".text3").classList.add("purple-dropdown");
});
document.querySelector(".purple").addEventListener("mouseleave", function() {
    document.querySelector(".text3").innerHTML = "";
    document.querySelector(".text3").classList.remove("purple-dropdown");
});

document.querySelector(".orange").addEventListener("mouseenter", function() {
    document.querySelector(".text4").innerHTML = "Discover insider travel tips, copy itineraries from travel experts and personalize them to your needs.";
    document.querySelector(".text4").classList.add("orange-dropdown");
});
document.querySelector(".orange").addEventListener("mouseleave", function() {
    document.querySelector(".text4").innerHTML = "";
    document.querySelector(".text4").classList.remove("orange-dropdown");
});