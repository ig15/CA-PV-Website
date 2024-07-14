document.getElementById("descriptionBtn").addEventListener("click", function() {
    document.getElementById("descriptionBox").classList.add("active");
  });
  
  document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("descriptionBox").classList.remove("active");
  });
  