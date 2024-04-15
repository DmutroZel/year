let year = prompt('Введи рік. Якщо він високосний буде true якщо ні то false');



if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    alert('true');
    
} else {
    alert('false');
}if (year<0){
    alert('То до нашої ери. Я не знаю чи там були високосні роки')
}
