import React, { Component } from 'react';
import Utils from '@/utils/util';
import LoadingUpdate from '@/components/loadingUpdate/LoadingUpdate';

const STATUS = {
  init: 'init',
  scroll: 'scroll',
  pullRefresh: 'pullRefresh',
  refreshing: 'refreshing',
  refreshed: 'refreshed'
}

export default class ReactRefreshScroll extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mTranslateY: 0,
      startY: 0,
      endY: 0
    }
    this.scrollRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  componentDidMount () {
    Utils.addEventHandler(window, 'scroll', this.handleScroll, true)
    this._initialTouch = {
      startY: 0,
      scrollTop: 0,
      statue: STATUS.pullRefresh
    }
  }

  componentWillUnmount () {
    Utils.removeEventHandler(window, 'scroll', this.handleScroll, true)
    this._initialTouch = {
      startY: 0,
      scrollTop: 0,
      statue: STATUS.pullRefresh
    }
  }

  // 拖拽的缓动公式 - easeOutSine
  easing(distance) {
    // t: current time, b: begInnIng value, c: change In value, d: duration
    var t = distance;
    var b = 0;
    var d = window.innerHeight; // 允许拖拽的最大距离
    var c = d / 2.5; // 提示标签最大有效拖拽距离

    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  }

  canPullRefresh () {
    return this.props.isUpload && this._initialTouch.scrollTop <= 0 && this._initialTouch.statue === STATUS.pullRefresh;
  }

  handleScroll (e) {
    let target = e.target;
    // 除滚动列表外，遮挡可视区的元素高度(在此默认112，既上下浮动tab的高度)
    let overflowHeight = this.props.overflowHeight || 56;
    if (target.scrollTop <= 0) {
      this._initialTouch.scrollTop = 0;
      if (this._initialTouch.statue !== STATUS.refreshing || this._initialTouch.statue !== STATUS.refreshed) {
        this._initialTouch.statue = STATUS.pullRefresh;
      }
    } else {
      this._initialTouch.scrollTop = target.scrollTop;
      this._initialTouch.statue = STATUS.scroll;
    }
    // 滚动距离大于一屏时回调
    if (target.scrollTop >= window.innerHeight) {
      if (this.props.handleScrollDistance) {
        this.props.handleScrollDistance();
      }
    }
    // 到底了
    if ((target.scrollTop + window.innerHeight - overflowHeight) >= this.scrollRef.current.clientHeight) {
      this.props.handleToBottom();
    }
  }

  handleTouchStart (e) {
    if (!this.canPullRefresh()) return;
    this._initialTouch.startY = e.touches[0].clientY
  }

  handleTouchMove (e) {
    if (!this.canPullRefresh()) return;
    let mTranslateY = e.changedTouches[0].clientY - this._initialTouch.startY;
    mTranslateY = this.easing(mTranslateY)
    this.setState({mTranslateY: mTranslateY});
  }

  handleTouchEnd (e) {
    if (!this.canPullRefresh()) return;
    let mTranslateY = 0;
    if (this.state.mTranslateY < this.easing(window.innerHeight / 3)) {
      mTranslateY = 0;
    } else {
      mTranslateY = this.easing(window.innerHeight / 3)
      this._initialTouch.statue = STATUS.refreshing;
    }
    this.setState({mTranslateY: mTranslateY});
    // 回调
    if ([STATUS.refreshing, STATUS.refreshed].indexOf(this._initialTouch.statue) !== -1) {
      if (this.props.handlePullRefresh) {
        this.props.handlePullRefresh().then((res) => {
          this._initialTouch.startY = 0;
          this._initialTouch.scrollTop = 0;
          this._initialTouch.statue = STATUS.pullRefresh;
          this.setState({mTranslateY: 0});
        })
      } else {
        this._initialTouch.startY = 0;
        this._initialTouch.scrollTop = 0;
        this._initialTouch.statue = STATUS.pullRefresh;
        this.setState({mTranslateY: 0});
      }
    }
  }

  render () {
    let { isUpload } = this.props;
    let { mTranslateY } = this.state;
    let style = mTranslateY ? {
      transform: `translate3d(0,${mTranslateY}px,0)`
    } : null;
    return (
      <div
        ref={this.scrollRef}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        {
          isUpload && (
            <LoadingUpdate
              type='down'
              style={style}
            />
          )}
        {this.props.children}
      </div>
    )
  }
}