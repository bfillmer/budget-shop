
const helloFactory = function ({ React }) {

  // Define our property types.
  const {
    string,
    func
  } = React.PropTypes

  // Return our functional React declartion.
  return function Hello (props) {

    // React wants propTypes & defaultProps
    // to be static.
    Hello.propTypes = {
      word: string,
      mode: string,

      actions: React.PropTypes.shape({
        setWord: func.isRequired,
        setMode: func.isRequired
      })
    }

    return {

      props,

      // Component DOM updates, not initial render.
      componentDidUpdate () {
        this.refs.wordInput.focus()
      },

      // Initial component render.
      render () {

        // Pull props in to local scope.
        const {
          word,
          mode
        } = this.props

        // Actions this component can perform.
        const {
          setMode,
          setWord
        } = this.props.actions

        // Inline styles. Apparently the new cool. Toggles basic styles
        // based on current mode.
        const styles = {
          displayMode: {
            display: (mode === 'display') ? 'inline' : 'none'
          },

          editMode: {
            display: (mode === 'edit') ? 'inline' : 'none'
          }
        }

        // Check that Enter has been pressed, if so fire off
        // setting the data and the mode.
        const onKeyUp = function (e) {
          if (e.key !== 'Enter') return

          setWord(e.target.value)
          setMode('display')
        }

        // Return our JSX goodness.
        return (
          <p>Hello,&nbsp;
            <span
              style = { styles.displayMode }
              onClick = { () => setMode('edit') }
              >{ word }!</span>
            <input
              ref = "wordInput"
              style = { styles.editMode }
              placeholder = { word }
              onKeyUp = { onKeyUp } />
          </p>
        )
      }
    }

  }

}

export default helloFactory
