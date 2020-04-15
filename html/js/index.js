$(document).ready(function(){
    alert('이 페이지는 크롬에 최적화 되어있습니다.')
    var ws=$('html,body').scrollTop();
    var fs=$('#section_1').height();
   /*$(window).scroll(function(){
       ws=$('html,body').scrollTop();
       if(ws>fs && ws<fs*2){
           $('#section_2>.title').css({
               position:'fixed',
               top:0,
               zIndex:'1'
           })
       }
       else if(ws>fs*2 && ws<fs*3){
          $('#section_2>.title').css({
               position:'relative',
           })
            $('#section_3>.title').css({
               position:'fixed',
               top:0,
               zIndex:'1'
           })
       }
       else if(ws>fs*4){
           $('#section_3>.title').hide()
       }
   }) */
});