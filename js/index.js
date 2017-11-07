/**
 * Created by lenovo on 2017/10/25.
 */
$(function(){
    function sp(n){
        var len= n.toString().length;
        var str='';
        for(var i= 1,j=len-1;j>-1;i++){
            j--;
            if(i%3==0) {
                str= ','+n.toString().charAt(j)+str;
            }
            str=n.toString().charAt(j)+str;
        }
        return str;
    }

    var spanA=$('.proportion').children('li').eq(0).children('span');
    var spanB=$('.proportion').children('li').eq(1).children('span');
    var spanC=$('.proportion').children('li').eq(2).children('span');
    var spanD=$('.proportion').children('li').eq(3).children('span');

    var timer=null;
    var flag=true;

    $(document).scroll(function(){
        //score
        var offset_score = $('.score').offset().top;
        if ($(document).scrollTop() + $(window).height()>offset_score+$('.score').height()) {
            if(flag) {
                var A = 18397;
                var B = 98.8;
                var C = 3273;
                var D = 100;
                var a = parseInt(spanA.html().replace(',', ''));
                var b = parseInt(spanB.html());
                var c = parseInt(spanC.html().replace(',', ''));
                var d = parseInt(spanD.html());
                timer = setInterval(function () {
                    if (Math.abs(a - A) < 640) {
                        a = A;
                    } else {
                        a += 620;
                    }
                    if (Math.abs(b - B) < 4.2) {
                        b = B;
                    } else {
                        b += 4.2;
                    }
                    if (Math.abs(c - C) < 160) {
                        c = C;
                    } else {
                        c += 160;
                    }
                    if (Math.abs(d - D) < 4) {
                        d = D;
                    } else {
                        d += 4;
                    }
                    if (b == B && a == A && c == C && d == D) {
                        clearInterval(timer);
                        return;
                    }

                    spanA.html(sp(a));
                    spanB.html(b.toFixed(1) + '%');
                    spanC.html(sp(c));
                    spanD.html(d + '%');
                }, 30);
                flag=false;
            }
        }

        //news
        for(var i=0;i<$('.news').find('li').length;i++){
             var offset_news = $('.news').find('li').eq(i).offset().top;
            if($(document).scrollTop() + $(window).height()>offset_news+$('.news').find('li').eq(i).height()){
                $('.news').find('li').eq(i).css('opacity',1);
                $('.news').find('li').eq(i).addClass('animated zoomIn');
            }
        }
       
        for(var k=0;k<$('.encourage').find('.item').length;k++){
            var offset_encourage = $('.encourage').find('.item').eq(k).offset().top;
            if($(document).scrollTop() + $(window).height()>offset_encourage+$('.encourage').find('.item').eq(k).height()){
                $('.encourage').find('.item').eq(k).css('opacity',1);
                $('.encourage').find('.item').eq(k).addClass('animated slideInUp');
            }
        }
        
        //advantage
        for(var j=0;j<$('.advantage').find('.item').length;j++){
            var offset_advantage = $('.advantage').find('.item').eq(j).offset().top;
            if($(document).scrollTop() + $(window).height()>offset_advantage+$('.advantage').find('.item').eq(j).height()){
                $('.advantage').find('.item').eq(j).css('opacity',1);
                $('.advantage').find('.item').eq(j).addClass('animated fadeIn');
            }
        }
        


        //·µ»Ø¶¥²¿
        if($(document).scrollTop()==0){
            $('.return_top').fadeOut();
        }else{
            $('.return_top').fadeIn();
        }
    });

    $('.return_top').click(function(){
        var timer1=null;
        timer1=setInterval(function(){
            var top=$(document).scrollTop();
            if(top==0){
                clearInterval(timer1);
            }else{
                $(document).scrollTop(top-100);
            }
        },30);
    })

    
    /*$(window).resize(function(event) {
        var canvas=document.getElementById('canvas');
        var a=$(window).width();
        canvas.width=''+a;
        console.log($(window).width());
    });*/

    var canvas=document.getElementById('canvas');
    var cxt=canvas.getContext('2d');
    var x=$('.problem').width();
    var linearGrad=cxt.createLinearGradient(0,0,0,260);
    linearGrad.addColorStop(0.0,'#0277d2');
    linearGrad.addColorStop(1.0,'#5cb7fe');
    cxt.fillStyle=linearGrad;
    cxt.fillRect(0,0,x,260);

    function drawSin(cxt,n,m){
        var x=0;
        var y=0;
        cxt.strokeStyle="#fff";
        cxt.lineWidth=0.01;
          cxt.beginPath();
        function render(){
            for(var i=0;i<160;i+=1){
                x=i*10;
                y=Math.sin(0.1*i+m)*48+n;
                cxt.lineTo(x,y);
                cxt.stroke();
            }   
        }
       render();

    }


    drawSin(cxt,120,0);
    drawSin(cxt,180,2);
    drawSin(cxt,100,4);

})
/*webpack是打包工具，cpm init vue-router vue*/
/*em rem*/