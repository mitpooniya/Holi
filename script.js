function make(){
var n = prompt('अपना नाम दर्ज करें !');
window.location.href = '/holi/?n='+n ;
}
// Function to get URL parameters
    function getUrlParameter(n) {
      n = n.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + n + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    // Get the n parameter from the URL
    var n = getUrlParameter('n');

    if (n) {
          document.getElementById("show").innerText = n;
    } else {
          document.getElementById("show").innerText = "mit";
    }
    
function data() {
  if (n) {
      window.location.href = 'whatsapp://send?text= होली की हार्दिक शुभकामनाएं! 🎉 इस रंगीन त्योहार में आपकी जिंदगी में खुशियों की बौछार हो, और आपके सभी सपने पूरे हों। mitpooniya.github.io/holi/?n='+n+'  पर क्लिक करके अपनी हैपी होली की शुभकामनाएं भेजें । ';

  } else {
      window.location.href = 'whatsapp://send?text= होली की हार्दिक शुभकामनाएं! 🎉 इस रंगीन त्योहार में आपकी जिंदगी में खुशियों की बौछार हो, और आपके सभी सपने पूरे हों। mitpooniya.github.io/holi पर क्लिक करके अपनी हैपी होली की शुभकामनाएं भेजें । ';

  }
}
