# Функц үйлдлүүд
## ReactDOM
### `render()`

```javascript
ReactDOM.render(
  element,
  container,
  [callback]
)
```
Энэ нь таны апп -ын хамгийн дээд түвшинд хэрэглэгддэг. Учир нь ихэнх компонэнтүүд энэ функцийг ашиглах шаардлагагүй бөгөөд зөвхөн эцэг элэментийг тухайн функцэд дамжуулснаар HTML DOM элемэнтэй харилцан ажиллах боломж олгоно. 
#### Жишээ: 
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>App</title>
</head>
<body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
```
```javascript
// app.js
ReactDOM.render(
    React.createElement("h1", {}, "Hello World"),
    document.getElementById("root")
);
```
#### Үр дүн:
[result-1]: (ЗУРАГ 1)
### `findDOMNode()`
Энэ нь нэгэнт компонэнт DOM элэмэнтэд орсон тохиолдолд тухайн элмэнтүүдийн жагсаалтаас хайлт хийж тухайн компонэнтийг хайхад ашигладаг.
#### Жишээ
Энэхүү жишээ нь App компонэнтоос input элэмэнтийг findDOMNode функцын тусламжтай хайж олж input элэмэнтийн утгыг барьж авч дүрслэхэд оршино.
```javascript
// app.js
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class App extends Component {
    state = {
        query: ""
    }

    handleOnChange = () => {
        let searchInput = findDOMNode(this.refs.query);
        this.setState({query: searchInput.value});
    }

    render() {
        const {query} = this.state;
        return (
            <div>
                <input 
                    type="text" 
                    ref="query" 
                    placeholder="Хайх түлхүүр үг..." 
                    onChange={this.handleOnChange}
                />
                <p>
                    Таны хайсан үг: <span style={{color: "red"}}>{query}</span>
                </p>
            </div>
        );
    }
}
```
#### Үр дүн: 
[result-2](зураг 2)
## React
### `createElement()`
```
React.createElement(
  type,
  [props],
  [...children]
)
```
Энэ нь функц нь таны хүссэн төрлөөр React элэмэнт үүсгээд буцаадаг функц юм. Жишээ нь `type` аргумэнт нь `div` болон `span` гэх мэт `html` үндсэн элэмэнт, эсвэл React элэмэнт (`class эсвэл функц`) дамжуулж өгч болно.

#### Жишээ:
```javascript
// app.js
class Hi extends React.Component {
  render() {
    return React.createElement('h1', null, `Hello ${this.props.name}`);
  }
}

ReactDOM.render(
    React.createElement(Hi, {name: "Galt"}, null),
    document.getElementById("root")
);
```
### JSX -ын тухай
```
const element = <h1>Hello, world!</h1>;
```
Энэ нь тэмдэгт мөр ч биш html ч биш нэг тийм сонирхолтой тагын синтакс. Энэ бол JSX. Javascript синтаксын өргөтгөл юм. ReactJS ашиглаж байгаа бол JSX ашиглахын санал болгодог. JSX нь загвар хэлийг санагдуулдаг. Гэхдээ энэ нь javascript бүрэн чадлаар нь ашиглах боломж олгоно.

JSX нь html загвар дотор дата харуулахын тулд нумтай хаалт ашигладаг.
```javascript
// app.jsx
import React, {Component} from "react";

class App extends Component {
    render() {
        const name = "Galt";
        return(
            <h1>Hello {name}</h1>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
```
Javascript -ын хүссэн илэрхийллийг нумтай хаалтан дотор бичиж өгч болно.

Хэрэв JSX ашиглахгүй бол:
```javascript
// app.js
class Hi extends React.Component {
  render() {
    return React.createElement('h1', null, `Hello ${this.props.name}`);
  }
}

ReactDOM.render(
    React.createElement(Hi, {name: "Galt"}, null),
    document.getElementById("root")
);
```


# Технологийн хэрэглээ
## ReactJS ашиглагдаг системүүд
Хүмүүс ямар нэг сайт, эсвэл веб апп луу хандахад хөтөч олон дахин ачааллах хэрэг гардаг. Үүнээс шалтгаалж удах, гацах янз бүрийн асуудлууд тулгардаг. Энэ асуудлыг SPA (Single Page Application) - буюу нэг хуудсан дээр бүх үйлдэлээ хийдэг веб апп асуудлыг шийддэг. Энэ нь хөтөчийг дахин ачааллах шаардлаггүйгээр нэг удаа л ачааллахад хангалттай. Хэрэгтэй гэсэн хэсгүүдээдээ шинэчлэх замаар ажилладаг апп юм. Ийм апп хийхийн тулд ReactJS ашиглахад хамгийн тохиромжтой. ReactJS хуудсыг бүхлээр нь бус яг шаардлагатай гэсэн хэсгийн мэдээллийг шинэчллэх замаар ажилладаг учир маш хурдан, найдвартай ажилладаг.

### Facebook:
ReactJS хамгийн анх 2011 онд Facebook(Олон нийтийн сүлжээ) -ын мэдээний хэсэгт ашиглагдаж эхэлсэн.
[facebook-2011]()
### Instragram:
Instagram(Зураг хуваалцдаг апп) бол бүхэлдээ ReactJS, 2012 оноос эхлэн ReactJS ашиглаж эхэлсэн. Энэ нь маш олон онцлогуудыг асуулдаг. Газрын байршилууд, Google Map API, хайлтын системийн нарийвчлалууд, хэш таг ашиглалгүйгээр гарч ирдэг олон тооны шинж чанарууд, энэ бүгд нь апп -ын API байдаг.

### Netflix
React нь Netflix-тэй ажилладаг бөгөөд ялангуяа вэб хөтчүүдэд ашигласан DOM-ийн оронд бага үзүүлэлттэй ТВ төхөөрөмжүүдэд хэрэглэдэг Гиббон хэмээх платформ дээр ажилладаг. Netflix -д ReactJS тэдний ачааллах хурд, ажиллах үеийн гүйцэтгэл, модуляци болон бусад олон давуу талуудад хэрхэн тусалдаг талаар тайлбарласан албан ёсны блогтоо нийтэлсэн байдаг.
#### Нийтлэл: 
Бидний React сонгосон шалтгаан хэд хэдэн хүчин зүйлээс тодорхойлогдоно.
1. Ачааллах хурд
2. Ажиллах үеийн хурд
3. Модуляци


#### Жишээ нь: 
ReactJS ашигладаг томоохон хэмжээний 500 гариу компани байдаг.
[react-company](react-company)


## Хамтран ажилладаг технологиуд
ReactJS нь MVC(Model View Controller) -ын V(View) буюу харагдац гэж явдаг. Зөвхөн харагдац хэсгийг шийддэг. Ийм учраас хүссэн веб, мобайл технологитой, өөр бусад js сантай хамтарч ажиллах боломжтой. 
#### Жишээ нь: 
AXIOS, JQUERY, .NET C# MVC ... гэх мэт хүссэн технологитэй холбогдож ажиллах бүрэн боломжтой. 

## Хөгжүүлж болох системүүд
ReactJS энгийн сайт хийхээс илүү веб апп хийхэд зориулагдсан. Хөтөчийг дахин ачаалалдаггүй, бодит хугацааны бодолт хийдэг. Сокет ашигладаг веб апп хийхэд илүү тохиромжтой. 
#### Жишээ нь: 
* Чат
* Гэрийн автоматжуулалтын систем
* Видео стриминг
* Олон нийтийн сүлжээ
