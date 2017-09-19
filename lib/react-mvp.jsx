import React from 'react'

class Container extends React.Component {
  constructor(props) {
    super(props)

    const Model = props.model
    this.state = new Model()

    const Presenter = props.presenter
    this.presenter = new Presenter(this.state, this.updateState)
  }

  updateState = newState => this.setState(newState)

  componentWillUpdate(nextProps, nextState) {
    const Presenter = nextProps.presenter
    this.presenter = new Presenter(nextState, this.updateState)

    this.props.persistStore &&
      this.props.persistStore(nextState)
  }

  render = () => <this.props.component {...this.state} {...this.presenter} />
}

class Presenter {
  constructor(model, setModel) {
    this.model = model
    this.setModel = setModel
  }
}

const connect = (Model, Presenter, Component, persistStore) => () =>
  <Container model={Model} presenter={Presenter} component={Component} persistStore={persistStore} />


export { connect, Presenter }