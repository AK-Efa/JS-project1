
                   let on = document.querySelector('.on')
                   let img = document.querySelector('.imgon')
                   let off = document.querySelector('.off')
                   
                   on.addEventListener('click', function () {
                        img.src = "https://www.w3schools.com/js/pic_bulbon.gif"
                   }) 
                    
                   off.addEventListener('click', function () {
                       img.src = "https://www.w3schools.com/js/pic_bulboff.gif"
                   })
                                  
                   
                   let inc = document.querySelector('.inc')
                   let input = document.querySelector('.incdec')
                   let dec = document.querySelector('.dec')
                   
                   
                   inc.addEventListener('click', function () {
                        if (Number(input.value) < 5) {
                             input.value = Number(input.value) + 1 
                        } else {
                             inc.style.cursor = 'not-allowed'
                        }
                   })
                   
                   dec.addEventListener('click', function(){
                        if(Number(input.value) <= 5){
                   
                             if (Number(input.value) == 1) {
                                  dec.style.cursor = 'not-allowed'
                             }else{
                                  let test = Number(input.value) 
                                  input.value = test - 1
                             }
                        }
                   
                   })
                   
                   let btn = document.querySelector('.btn_clr')
                   let clrBg = document.querySelector('.clckhere')
                   
                   btn.addEventListener('click', function () {
                        let red = Math.floor(Math.random() * 255)
                        let green = Math.floor(Math.random() * 255)
                        let blue = Math.floor(Math.random() * 255)
                   
                   
                        clrBg.style.background = `rgb(${red}, ${green}, ${blue})`
                   })
                   
                                   
                   
                   let slideValue = document.querySelector(".per");
                   let inputSlider = document.querySelector(".in");
                   
                   inputSlider.oninput = (() => {
                        let value = inputSlider.value;
                        slideValue.textContent = value;
                        slideValue.style.left = (value / 2) + "%";
                        slideValue.classList.add("show");
                   });