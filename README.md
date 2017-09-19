# react-mvp

Lightweight Model-View-Presenter framework for React.

![Diagram that depicts the Model View Presenter (MVP) GUI design pattern.](https://upload.wikimedia.org/wikipedia/commons/d/dc/Model_View_Presenter_GUI_Design_Pattern.png)

Bootstrapped with [create-react-app-minimal](http://conwy.codes/cram).

## Getting started

### Installing

```
npm install react-mvp
```

### Usage

1. Declare your view, as a "dumb" component, with all input and output taking place through props (values and event handlers).

```js
import React from 'react'

class TodoApp extends Component {
  render = () => {
    const { todoList, newItem, onAddNewItem, onChangeNewItem } = this.props

    return <div>
      <div>
        <label>Enter new item</label>
        <input type="text" onChange={onChangeNewItem} value={newItem} />
        <button onClick={onAddNewItem}>Add</button>
      </div>

      <ul>
        {todoList.map(item =>
          <li>{item}</li>
        )}
      </ul>
    </div>
  }
}
```

2. Declare your model, with any needed defaults.

```js
class TodoAppModel {
  todoList = []

  newItem = ''
}
```

3. Declare your presenter, as a class that inherits from `Presenter` in react-mvp.

```js
import { Presenter } from 'react-mvp'

class TodoAppPresenter extends Presenter {
  constructor(model, setModel) {
    super(model, setModel);
  }

  onChangeNewItem = event =>
    this.setModel({
      newItem: event.target.value
    })

  onAddNewItem = () =>
    this.setModel({
      newItem: '',
      todoList: this.model.todoList.concat([ this.model.newItem ])
    })
}
```

4. Hook them all up together, using `connect`, and render the result. (This example assumes a web-browser.)

```js
import { connect } from 'react-mvp'

const App = connect(TodoAppModel, TodoAppPresenter, TodoApp)

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))
```

## Contributing

You're welcome to fork and/or contribute pull-requests and issues to the project.

### Cloning and installing

```bash
git clone https://github.com/jonathanconway/react-mvp
cd react-mvp
npm install
```

### Running tests

```bash
npm test
```
