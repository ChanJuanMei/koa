import React, { Component } from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: 'red'
  },
  dark: {
    foreground: '#ffffff',
    background: '#607D8B'
  }
}
export const ThemeContext = React.createContext(
  themes.light
)