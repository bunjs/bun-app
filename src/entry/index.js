
import Icon from '../static/img/img.jpeg';
import styles from '../static/css/a.css';

function component() {
	var element = document.createElement('div');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());