 //    LosingWEB Version: 3.2     //
// Copyright 2019-2020 LosingWEB //

// PRELOADER
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("loading").style.display = "none";
  document.getElementById("roled").style.display = "block";
  document.getElementById("footer-pre").style.display = "block";
  document.getElementById("footer-preb").style.display = "block";
}

// COPYIP
function copyToClipboard(element) {
     var $temp = $("<input>");
     $("body").append($temp);
     $asdasd = $temp.val($(element).text()).select();
     document.execCommand("copy");
     $temp.remove();
                            
  {
      Swal.fire({
          title: "Sunucu IP adresi başarıyla kopyalandı.",
          text: "Sunucu listene ekleyip hemen sende aramıza katılabilirsin..",
          icon: "success",
          button: "OYNA",
      });
  }
}