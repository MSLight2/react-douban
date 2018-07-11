import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  categotyItem: {
    ...CssUtils.flexCol,
    padding: '1rem 0.8rem',
    background: CssUtils.colorItemBg,
    borderBottom: '1px solid #EEE',
    minHeight: '15rem',
  },
  ctgTop: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#333',
    fontWeight: 600,
    fontSize: '0.95rem',
  },
  ctgIcon: {
    fontSize: '1rem',
    marginRight: '0.4rem',
  },
  ctgTopTitle: {
    fontSize: '0.7rem',
    fontWeight: 600,
    maxHeight: '3.5rem',
    marginTop: '0.2rem',
    overflow: 'hidden',
  },
  ctgContain: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    marginTop: '0.8rem',
  },
  ctgContainItem: {
    ...CssUtils.flexCol,
    flexGrow: 1,
    maxWidth: '33.33%',
    alignItems: 'center',
    textAlign: 'center',
  },
  ctgItemImg: {
    textAlign: 'center',
    width: '6rem',
    height: '9rem',
    background: '#fff',
    '&>img': {
      width: '100%',
      height: '100%',
    },
  },
  ctgItemBookTitle: {
    width: '100%',
    padding: '0 0.4rem',
    margin: '0.3rem 0',
    lineHeight: '1rem',
    minHeight: '2rem',
    maxHeight: '2rem',
    boxSizing: 'border-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': 2,
  },
  ctgAuthor: {
    width: '100%',
    maxHeight: '1.1rem',
    margin: '0 0 0.4rem 0',
    padding: '0 0.5rem',
    boxSizing: 'border-box',
    color: CssUtils.colorTxt,
    fontSize: '0.9rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  ctgPrice: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    margin: '0.2rem 0',
    padding: '0 0.3rem',
    alignItems: 'center',
    fontSize: '0.9rem',
  },
  dollar:{
    color: CssUtils.color6AA,
    fontSize: '0.95rem',
    '& span:last-child': {
      color: '#FA6C71',
    }
  },
  discountPrice: {
    textDecoration: 'line-through',
    color: '#dfdfdf',
  },
  ctgBtn: {
    textAlign: 'center',
    margin: '0.4rem 0',
    '& button': {
      padding: '0 0.8rem',
      borderRadius: '5px',
      background: '#fff',
      color: CssUtils.color6AA,
      border: '1px solid #EEE',
    }
  }
})
