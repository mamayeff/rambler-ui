import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class ClearIcon extends Component {

  static displayName = 'ClearIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path d="M7.5 6.58L1.742.824a.4.4 0 0 0-.565 0l-.354.354a.4.4 0 0 0 0 .565L6.581 7.5.823 13.258a.4.4 0 0 0 0 .565l.354.354a.4.4 0 0 0 .565 0L7.5 8.419l5.758 5.758a.4.4 0 0 0 .565 0l.354-.354a.4.4 0 0 0 0-.565L8.419 7.5l5.758-5.758a.4.4 0 0 0 0-.565l-.354-.354a.4.4 0 0 0-.565 0L7.5 6.581z" />
      </SvgIcon>
    )
  }

}
