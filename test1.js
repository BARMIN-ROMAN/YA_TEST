// массив с карточками 
var cards = [
        ['GorodA', 'GorodB', 'AirPlane', '228', '965', '1'],
        ['GorodC', 'GorodA', 'Train', '228', '965', '2'],
        ['GorodB', 'GorodD', 'AirPlane', '228', '965', '3'],
        ['GorOdD', 'Gorodc', 'AirPlane', '228', '965', '4']

    ];
// Функция сортировки массива возвращает отсортированный массив и выводит в блок с id = elemId

// @cards - массив данных(карточек)
// @elemId - id элемента в который будут выведены элементы
function sort(cards,elemId){
    
    var  lastcity = cards[0][1];
    var  tmp;
    
    for (var i = 1; i < cards.length; i++){
        var f = 0;
        for (var j = i; j< cards.length; j++){
            if(cards[j][0].toUpperCase() === lastcity.toUpperCase()){
                f = 1;
                lastcity = cards[j][1];
                tmp = cards[i];
                cards[i] = cards[j];
                cards[j] = tmp;
                break;
            }
        }
        if (f == 0){ ErrorFind(101); return;}
    }
    if(elemId){
        var element = document.getElementById(elemId);
    for( var i = 0; i < cards.length; i++){
        	 element.innerHTML += '<span>'
					+ (i + 1) + ') Из' + ' ' + cards[i][0]
					+ ' в ' +cards[i][1] + '.'
					+ ' Транспорт: ' + cards[i][2] + ';'
					+ ' Номер: ' + cards[i][3] + ';'
					+ ' Место: ' +cards[i][4] + ';'
					+ '</br>' + 'Комментарий к карточке: ' + cards[i][5] + ';'
					+ '</span></br></br>';
    }
    }
}

// Для очистки соедржимого поля, где записываются карты
function clearText(elemId){
     var element = document.getElementById(elemId);
        element.innerText = '';
}

//Вывод сообщения о типе ошибки , иначе выполнение функции sort();
/*
@errorType - получение значения ошибки, либо массив
@elemId - id объекта для функции sort() 
*/
function ErrorFind(errorType, elemId){
switch (errorType) {
    case 101: {alert(' Одинаковые карточки.'); cards = 101; break}
    case 102: {alert(' Точка начала и точка конца карточки совподают. ');  cards = 102; break}
    case 103: {alert(' Пустая точка начала/конца.'); cards = 103; break}
    default:     sort(cards,elemId);
}
}

//Тест на ошибки массива с карточками возвращает код ошибки если найдена, иначе возвращает массив
/*
@cards - не отсортированнный массив карточек

*/
function cardTest(cards){
    var errorVal = 0;
    
    for (var i = 0; i < cards.length; i++){
        var f = 0;
        if ((cards[0][0] == '') || (cards[0][1] == '')){ return 103;} 
        if (cards[0][0] == cards[0][1]){ return 102;} 
        for (var j = 0; j< cards.length; j++){    
          if((cards[i] == cards[j]) &&  (f == 1)) {return 101;}
           if((cards[i] == cards[j]) &&  (f == 0)) {f =1;}
        }
    }
    return cards;
}


/*
OutText используется для вывода карточек 
@cards - не отсортированный массив карточек
@elemId - id блока, где выводится отсортированные карточки

Сначала очищает блок с id = @elemId, затем переменной cards присваивается ответ функции cardTest();  В случае нахождения ошибки вернет числовое значение, иначе не отсортированный массив карточек. Далее выполняется функция поиска ошибок отчета об ошибке, если переменная cards равно заданному значению из switch то возвращает номер ошибки и сообщение, иначе выполняется функция sort() и выводится ОТСОРТИРОВАННЫЙ массив карточек. Возврат значения cards;
*/
function OutText(cards,elemId){
    if(elemId){
    clearText(elemId);}
    cards = cardTest(cards);
    ErrorFind(cards, elemId);
    return cards;
}
