import React, { Component } from 'react'
import ThemedButton from './themed-button'
import { ThemeContext, themes } from './theme-context'

function Toolbar(props){
    return (
        <ThemedButton onClick={props.changeTheme}>
            change theme
        </ThemedButton>
    )
}

class ContextTest extends Component {
    state={
        theme: themes.light
    }
    toggleTheme = () => {
        this.setState(state => ({
            theme:
              state.theme === themes.dark
                ? themes.light
                : themes.dark,
          }));
    }
    render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    console.log(this.state.theme);
    
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                    <Header />
                    
                </ThemeContext.Provider>
            </div>
        );
    }
}

class Header extends Component {
    render(){
        return (
            <ThemeContext.Consumer>
                {context => (
                <h1 style={{background: context.background}}>
                    Hello React Context API
                </h1>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default ContextTest

