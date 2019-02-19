const AppContext = React.createContext({
  theme: 'dark',
  lang: 'es'
})

console.log("AppContext", AppContext)

class App extends React.Component {
  render() {
    return(
      <AppContext.Provider value={{ ...AppContext._currentValue, lang: 'en' }}>
        <Toolbar />
      </AppContext.Provider>
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
  static contextType = AppContext
  render() {
    console.log("Context", this.context)
    return <Button theme={this.context.theme} lang={this.context.lang} />
  }
}

function Button(props) {
  const msg = {
    en: 'Hello World',
    es: 'Hola Mundo'
  }
  return(
    <button className={props.theme} type="button">
      { msg[props.lang] }
    </button>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)