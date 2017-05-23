import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class MailruIcon extends Component {

  static displayName = 'MailruIcon'

  static defaultProps = {
    color: '#ffa930'
  }

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 17 17">
        <path d="M11.436 8.159c-.097-1.88-1.492-3.01-3.177-3.01h-.063c-1.945 0-3.023 1.529-3.023 3.266 0 1.945 1.305 3.173 3.015 3.173 1.907 0 3.162-1.397 3.252-3.05l-.004-.38zm-3.23-4.692c1.298 0 2.52.574 3.417 1.473v.004c0-.432.29-.757.694-.757h.102c.63 0 .76.596.76.785l.003 6.712c-.044.44.454.666.73.385 1.077-1.108 2.367-5.694-.67-8.352-2.83-2.477-6.628-2.069-8.648-.676-2.147 1.48-3.521 4.758-2.187 7.836 1.455 3.358 5.618 4.359 8.092 3.36 1.253-.505 1.832 1.188.53 1.742-1.965.838-7.438.753-9.994-3.675C-.692 9.314-.6 4.052 3.98 1.326 7.485-.759 12.105-.18 14.89 2.728c2.913 3.042 2.743 8.737-.098 10.953-1.286 1.005-3.198.026-3.186-1.44l-.013-.48a4.78 4.78 0 0 1-3.388 1.409c-2.567 0-4.826-2.26-4.826-4.825 0-2.593 2.26-4.878 4.826-4.878z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
