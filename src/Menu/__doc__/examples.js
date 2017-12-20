import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'
import { Menu, MenuItem } from 'rambler-ui/Menu'
import Checkbox from 'rambler-ui/Checkbox'

const data = [...Array(5)].map((item, i) => i%2 ? `Bar${i}` : `Foo${i}`)

export default class MenuExample extends Component {
  state = {
    small: false,
    disabled: false
  }

  toggleValue = (valueKey) => () => {
    this.setState({
      [valueKey]: !this.state[valueKey]
    })
  }

  render() {
    const {state} = this
    return (
      <ApplyTheme>
        <div style={{ maxWidth: 300 }}>
          <div style={{marginBottom: 20}}>
            <Checkbox style={{marginRight: 20}} checked={state.small} onCheck={this.toggleValue('small')}>size: small</Checkbox>
            <Checkbox checked={state.disabled} onCheck={this.toggleValue('disabled')}>disabled</Checkbox>
          </div>
          <Menu
            multiple={true}
            value={state.value}
            onChange={this.setValue}
            size={state.small ? 'small' : 'medium'}
            disabled={state.disabled}
            autoFocus={state.autoFocus}
          >
            {data.map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Menu>
          <div style={{marginTop: 20}}>
            {`state: ${JSON.stringify(this.state.value)}`}
          </div>
        </div>
      </ApplyTheme>
    )
  }
}
