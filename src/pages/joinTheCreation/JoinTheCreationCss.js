import CssUtils from '@/utils/CssUtils';

export const styles = theme => ({
  pageContent: {
    marginTop: '56px',
    background: '#EBF0F2',
  },
  dev: {
    background: '#f0f0f0',
    '&>img': {
      display: 'block',
      margin: '0 auto',
      width: '5rem',
      height: '8rem',
    },
    '&>div': {
      color: '#999',
      fontSize: '1.3rem',
      textAlign: 'center',
    }
  }
})