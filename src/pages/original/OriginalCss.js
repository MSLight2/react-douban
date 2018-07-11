import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  pageContent: {
    ...CssUtils.content,
    ...CssUtils.pageStyle,
  },
  originalItem: {
    ...CssUtils.flexRow,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    background: CssUtils.colorItemBg,
    borderBottom: '1px solid #E1E1E1',
    boxSizing: 'border-box',
    padding: '0.4rem 0.4rem',
    overflow: 'hidden',
    '&:active': {
      background: '#eee',
    },
  },
  authorWirting: {
    height: '4.5rem',
    marginTop: '1rem',
  },
  itemRight: {
    ...CssUtils.flexRow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marTop8: {
    marginTop: '0.8rem',
  },
  rightTxtColor: {
    color: CssUtils.color6AA,
  },
  // ------ 分割线 ------
  awLeft: {
    ...CssUtils.flexCol,
    alignItems: 'flex-start',
  },
  awLeftCounts: {
    ...CssUtils.flexRow,
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
  },
  awLeftCount: {
    width: '1.2rem',
    height: '1.5rem',
    lineHeight: '1.5rem',
    color: CssUtils.color6AA,
    fontSize: '1.2rem',
    fontWeight: 600,
    border: '1px solid #E4ECEE',
    background: '#fff',
    textAlign: 'center',
    marginRight: '0.2rem',
  },
  awText: {
    color: '#333',
    alignSelf: 'flex-end',
    marginTop: '0.4rem',
  },
  awRightTxt: {
    color: CssUtils.color6AA,
    fontWeight: 600,
  },
  // category
  categoryItem: {
    height: '3.7rem',
  },
  ctgLeftTitle: {
    color: '#333',
    fontSize: '1rem',
    letterSpacing: '0.05rem',
    fontWeight: 600,
  },
  ctgLeftCount: {
    fontSize: '0.6rem',
    color: CssUtils.colorTxt,
    marginTop: '0.1rem',
  },
})