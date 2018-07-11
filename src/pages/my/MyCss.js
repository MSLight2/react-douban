import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  pageContent: {
    ...CssUtils.content,
    ...CssUtils.pageStyle,
  },
  marTop8: {
    marginTop: '0.8rem',
  },
  // ------ 分割线 ------
  headItem: {
    ...CssUtils.flexRow,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '4.5rem',
    padding: '0.4rem 0.4rem 0.4rem 0.8rem',
    background: '#fff',
    boxSizing: 'border-box',
    '&:active': {
      background: '#FAFAFA',
     },
  },
  headItemImg: {
    color: '#DEDEDE',
    fontSize: '2.5rem',
  },
  headItemNickName: {
    color: CssUtils.color6AA,
    fontSize: '1rem',
    marginLeft: '0.4rem',
    borderRadius: '50%'
  },
  headItemEdit: {
    color: CssUtils.color6AA,
    fontSize: '0.8rem',
    marginLeft: '0.4rem',
    fontWeight: 600,
  },
  myItem: {
   ...CssUtils.flexRow,
   justifyContent: 'space-between',
   alignItems: 'center',
   height: '3rem',
   padding: '0.4rem 0.8rem 0.4rem 0.8rem',
   boxSizing: 'border-box',
   borderBottom: '1px solid #F4F4F4',
   background: '#fff',
   overflow: 'hidden',
   '&:active': {
     background: '#FAFAFA',
    },
  },
  myItemLeft: {
    ...CssUtils.flexRow,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  myItemTxt: {
    marginLeft: '0.6rem',
    fontSize: '0.96rem',
    letterSpacing: '0.1rem',
  },
  myItemRightTxt: {
    fontSize: '0.8rem',
    color: CssUtils.color6AA,
    fontWeight: 600,
  },
  iconColor: {
    color: '#3E4347',
  }
})