import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { BasicList } from './components/SearchList/index'


export class SearchPage extends React.Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
        <div>
          {BasicList}
        </div>
        </ThemeProvider>
      )
    }
  }
  