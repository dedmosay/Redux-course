import React, {Component} from 'react'

class App extends Component {

    render() {
        console.log(this.props)
        const {counter} = this.props
        return(
            <div>
                {counter}
                <button onClick={this.props.onAdd}>onAdd</button>
                <button onClick={this.props.onSub}>onSub</button>
            </div>
        )
    }
}

export default App;