# 技术栈： #
react + redux + webpack + react-router4 + ES6 + material-ui
##项目运行
    git clone

    cd react-douban

    npm i 或 cnpm i (安装依赖)

    npm start (运行)

    npm run build (发布)```
##说明
> 本项目是模仿【豆瓣阅读】app开发的一个单页面应用程序。

> 开发环境：win7 + Chrome 66 + nodejs v8.9.3

> 如果觉得还行的话，您可以点右上角 "Star"，谢谢O(∩_∩)O~

> 项目还有很多未完善的方面，如您有更好的方法和问题，欢迎在Issues中提出，一起进步^_^

>此项目仅供学习使用，请勿做其它用途。如有侵权，请联系本人qq：1841978799删除
##个人总结
###react开发中的注意点
* 牢记props和state的注意点和作用及区别
* 慎用setState，因为会导致重复渲染。
* 慎将component当作props传入。
* 请将方法的bind一律置于constructor
* 在Component的render里不动态bind方法，如果要动态传参，方法可使用闭包返回一个最终可执行函数。如：showDelBtn(item) { return (e) => {}; }
* 路由模块动态加载
* 要提升项目性能使用immutable
* 多看官方文档 - 。 -
##React组件生命周期函数`v15.6.1`
官方文档：[React组件生命周期](https://facebook.github.io/react/docs/react-component.html "")

###一、组件安装（Mounting）

####1. constructor(props)
> es6的构造函数，在此可以定义state和访问this.props

####2. componentWillMount()
> 初始化组件的时候调用，整个生命周期中只调用一次，此时可以访问state，但是改变状态不会触发视图的重新渲染，因此不要在这个方法中做一些状态改变的监听

####3. render()
>react组件中最重要的方法，也是必须的，创建虚拟DOM，进行diff算法，跟新DOM都在这里进行。注意：这是个纯函数。这就意味它着不会改变组件的状态（不能调用this.setState），每次调用都会返回相同的结果。

####4. componentDidMount()
>组件安装完成之后调用。在此可以操作DOM节点且实例化网络请求的好地方，在此获取网络数据并改变相应的状态（state）组件会重新渲染。在此更新state不会触发componentWillReceiveProps()方法

###二、组件更新
####1. componentWillReceiveProps(nextProps)
>组件在初始时不会调用此方法，在更新props时会调用，改变state不会触发这个方法

####2. shouldComponentUpdate(nextProps, nextState)
>对react性能优化非常重要的一个函数，在props和state变化时会调用此方法。默认行为是对每个状态的变化进行重新渲染。在此我们可以对比组件前后的state和props是否相等（既：this.state和nextState、this.props和nextProps），相等则返回false来阻止组件更新。因为相同的state和props会生成相同的DOM树，这样在DOM结构非常复杂的情况下可以减少大量的diff算法比较，从而大大的提高性能。但要注意一个细节：调用this.forceUpdate()方法时是不会触发这个方法的

####3. componentWillUpdate(nextProps, nextState)
组件初始化时不调用，在组件即将要更新时调用。

####4. render()
>同上

####5. componentDidUpdate(prevProps, prevState)
>组件初始化时不调用，组件更新完成后调用。此时可以操作DOM，也可以在此发送网络请求（如果props没有改变的话也不用发送网络请求）


###三、组件卸载
 
####1. componentWillUnmount()
>组件将要卸载时调用，在此可以做一些清除操作，以节省内存。例如：定时器的清除，取消网络请求，清除无用的DOM元素以及取消事件监听

以上共9个生命周期函数，可以根据自己的组件使用对应的生命周期函数，以提高开发效率和组件性能
###参考借鉴资料
[一个 react + redux 的完整项目 和 个人总结](https://github.com/bailicangdu/react-pxq "一个 react + redux 的完整项目 和 个人总结")

[React移动web极致优化](https://github.com/lcxfs1991/blog/issues/8 "react优化")