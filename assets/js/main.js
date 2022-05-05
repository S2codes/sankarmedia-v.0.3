// aos 
AOS.init();


const observerSection = document.getElementById('observeSection');
const observer = new IntersectionObserver((entries)=>{
  const ent = entries[0];
  console.log(ent);
  if (ent.isIntersecting) {
    incrnum()
  }
}, {root: null, threshold: 1});

observer.observe(observerSection)



const counterNumber = document.querySelectorAll('.countNum');
const speed = 35;
function incrnum() {
    console.log('call function');
    
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
    // console.log('hello jquery');
    // dropdown 
    $('#navbarDropdow').click(() => {
        $('.dropdown-menu').toggleClass('show')
    })


})