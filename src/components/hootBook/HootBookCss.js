import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  hootBook: {
    background: '#F8F9F9',
    boxSizing: 'border-box',
    marginTop: '0.8rem',
  },
  hootTitle: {
    height: '3.5rem',
    lineHeight: '3.5rem',
    padding: '0 0.8rem',
    textAlign: 'left',
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: 600,
    '&>span': {
      padding: '0.05rem 0.2rem',
      marginRight: '0.2rem',
      textAlign: 'center',
      background: '#BC9B70',
      borderRadius: '3px',
      fontWeight: 100,
      fontSize: '0.8rem',
      color: '#fff',
    },
  },
  hootItem: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    height: '3.5rem',
    padding: '0.4rem 0.8rem',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '&:nth-of-type(2n)': {
      background: '#fff',
    }
  },
  hootBg: {
    width: '1.8rem',
    height: '2.7rem',
    lineHeight: '2.7rem',
    background: '#5DCAAD',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 600,
  },
  hootImg: {
    width: '2rem',
    height: '100%',
    '&>img': {
      width: '100%',
      height: '100%',
      background: '#fff',
    },
  },
  hootDesc: {
    flexGrow: 1,
  },
  hootDescTitle: {
    fontSize: '1rem',
    color: '#333',
    marginLeft: '0.2rem',
  },
  hootAuthor: {
    fontSize: '0.8rem',
    color: CssUtils.colorTxt,
    marginTop: '0.2rem',
    marginLeft: '0.2rem',
  },
  colorFirst: {
    background: '#FA595F',
  },
  colorSconed: {
    background: '#FF9E2C',
  },
})