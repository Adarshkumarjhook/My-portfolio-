 var tl = gsap.timeline({
     scrollTrigger: {
         trigger: '.page_1',
         // markers: true,
         scroller: 'body',
         start: '50% 50%',
         end: '100% 50%',
         scrub: 3,
         pin: true,


     }
 });

 tl.to('.profile .profile_info', {
     // x: '-50vh',
     width: "100vw",
     fontSize: '30vw',
     duration: 7


 }, 'a')


 tl.to('.profile .profile_info', {
         // x: '-50vh',
         // width: "100vw",
         // fontSize: '100vw',
         // duration: 7,
         //display:"none"


     }, 'a')




     .to('.profile_icon div', {
         rotate: -360,
         //y: '-50vh'
     }, 'a')


     .to('.profile_img_box img', {
         // opacity: 0,
         // stagger: 1,
         //  color: "white",
         display: "none"


     }, 'a')








 var tl = gsap.timeline({
     scrollTrigger: {
         trigger: '.page_2',
         markers: true,
         scroller: 'body',
         start: '20% 70%',
         end: '10% 5%',
         scrub: 3,
         pin: true,


     }
 });


 tl.from('.ani_x', {
     x: '-70vh',
     // width:"100vw",
     //fontSize: '30vw',
     //duration: 7,
     stagger: 1,


 }, 'b')

 tl.from('.ani_y', {
     y: '70vh',
     // width:"100vw",
     //fontSize: '30vw',
     duration: 7,
     stagger: 2,


 }, 'b')




 //opacity: 0,









 /*
 gsap.from('.box', {
    duration: 2,
   yoyo: true,
    y: 600,
   margin:15,
    autoRevert: true,
       opacity: 0,
       rotate:90,

    repeat: -1,
    
    
 });



 */




 var open_main_nav = document.querySelector('#open_main_nav');
 open_main_nav.addEventListener('click', () => {
     //alert(4)
     document.querySelector('.main_nav').style.display = "block"

     gsap.to('.main_nav', {
         duration: 0.5,
        //yoyo: true,
     //    y: 600,
      //   margin: 15,
       //  autoRevert: true,
        opacity: 1,
    animationTimingFunction: 'ease-in-out',
        // rotate: 90,
        // repeat: -1,
      height:"100%",


     });



 })
 
 
  var open_main_nav = document.querySelector('.arrow');
  open_main_nav.addEventListener('click', () => {
      //alert(4)
      document.querySelector('.main_nav').style.display = "block"
 
 
      gsap.to('.main_nav', {
          duration: 0.5,
          //yoyo: true,
          //    y: 600,
          //   margin: 15,
          //  autoRevert: true,
          opacity: 1,
          animationTimingFunction: 'ease-in-out',
          // rotate: 90,
          // repeat: -1,
          height: "0%",
 
 
      });
      
      setTimeout(() => {
                document.querySelector('.main_nav').style.display = "none"

      },500)
 
 
 
  })
  
  
 var m_yo =document.getElementById('m_yo');
 
 setInterval(() => {
    // m_yo.innerHTML+='Yo_Dalo420'
     

     
 },2000)
  
  
  

  
  
  
var phone_widh=window.innerWidth;

if (phone_widh<600) {
    

    
             gsap.to('.manu_yo_dalo h1', {
           duration: 5,
          // yoyo: true,
           y: 1000,
           //   margin: 15,
           //  autoRevert: true,
           opacity: 1,
           // animationTimingFunction: 'ease-in-out',
           // rotate: 90,
           repeat: -1,
           // height: "0%",
     
     
       });
     
       gsap.to('.manu_yo_dalo h1', {
           // duration: 0.5,
           // yoyo: true,
           // y: -1000,
           //   margin: 15,
           //  autoRevert: true,
           // opacity: 1,
           // animationTimingFunction: 'ease-in-out',
           rotate: -90,
           //  repeat: -1,
           // height: "0%",
     
     
       });
     
     

            gsap.to('.manu_yo_dalo h1', {
           duration: 1,
           // yoyo: true,
           // x: 600,
           //   margin: 15,
           //  autoRevert: true,
           // opacity: 1,
           // animationTimingFunction: 'ease-in-out',
          // rotate: -90,
           //  repeat: -1,
           // height: "0%",
           //display:'none',
           
     
     
       });
     
    
    
    
}else{
    
    
             gsap.to('.manu_yo_dalo h1', {
           duration: 4,
          // yoyo: true,
           y: 2000,
           //   margin: 15,
           //  autoRevert: true,
           opacity: 1,
           // animationTimingFunction: 'ease-in-out',
           // rotate: 90,
           repeat: -1,
           // height: "0%",
     
     
       });
     
       gsap.to('.manu_yo_dalo h1', {
           // duration: 0.5,
           // yoyo: true,
           // y: -1000,
           //   margin: 15,
           //  autoRevert: true,
           // opacity: 1,
           // animationTimingFunction: 'ease-in-out',
           rotate: -90,
           //  repeat: -1,
           // height: "0%",
     
     
       });
     
     

            gsap.to('.manu_yo_dalo h1', {
           duration: 1,
           // yoyo: true,
           // x: 600,
           //   margin: 15,
           //  autoRevert: true,
           // opacity: 1,
           // animationTimingFunction: 'ease-in-out',
          // rotate: -90,
           //  repeat: -1,
           // height: "0%",
           //display:'none',
           
     
     
       });
     
    
    
    
    
    
    
}


