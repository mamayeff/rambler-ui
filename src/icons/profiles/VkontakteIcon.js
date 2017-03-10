import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class VkontakteIcon extends Component {

  static displayName = 'VkontakteIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 18 11">
        <path d="M8.807 10.876h1.076s.325-.038.49-.228c.154-.175.149-.502.149-.502s-.022-1.55.648-1.776c.661-.222 1.509 1.482 2.408 2.138.68.495 1.196.368 1.196.368l2.405.002s1.257-.102.66-1.151c-.048-.086-.347-.777-1.787-2.197-1.507-1.485-1.305-1.244.51-3.815 1.106-1.564 1.548-2.52 1.41-2.929-.132-.39-.94-.323-.94-.323H14.32s-.2-.02-.349.073c-.145.092-.239.333-.239.333s-.428 1.233-1 2.263c-1.205 2.173-1.687 2.288-1.884 2.153-.458-.315-.344-1.264-.344-1.938 0-2.105.301-2.984-.585-3.211C9.625.06 9.41.01 8.656.002 7.69-.008 6.872.006 6.41.246c-.308.16-.546.517-.4.537.178.026.583.116.798.428.278.4.267 1.3.267 1.3s.16 2.48-.372 2.787c-.365.211-.865-.22-1.94-2.192-.55-1.01-.965-2.148-.965-2.148s-.08-.208-.224-.32A1.076 1.076 0 0 0 3.158.46L.588.461S.2.473.058.651c-.127.159-.01.487-.01.487s2.013 5.04 4.293 7.56c2.091 2.312 4.465 2.178 4.465 2.178z" fill="#5c7da4" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
