import {styleButtonChampMixin} from '../style/mixins'

export default {
  sizes: {
    medium: {
      height: 40,
      icon: 20
    },
    small: {
      height: 30,
      icon: 15
    }
  },
  checkbox: {
    borderColor: '#a5acb2',
    borderRadius: 2,
    hoverBorderColor: '#ff4800',
    activeBorderColor: '#ff4800',
    checkedBorderColor: '#a5acb2'
  },
  button: {
    types: {
      primary: {
        textColor: '#fff',
        loaderColor: '#fff',
        disabledTextColor: '#fff',
        defaultBg: '#ff4800',
        defaultBorder: 'transparent',
        hoverBorder: 'rgba(255, 76, 7, 0.68)',
        hoverBg: '#ff4800',
        activeBorder: 'rgba(255, 76, 7, 0.68)',
        activeBg: '#ff4800',
        focusBorder: 'rgba(255, 76, 7, 0.68)',
        focusBg: '#ff4800',
        loadingBorder: 'rgba(255, 76, 7, 0.68)',
        disabledBorder: '#a5acb2',
        disabledBg: '#a5acb2',
        focusOffset: 0,
        opacity: 0.7,
        borderRadius: 2
      },
      secondary: {
        textColor: '#ff4800',
        activeTextColor: '#ff4800',
        loaderColor: '#ff4800',
        disabledTextColor: '#fff',
        defaultBg: 'rgba(255, 72, 0, 0.2)',
        defaultBorder: 'transparent',
        hoverBorder: 'transparent',
        hoverBg: 'rgba(255, 72, 0, 0.3)',
        activeBorder: 'transparent',
        activeBg: 'rgba(255, 72, 0, 0.4)',
        focusBorder: 'rgba(255, 72, 0, 0.4)',
        focusBg: 'rgba(255, 72, 0, 0.3)',
        loadingBorder: 'rgba(255, 72, 0, 0.3)',
        loadingDot: '#ff4800',
        disabledBorder: '#a5acb2',
        disabledBg: '#a5acb2',
        focusOffset: 0,
        borderRadius: 2
      },
      outline: {
        textColor: '#ff4800',
        activeTextColor: 'rgba(255, 72, 0, .3)',
        loaderColor: '#ff4800',
        disabledTextColor: 'rgba(38, 38, 38, .4)',
        defaultBg: '#fff',
        defaultBorder: '#ccc',
        hoverBorder: '#262626',
        hoverBg: '#fff',
        activeBorder: '#fff',
        activeBg: '#fff',
        focusBorder: 'rgba(255, 72, 0, .3)',
        focusBg: '#fff',
        loadingBorder: '#ccc',
        loadingDot: '#ff4800',
        disabledBorder: '#eee',
        disabledBg: '#eee',
        focusOffset: 0,
        borderRadius: 2
      }
    },
    buttonMixin: (type, options) => ({...styleButtonChampMixin(type, options)})
  },
  input: {
    padding: '0 5px 1px 5px',
    border: 'none',
    borderBottom: '1px solid #d5d5d5',
    height: 36,
    opacity: 0.7,
    '&:focus': {
      borderBottom: '1px solid #000'
    }
  },
  inputRequiredProps: {
    successBorderBottom: {
      borderBottom: '1px solid #28bc00 !important'
    },
    errorBorderBottom: {
      borderBottom: '1px solid #ff564e !important'
    },
    warningBorderBottom: {
      borderBottom: '1px solid #f4c914 !important'
    },
    inputBaseColor: {
      color: '#BEBEBE'
    },
    inputPaddingLeft: {
      paddingLeft: 30
    },
    inputOneIconRight: {
      paddingRight: 30
    },
    inputTwoIconRight: {
      paddingRight: '60px !important'
    },
    inputIconRightWithoutPass: {
      right: 0
    },
    inputEye: {
      top: 7,
      right: 3,
      fill: '#ff4800'
    },
    icon: {
      top: 7,
      left: 0,
      right: 30,
      fill: '#ff4800 !important'
    }
  }
}
