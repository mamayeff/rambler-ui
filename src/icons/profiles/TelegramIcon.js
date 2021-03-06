import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class TelegramIcon extends Component {

  static displayName = 'TelegramIcon'

  static defaultProps = {
    color: '#179cde'
  }

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 16 14">
        <path d="M19 17H-1m0-20h20M15.968.784c.021.061.033.19.032.319-.001.093-.013.179-.021.314-.085 1.377-2.64 11.659-2.64 11.659s-.153.602-.701.622c-.2.008-.442-.033-.732-.282-.576-.496-1.914-1.445-3.156-2.303-.375.315-1.125.964-1.899 1.738-1.099 1.098-.957 0-.957 0l.337-3.584.008.005a.32.32 0 0 1 .041-.066s6.469-5.75 6.64-6.354c.014-.047-.036-.07-.104-.05-.43.158-7.878 4.862-8.7 5.381-.048.03-.182.011-.182.011L.32 7.017s-.431-.176-.293-.573c.029-.082.087-.152.259-.272.801-.558 14.82-5.597 14.82-5.597s.396-.133.63-.045c.107.041.175.087.232.254" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
