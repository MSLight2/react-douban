import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  homeItem: {
    ...CssUtils.flexCol,
    padding: '0.8rem 0.8rem 0.4rem',
    background: CssUtils.colorItemBg,
  },
  itemMarginTop: {
    marginTop: '0.8rem',
  },
  itemCnt: {
    ...CssUtils.flexRow,
    color: '#333',
  },
  itemLeft: {
    flex: 1,
    marginRight: '0.8rem',
  },
  itemLeftTitle: {
    display: 'block',
    marginTop: '0.8rem',
    color: '#333',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  itemLeftSubTitle: {
    display: 'block',
    margin: '0.4rem 0',
    color: CssUtils.colorTxt,
    fontSize: '0.8rem',
  },
  itemLeftP: {
    maxHeight: '3.8rem',
    minHeight: '3rem',
    fontWeight: 500,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': 3,
  },
  itemRight: {
    flexShrink: 0,
    width: '6rem',
    height: '9rem',
    alignSelf: 'center',
  },
  // 评分
  itemRate: {
    color: CssUtils.colorTxt,
    marginBottom: '0.2rem',
  },
  starRate: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  starRateStar: {
    fontSize: '0.9rem',
    color: CssUtils.colorTxt,
  },
  active: {
    color: '#FA5B61',
  },
  rateSpan: {
    margin: '0 0.3rem',
    fontSize: '0.8rem',
  },
  rateSpanCount: {
    color: '#FA5B61',
    fontWeight: 600,
  },
  itemBtnCnt: {
    textAlign: 'right',
  },
  itemBtn: {
    color: '#ABC6CF',
  },
})