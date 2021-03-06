/**
 * Опция компонента таба
 */
import React, { Component, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

const setThemeForSelector = colors => ({
  borderColor: colors.border,
  color: colors.text
})

@injectSheet((theme) => {
  const {sizes, colors} = theme.tabs
  return {
    tab: {
      extend: isolateMixin,
      display: 'inline-block',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      outline: 'none !important',
      borderStyle: 'solid',
      borderWidth: `0 0 ${theme.tabs.borderWidth}px`,
      background: 'none',
      fontWeight: 500,
      transitionDuration: theme.tabs.animationDuration,
      transitionProperty: 'color, border-color',
      '&::-moz-focus-inner': {
        border: 'none !important',
        outline: 'none !important'
      },
      '&&': setThemeForSelector(colors.default),
      '&$isEnabled$isSelected': setThemeForSelector(colors.selected),
      '&$isEnabled:hover, &$isEnabled:focus': setThemeForSelector(colors.hover),
      '&$isEnabled:active': setThemeForSelector(colors.active),
      '&$isDisabled': setThemeForSelector(colors.disabled),
      '&$isDisabled$isSelected': setThemeForSelector(colors.disabledSelected)
    },
    'size-small': {
      extend: sizes.small,
      lineHeight: 1.36,
      letterSpacing: 1.3,
      textTransform: 'uppercase'
    },
    'size-medium': {
      extend: sizes.medium,
      lineHeight: 1.43
    },
    isDisabled: {
      cursor: 'not-allowed',
      pointerEvents: 'none'
    },
    isEnabled: {},
    isSelected: {}
  }
}, {name: 'TabsItem'})
class TabsItem extends Component {

  static propTypes = {
    /**
     * Значение, соответствующее этому табу
     */
    value: PropTypes.any,
    /**
     * Css-класс компонента
     */
    className: PropTypes.string,
    /**
     * Стили таба
     */
    style: PropTypes.object,
    /**
     * Контент (обычно просто текст)
     */
    children: PropTypes.node,
    /**
     * Размер компонента (автоматически проставляется компонентом `<Tabs/>`)
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Выбран ли этот таб (автоматически проставляется компонентом `<Tabs/>`)
     */
    isSelected: PropTypes.bool,
    /**
     * Отключаем кнопку/ссылку (автоматически проставляется компонентом `<Tabs/>`)
     */
    disabled: PropTypes.bool,
    /**
     * Элемент, который содержит контент, например `<Link />` в случае с `react-router`
     */
    container: PropTypes.element,
    /**
     * Колбек нажатия на элемент (автоматически проставляется компонентом `<Tabs/>`)
     */
    onPress: PropTypes.func
  };

  static defaultProps = {
    size: 'small',
    isSelected: false,
    disabled: false
  };

  handleClick = (event) => {
    const {props} = this
    if (!props.onPress) return
    props.onPress(event, props.value)
  };

  render() {
    const {
      href,
      container,
      children,
      className,
      isSelected,
      disabled,
      size,
      classes: css,
      ...other
    } = omit(this.props, 'theme', 'onPress')

    const resultClassName = classnames(
      className,
      css.tab,
      css[`size-${size}`],
      disabled ? css.isDisabled : css.isEnabled,
      isSelected && css.isSelected
    )

    const elemProps = {
      ...other,
      className: resultClassName,
      onClick: this.handleClick
    }

    let element
    let isLink
    if (container && isValidElement(container)) {
      element = container
      elemProps.activeClassName = css.isSelected
      isLink = true
    } else if (href) {
      element = <a href={ href } />
      isLink = true
    } else {
      element = <button type="button" disabled={ disabled } />
    }

    if (isLink) {
      elemProps['aria-disabled'] = disabled
      elemProps.tabIndex = disabled ? -1 : null
    }

    return cloneElement(element, elemProps, children)
  }
}
TabsItem.displayName = 'ruiTabsItem'

export default TabsItem
