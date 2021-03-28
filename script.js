count = document.querySelectorAll(".audio_row");
for(i = 0; i < count.length; i++) {
let str = new String;
srt = count[i].getAttribute("data-audio");
var arg = srt.split(',"content_id"'); //первый раз разбиваем строку
var arg_2 = arg[0].split(':'); //второй раз рабиваем и получаем длину трека последним элементом
var time = Number.parseInt(arg_2[arg_2.length - 1]); //достаем длину трека
}