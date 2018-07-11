import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  pageContent: {
    ...CssUtils.pageStyle,
  },
  marginTop: {
    marginTop: '0.6rem',
  },
  cartItem: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0.6rem 0.6rem 0.6rem 0',
    background: '#fff',
    boxSizing: 'border-box',
  },
  checkRadio: {
    flexShrink: 0,
    width: '10%',
    height: '100%',
  },
  radioRoot: {
    color: CssUtils.color6AA,
    '&$radioCheck': {
      color: CssUtils.color6AA,
    },
  },
  radioCheck: {},
  cartImg: {
    flexShrink: 0,
    height: '4.5rem',
    width: '3.2rem',
    background: '#fff',
    marginLeft: '0.6rem',
    overflow: 'hidden',
    '&>img': {
      width: '100%',
      height: '100%',
    }
  },
  cartBookDesc: {
    flexGrow: 1,
    ...CssUtils.flexCol,
    justifyContent: 'flex-start',
    marginLeft: '0.6rem',
    height: '4.5rem',
    overflow: 'hidden',
  },
  cbTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#333',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  cbAuthor: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: '0.2rem 0',
    color: CssUtils.colorTxt,
  },
  cbPrice: {
    color: CssUtils.color6AA,
    fontSize: '1.0rem',
    '& span': {
      color: CssUtils.colorTxt,
      textDecoration: 'line-through',
    },
  },
  cbDisPrice: {
    color: '#FA5A60 !important',
    textDecoration: 'none !important',
  },
  // no shop
  noShop: {
    width: '100%',
    textAlign: 'center',
    color: '#BFBFBF',
    fontSize: '1.2rem',
    background: '#f0f0f0',
    paddingTop: '4rem',
  },
  noShopImg: {
    height: '8rem',
    width: '100%',
    '& img': {
      width: '8rem',
      height: '100%',
      display: 'block',
      margin: '0 auto',
    }
  },
  noTitle: {marginTop: '0.5rem',},
  goBtn: {
    '& button': {
      marginTop: '1rem',
      color: '#FFF',
      borderRadius: '5px',
      fontSize: '1rem',
      background: '#6AACB8',
    }
  }
})