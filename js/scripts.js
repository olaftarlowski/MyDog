
// zaznacza linkie z hashem # 
$('a[href*="#"]')
  // nie uzywa niepolaczonych linkow
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // linki na stronie
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // sprawdza do ktorego elementu skrollowac
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // sprawdza czy scroll wystepuje
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // odwolanie po animacji
          // musi zmienic focus
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // sprawdza czy target byl focusowany
            return false;
          } else {
            $target.attr('tabindex','-1'); // dodaje tabindex elementom ktorych nie mozna focusowac
            $target.focus(); // ustawia focus ponownie
          };
        });
      }
    }
  });





// modal
var modal = document.getElementById('myModal');

// bierze obraz i wklada do modal
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// bierze <span> do zamkniecia modal
var span = document.getElementsByClassName("close")[0];

// jak uzytkownik kliknie span zamyka modal, dodane zamkniecie na klik modal
span.onclick = function() {
  modal.style.display = "none";
} 
modal.onclick = function() {
  modal.style.display = "none";
} 

var button = document.button

//$('.light-button').mouseover(function(){
//  $(this).css('background-color', 'rgba(21, 24, 24, 0.4)'); 
//    console.log("jest");
//});

//$('.light-button').mouseout(function(){
//  $(this).css('background-color', 'rgba(21, 24, 24, 0.4)'); 
//    console.log("jest");
//});
//mouse



var video = document.getElementsByClassName("video");

video.onclick = function(){
  video.style.backgroundColor = 'rgba(23, 23, 23, 0.5)'; 
    console.log("jest");
};

































