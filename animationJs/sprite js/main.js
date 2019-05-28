let styles = {};
styles.width = '65px';  // задаем параметры
styles.height = '135px';

spriteAnimation('mk', 'mk.png', styles); // вызываем функцию

function spriteAnimation(elementId, imgName, styles) { 
	
	let img = document.createElement('img');
	let offset = 0;
	img.onload = function () {  //как только спрайт загружается
		let element = document.getElementById(elementId);
		element.style.width      = styles.width;
		element.style.height     = styles.height;
		element.style.background = "url('" + imgName + "') " + offset + "px 50%"; //меняем стили для нашего элемента
		let i = 0;
		
			interval = setInterval(function() {  //запускаем интервал
				if (offset < img.width) { //для смены позиции изображения
					i=i+30; // если дошли до конца спрайта
				} else { 
					i = 0; // то возвращаемся к началу
				}
				offset = 8.8*i; //сдвиг по слайду
				element.style.background = "url('" + imgName + "') " + offset + "px 50%";  
			} , 1000/6) //меняем позиционирование спрайта
		}
	img.src = imgName; //даем имя нашего спрайта
}
