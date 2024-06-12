function toggleMobileMenu() {
    const menuList = document.querySelector('.mobile-menu-list');
    menuList.classList.toggle('show'); // Toggle visibility
}
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000); 
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

	    var slideIndex = [1,1];
            var slideId = ["mySlides1", "mySlides2"]
            showSlides(1, 0);
            showSlides(1, 1);          
            
            function plusSlides(n, no) {
              showSlides(slideIndex[no] += n, no);
            }
            
            function showSlides(n, no) {
              var i;
              var x = document.getElementsByClassName(slideId[no]);
              if (n > x.length) {slideIndex[no] = 1}    
              if (n < 1) {slideIndex[no] = x.length}
              for (i = 0; i < x.length; i++) {
                 x[i].style.display = "none";  
              }
              x[slideIndex[no]-1].style.display = "block";  
            }
