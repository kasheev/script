var sumTime = 0;
var output = ""
var seconds, minutes,hours, days, mounths;
count = document.querySelectorAll(".audio_row");
    for(i = 0; i < count.length; i++) {
        let str = new String;
        srt = count[i].getAttribute("data-audio");
        var arg = srt.split(',"content_id"'); //первый раз разбиваем строку
        var arg_2 = arg[0].split(':'); //второй раз рабиваем и получаем длину трека последним элементом
        var time = Number.parseInt(arg_2[arg_2.length - 1]); //достаем длину трека
        sumTime += time;
}

if(sumTime >= 60){
    minutes = pasreInt(sumTime/60);
    seconds = sumTime - minutes*60;
    if(minutes >= 60){
        hours = parseInt(minutes/60);
        minutes = minutes - hours*60;
        if(hours >= 24){
            days = parseInt(hours/24);
            hours = hours - days*24;
            if(days>=30){
                mounths = pasreInt(days/30);
                days = days - mounths*30;
            }
        }  
    }
}

output+="Общая продолжительность треков: "
    if(mounths!=undefined) output+=mounths+" месяца, "; //Прокерки на наличие месяца, дня, часа
    if(days!=undefined) output+=days+" дня, ";
    if(hours!=undefined) output+=hours+" часа, ";
    output+=minutes+" минут, "+seconds+" секунды.";
    console.log(output);