import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  pageContent: {
    marginTop: '56px',
    background: '#F8F9F9',
    minHeight: 'calc(100% - 56px)',
  },
  bookListItem: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    background: '#F8F9F9',
    padding: '1rem',
    boxSizing: 'border-box',
    borderBottom: '1px solid #eee',
  },
  bookListImg: {
    flexShrink: 0,
    height: '8rem',
    width: '5.5rem',
    background: '#fff',
    '&>img': {
      display: 'block',
      height: '100%',
      width: '100%',
    }
  },
  bookListCnt: {
    flexGrow: 1,
    marginLeft: '0.8rem',
    overflow: 'hidden',
  },
  blTitle: {
    fontWeight: 600,
    fontSize: '0.98rem',
    '&>span': {
      marginLeft: '0.4rem',
      padding: '0.1rem 0.2rem',
      background: '#68ABB7',
      borderRadius: '2px',
      color: '#fff',
      fontWeight: 100,
      fontSize: '0.7rem',
      verticalAlign: 'baseline',
      wordBreak: 'keep-all'
    },
  },
  blAuthor: {
    margin: '0.6rem 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: CssUtils.colorTxt,
  },
  starRate: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: CssUtils.colorTxt,
  },
  starCnt: {
    flexShrink: 0,
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    '&>svg': {
      fontSize: '0.9rem',
      color: CssUtils.colorTxt,
    }
  },
  starActive: {
    color: '#FA5B61 !important',
  },
  starText: {
    fontSize: '0.8rem',
    marginLeft: '0.2rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&>span': {
      color: '#FA5B61',
    }
  },
  blDesc: {
    maxHeight: '3.5rem',
    lineHeight: '1.2rem',
    marginTop: '0.6rem',
    overflow: 'hidden',
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': 3,
    color: CssUtils.colorTxt,
  },
  blPrice: {
    marginTop: '0.4rem',
    color: CssUtils.color6AA,
    fontWeight: 600,
  }
})