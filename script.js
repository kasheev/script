var sumTime = 0;
var output = ""
var a=0, b=1;
var seconds, minutes,hours, days, mounths;
var timer = setInterval(function(){
    a = b;
    window.scrollTo(0,document.body.scrollHeight);
    count = document.querySelectorAll(".audio_row");
    b = count.length;


    if(a == b){
        clearInterval(timer);

    for(i = 0; i < count.length; i++) {
        let str = new String;
        srt = count[i].getAttribute("data-audio");
        var arg = srt.split(',"content_id"'); //первый раз разбиваем строку
        var arg_2 = arg[0].split(':'); //второй раз рабиваем и получаем длину трека последним элементом
        var time = Number.parseInt(arg_2[arg_2.length - 1]); //достаем длину трека
        sumTime += time;
    }

if(sumTime >= 60){
    minutes = parseInt(sumTime/60);
    seconds = sumTime - minutes*60;
    if(minutes >= 60){
        hours = parseInt(minutes/60);
        minutes = minutes - hours*60;
        if(hours >= 24){
            days = parseInt(hours/24);
            hours = hours - days*24;
            if(days>=30){
                mounths = parseInt(days/30);
                days = days - mounths*30;
            }
        }  
    }
}

output+="Всего: "
    if(mounths!=undefined) output+=mounths+" м., "; //Проверка на наличие месяца, дня, часа
    if(days!=undefined) output+=days+" д., ";
    if(hours!=undefined) output+=hours+" ч., ";
    output+=minutes+" м., "+seconds+" сек.";
    console.log(output);
    window.scrollTo(0, 0);
    }
     }, 1000)