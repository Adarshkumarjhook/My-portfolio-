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

 tl.to('.page_1_main h1', {
         //x: '-50vh'
         fontSize: '10vw',
         duration: 7


     }, 'a')

     .to('.page_1_main', {
         //y: '-50vh'
     }, 'a')


     .to('#c_ffff span', {
         // opacity: 0,
         stagger: 1,
         color: "white",


     }, 'a')









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

 var tl_1 = gsap.timeline({
     scrollTrigger: {
         trigger: '._page_2',
         markers: true,
         scroller: 'body',
         start: '50% 50%',
         end: '100% 50%',
         scrub: 3,
         pin: true,


     }
 });

 tl_1.to('._page_2_box', {
     //x: '-50vh'
     fontSize: '10vw',
     duration: 7,
     height:"70vh",
     width:"1050px"
     




 }, 'b')