// aos 
AOS.init();
// section observe  
const observerSection = document.getElementById('observeSection');
const observer = new IntersectionObserver((entries)=>{
  const ent = entries[0];
  if (ent.isIntersecting) {
    incrnum()
  }
}, {root: null, threshold: 1});

observer.observe(observerSection)
// count on scroll 
const counterNumber = document.querySelectorAll('.countNum');
const speed = 35;
function incrnum() {
    counterNumber.forEach((curElem) => {
        const updateNumber = () =>{
            const targetNumber = parseInt(curElem.dataset.number);
            const intialNumber = parseInt(curElem.innerText);
            const incrementNumber = Math.trunc(targetNumber/speed);
            if (intialNumber < targetNumber) {
                curElem.innerText = (intialNumber + incrementNumber);
                setTimeout(updateNumber, 50);
            }
        }
    
        updateNumber(); 
    })
}


$(document).ready(function () {
    $('#navbarDropdow').click(() => {
        $('.dropdown-menu').toggleClass('show')
    })
})