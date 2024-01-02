const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
      for (tablink of tablinks) {
        tablink.classList.remove("active-link");
      }

      for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active");
      }
      document.getElementById(tabname).classList.add("active");
    }




    document.getElementById('seeMoreBtn').addEventListener('click', function() {
  const hiddenImages = document.querySelectorAll('.hidden');
  hiddenImages.forEach(image => {
    image.classList.add('visible');
    image.classList.remove('hidden');
  });
  this.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const seeLessBtn = document.getElementById('seeLessBtn');
    const hiddenImages = document.querySelectorAll('.hidden');


    if (hiddenImages.length > 0) {
        seeMoreBtn.style.display = 'inline-block';
    }

    seeMoreBtn.addEventListener('click', function() {
        hiddenImages.forEach(image => {
            image.classList.add('visible');
            image.classList.remove('hidden');
        });
        this.style.display = 'none'; 
        seeLessBtn.style.display = 'inline-block';  
    });

    seeLessBtn.addEventListener('click', function() {
        hiddenImages.forEach(image => {
            image.classList.add('hidden');
            image.classList.remove('visible');
        });
        this.style.display = 'none'; 
        seeMoreBtn.style.display = 'inline-block'; 
    });
});

let sidemenu = document.getElementById("sidemenu")

function openmenu(){
   sidemenu.style.right = "0"
}

function closemenu(){
  sidemenu.style.right = "-200px"
}

