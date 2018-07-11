import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  pageContent: {
    ...CssUtils.pageStyle,
  },
  classifyItem: {
    ...CssUtils.flexCol,
    justifyContent: 'flex-start',
  },
  topTitle: {
    height: '1.5rem',
    lineHeight: '1.5rem',
    fontSize: '1rem',
    fontWeight: 600,
    boxSizing: 'border-box',
    margin: '0.4rem 0.4rem',
    paddingLeft: '0.2rem',
    borderLeft: '4px solid #68ABB7',
  },
  subCnt: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    width: '100%',
    flexWrap: 'wrap',
    padding: '0.2rem 0.6rem',
    marginBottom: '0.2rem',
    '&>div': {
      background: '#fff',
      padding: '0.8rem 1rem',
      margin: '0.4rem 0.4rem 0 0',
      fontSize: '0.95rem',
      textAlign: 'center',
      borderRadius: '5px',
      color: '#68ABB7',
    }
  }
})