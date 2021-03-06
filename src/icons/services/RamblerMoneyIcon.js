import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class RamblerMoneyIcon extends Component {

  static displayName = 'RamblerMoneyIcon'

  render() {

    return (
      <SvgIcon { ...this.props } viewBox="0 0 20 20">
        <g>
          <path d="m10 19.69c5.35 0 9.69-4.34 9.69-9.69 0-5.35-4.34-9.69-9.69-9.69-5.35 0-9.69 4.34-9.69 9.69 0 5.35 4.34 9.69 9.69 9.69m0-1.35c-4.6 0-8.34-3.73-8.34-8.34 0-4.6 3.73-8.34 8.34-8.34 4.6 0 8.34 3.73 8.34 8.34 0 4.6-3.73 8.34-8.34 8.34"/>
          <path d="m8.97 7.1h1.72c.49 0 .86.13 1.11.4.25.27.37.61.37 1 0 .4-.12.74-.37 1-.25.26-.62.39-1.11.39h-1.72v-2.81m.56 3.87h1.16c.88 0 1.57-.22 2.06-.67.5-.45.75-1.05.75-1.79 0-.74-.25-1.34-.75-1.79-.5-.45-1.18-.68-2.06-.68h-3.05v3.87h-.65v1.06h.65v.59h-.65v1.07h.65v1.36h1.33v-1.36h2.24v-1.07h-2.24v-.59h.56"/>
        </g>
      </SvgIcon>
    )
  }

}
