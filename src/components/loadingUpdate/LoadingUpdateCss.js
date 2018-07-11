export const styles = theme => ({
  pullUpLoading: {
    position: 'relative',
    height: '3rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pullDownLoading: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '2.5rem',
    height: '2.5rem',
    margin: '0 auto',
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.25)',
    transition: 'all ease-in'
  },
})