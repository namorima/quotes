//Quotes Changed Automatically		 
$(function () { 
  count = 0; 
  wordsArray = [
"Ilmu tanpa agama adalah suatu kecacatan, dan agama tanpa ilmu merupakan kebutaan",
"Kerjakanlah urusan duniamu seakan-akan kamu hidup selamanya. Dan laksanakanlah urusan akhiratmu seakan-akan kamu akan mati besok",
"Ketika terbukti salah, orang bijak akan memperbaiki dirinya sendiri dan orang yang bodoh akan terus berdebat",
"Kualitas pikiranmu menentukan kualitas kehidupanmu"]; 
  setInterval(function () { 
    count++; 
    $("#word").fadeOut(500, function () { 
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500); 
    }); 
  }, 8000); 
}); 
//End Replace Text function
