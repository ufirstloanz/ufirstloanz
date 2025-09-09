

 document.querySelectorAll(".btn-toggle").forEach((btn) => {
      btn.addEventListener("click", function() {
        let parent = this.previousElementSibling; // the <p> before the button
        let dots = parent.querySelector(".dots");
        let moreText = parent.querySelector(".more-text");

        if (moreText.style.display === "inline") {
          moreText.style.display = "none";
          dots.style.display = "inline";
          this.textContent = "See more";
        } else {
          moreText.style.display = "inline";
          dots.style.display = "none";
          this.textContent = "See less";
        }
      });
    });

var modal = document.getElementById("imgModal");
    var img = document.getElementById("enlargeImg");
    var modalImg = document.getElementById("modalImg");
    var closeBtn = document.getElementById("closeModal");

    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
    // Optional: Close modal when clicking outside the image
    modal.onclick = function(event) {
      if(event.target === modal) {
        modal.style.display = "none";
      }
    }