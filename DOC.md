# ReactDOM
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
# React
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
