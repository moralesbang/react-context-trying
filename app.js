const ThemeContext = React.createContext('light')

class App extends React.Component {
  render() {
    return(
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  return(
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button themeStyle={this.context} />
  }
}

function Button(props) {
  return(
    <button className={props.themeStyle} type="button">
      Hello World!
    </button>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)