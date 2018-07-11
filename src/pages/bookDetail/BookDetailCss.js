import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  pageContent: {
    paddingTop: '56px',
    marginBottom: '56px',
    background: '#F8F9F9',
  },
  bookDesc: {
    ...CssUtils.flexRow,
    justifyContent: 'space-between',
    background: '#fff',
    boxSizing: 'border-box',
    padding: '1rem 0.8rem',
  },
  bookLeft: {
    flexGrow: 1,
    marginRight: '0.8rem',
    width: '60%',
  },
  bookRight: {
    flexShrink: 0,
    background: '#fafafa',
    width: '6rem',
    height: '9rem',
    overflow: 'hidden',
    '&>img': {
      width: '100%',
      height: '100%',
      display: 'block',
    }
  },
  bookTitle: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },
  bookTitleDesc: {
    marginTop: '0.4rem',
    wordBreak: 'normal',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  bookRateLevel: {
    '&>span': {
      color: '#FA5B61',
    },
  },
  rateStar: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    margin: '0.8rem 0',
    color: CssUtils.colorTxt,
    '&>div': {
      marginRight: '0.4rem',
    },
    '&>span': {
      fontSize: '0.75rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }
  },
  starRateStar: {
    color: '#DDDDDD',
    fontSize: '1rem',
  },
  active: {
    color: '#FA5B61',
  },
  rateLevel: {
    display: 'inline-block',
    padding: '0.15rem 0.4rem',
    border: '1px solid #eee',
    borderRadius: '3px',
    textAlign: 'center',
    color: CssUtils.colorTxt,
    fontSize: '0.8rem',
  },
  levelStar: {
    color: '#42BD56',
    fontSize: '1rem',
    verticalAlign: 'sub',
  },
  otherCnt: {
    color: CssUtils.colorTxt,
    marginTop: '0.4rem',
  },
  bookPrice: {
    marginTop: '0.4rem',
    color: '#61B39B',
    fontSize: '1rem',
    fontWeight: 500,
  },
  topTitle: {
    fontSize: '1rem',
    fontWeight: 600,
  },
  itemBox: {
    padding: '1rem 0.8rem 0.4rem 0.8rem',
    borderBottom: '1px solid #eee',
    '& ul': {
      padding: '0 1.5rem',
    },
    '& ul li': {
      listStyle: 'initial',
    },
  },
  itemBoxBtn: {
    textAlign: 'center',
    '&>button': {
      color: CssUtils.color6AA,
      marginBottom: '0.4rem',
      padding: '0 2rem',
      minWidth: '11rem',
      borderRadius: '5px',
      background: '#fff',
      border: '1px solid #EEE',
    },
  },
  // 简介
  introduceDesc: {
    lineHeight: '1.5rem',
    fontSize: '0.95rem',
    // maxHeight: '7.5rem',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'normal',
    // '-webkit-line-clamp': 5,
  },
  txtStar: {
    fontSize: '1.1rem',
    color: '#666',
    verticalAlign: 'middle',
  },
  moreBtn: {
    textAlign: 'center',
    color: CssUtils.color6AA,
  },
  // 出版方
  publisher: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '0.8rem',
    fontWeight: 600,
    fontSize: '0.95rem',
    '&>img': {
      display: 'block',
      height: '2.5rem',
      width: '2.5rem',
      background: '#eee',
      marginRight: '0.8rem',
      borderRadius: '50%',
    }
  },
  // 评论
  commentItem: {
    ...CssUtils.flexCol,
    marginTop: '1rem',
  },
  cmtStar: {
    color: '#DDDDDD',
    fontSize: '0.9rem',
  },
  cmtActive: {
    color: '#F9C300'
  },
  cmtCnt: {
    fontSize: '0.95rem',
  },
  cmtBottom: {
    ...CssUtils.flexRow,
    justifyContent: 'space-between',
    marginBottom: '1rem',
    color: CssUtils.colorTxt,
    fontSize: '0.9rem',
  },
  btmBtn: {
    color: CssUtils.color6AA,
    fontSize: '0.8rem',
    '&>svg': {
      fontSize: '0.8rem',
      verticalAlign: 'sub',
    }
  },
  btmSvg: {
    fontSize: '0.2'
  },
  // 标签
  tag: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    margin: '0.4rem 0',
    '&>span': {
      marginRight: '0.4rem',
      height: '2.2rem',
      lineHeight: '2.2rem',
      marginTop: '0.4rem',
      padding: '0 0.8rem',
      background: CssUtils.color6AA,
      textAlign: 'center',
      color: '#fff',
      fontSize: '0.95rem'
    }
  },
  // may you like
  bookItemCnt: {
    ...CssUtils.flexRow,
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    marginTop: '1rem',
  },
  bookItem: {
    flexGrow: 1,
    maxWidth: '33.33%',
    textAlign: 'center',
    '&>img': {
      display: 'block',
      height: '9rem',
      width: '6rem',
      margin: '0 auto',
      background: '#eee',
    }
  },
  biTitle: {
    maxHeight: '2rem',
    padding: '0.8rem 0.4rem 0.2rem 0.4rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    '-webkit-line-clamp': 2,
  },
  biAuthor: {
    padding: '0.2rem 0.6rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: CssUtils.colorTxt,
    fontSize: '0.8rem',
  },
  // car tab
  carTab: {
    ...CssUtils.flexRow,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50px',
    borderTop: '1px solid #eee',
    background: '#fff',
    color: '#fff',
    overflow: 'hidden',
  },
  cartIcon: {
    width: '22%',
    textAlign: 'center',
    '&>svg': {
      color: '#68ABB7',
      fontSize: '1.8rem',
    }
  },
  carLine: {
   borderRight: '1px solid #eee',
   marginRight: '-1px',
  },
  cartBtn: {
    width: '28%',
    height: '100%',
    lineHeight: '50px',
    textAlign: 'center',
    background: '#5DCAAD',
  },
  colorBuy: {
    background: '#7DD5BD',
  }
})
