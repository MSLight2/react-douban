import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  pageContent: {
    ...CssUtils.pageStyle,
  },
  tabsRoot: {
    ...CssUtils.flexRow,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    height: '3rem',
    color: '#77A4B3',
  },
  tabsIndicator: {
    backgroundColor: '#71CEB5',
  },
  tabRoot: {
    fontWeight: 600,
    '&:hover': {
      color: '#71CEB5',
      opacity: 1,
    },
    '&:focus': {
      color: '#71CEB5',
    },
    '&$tabSelect': {
      color: '#71CEB5',
    }
  },
  tabSelect: {},
  // CNBooks
  bannerImg: {
    height: '9rem',
    '&>img': {
      display: 'block',
      height: '100%',
      width: '100%',
    },
  },
  paginationColor: {
    '& .swiper-pagination-bullet-active': {
      background: '#fff',
    }
  },
  bannerBook: {
    height: '16rem',
    padding: '0.8rem 0 0.4rem',
  },
  paginationBookColor: {
    '& .swiper-pagination-bullet-active': {
      background: '#71CEB5',
    }
  },
  colorSelling: {
    color: '#FF9C59'
  },
  colorPraise: {
    color: '#7CC783',
  },
  colorNewBook: {
    color: '#4DB2E1',
  },
  CNBook: {
    marginTop: '1px',
  },
  CNHoot: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    width: '100%',
    background: '#fff',
    boxSizing: 'border-box',
  },
  hootItem: {
    flexGrow: 1,
    maxWidth: '33.33%',
  },
  bestSelling: {
    background: '#F8F3F0',
    borderTop: '3px solid #FF9C59',
  },
  praise: {
    background: '#F2F6F3',
    borderTop: '3px solid #7CC783',
    marginLeft: '1px',
  },
  newBooks: {
    background: '#EEF6F9',
    borderTop: '3px solid #4DB2E1',
    marginLeft: '1px',
  },
  itemTitle: {
    height: '3rem',
    lineHeight: '3rem',
    fontSize: '0.95rem',
    textAlign: 'center',
    fontWeight: 600,
    letterSpacing: '0.1rem'
  },
  itemImg: {
    width: '6rem',
    height: '9rem',
    background: '#fff',
    margin: '0 auto',
    '&>img': {
      display: 'inline-block',
      border: 0,
      height: '100%',
      width: '100%',
    }
  },
  itemBookTitle: {
    margin: '0.4rem 0',
    padding: '0 0.8rem',
    lineHeight: '1rem',
    minHeight: '2rem',
    maxHeight: '2rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': 2,
  },
  author: {
    margin: '0 0 0.4rem 0',
    padding: '0 0.8rem',
    color: CssUtils.colorTxt,
    fontSize: '0.9rem',
    maxHeight: '1.1rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  itemBtn: {
    textAlign: 'center',
    '&>button': {
      margin: '0.4rem 0 0.8rem 0',
      borderRadius: '5px',
      background: '#fff',
      border: '1px solid #EEE',
    }
  },
  // table
  CNTable: {
    ...CssUtils.flexRow,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    background: '#F8F9F9',
  },
  tableItem: {
    flexGrow: 1,
    maxWidth: '33.3%',
    width: '33%',
    height: '2.5rem',
    lineHeight: '2.5rem',
    borderTop: '1px solid #EEE',
    textAlign: 'center',
    fontSize: '0.95rem',
    color: CssUtils.color6AA,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  bRight: {
    borderRight: '1px solid #EEE',
  },
  bBottom: {
    borderBottom: '1px solid #EEE',
  },
  // ENBook
  ENBannerImg: {
    width: '100%',
    height: '8rem',
    '&>img': {
      display: 'block',
      height: '100%',
      width: '100%',
    }
  }
})