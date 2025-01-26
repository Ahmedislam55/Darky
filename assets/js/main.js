// const scrollToTop = document.querySelector('.scroll-to-top')
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 300) {
//         scrollToTop.style.display = "grid"
//     } else {
//         scrollToTop.style.display = "none"
//     }
// })

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 2,
      }
  }
});
let btn = document.getElementById('btn');
addEventListener('scroll' ,() =>
{
    if(scrollY>=400)
    {
        btn.style.display = 'block';
    }
    else
    {
        btn.style.display = 'none';
    }
})
btn.addEventListener('click' , ()=>
{
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    })
})