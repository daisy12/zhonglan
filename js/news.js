$(function(){
	$(document).scroll(function(){
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
    });
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
    drawSin(cxt,100,3);
})