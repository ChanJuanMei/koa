import React, { Component } from 'react'
import {ThemesContext} from './theme-context';

export default class ThemedButton extends Component {
  render() {
    let props=this.props;
    let theme = this.context;
    return (
      <button {...props} style={{backgroundColor: theme.background}} />
    )
  }
}
ThemedButton.contextType = ThemesContext

