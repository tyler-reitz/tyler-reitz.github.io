import styles from './App.css'

import React from 'react'
import Header from './components/sections/header/Header'
import Main from './components/sections/main/Main'


class App extends React.Component {
  render () {
    return (
      <div className={styles.container}>
          <Header />
          <Main>
            {this.props.children}
          </Main>
      </div>
    )
  }
}

export default App
