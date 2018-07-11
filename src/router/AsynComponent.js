import React from 'react';
import Loadable from 'react-loadable';
import MyLoading from '@/components/loading/Loading';

const Loading = (props) => {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <MyLoading/>;
  }
}

export const Home = Loadable({
  loader: () => import('@/pages/home/Home'),
  loading: Loading
});
export const Original = Loadable({
  loader: () => import('@/pages/original/Original'),
  loading: Loading
});
export const BookStore = Loadable({
  loader: () => import('@/pages/bookStore/BookStore'),
  loading: Loading
});
export const My = Loadable({
  loader: () => import('@/pages/my/My'),
  loading: Loading
});
export const Search = Loadable({
  loader: () => import('@/pages/search/Search'),
  loading: Loading
});
export const Classification = Loadable({
  loader: () => import('@/pages/classification/Classification'),
  loading: Loading
});
export const BookDetail = Loadable({
  loader: () => import('@/pages/bookDetail/BookDetail'),
  loading: Loading
});
export const OriginalBook = Loadable({
  loader: () => import('@/pages/originalBook/OriginalBook'),
  loading: Loading
});
export const BookList = Loadable({
  loader: () => import('@/pages/bookList/BookList'),
  loading: Loading
});
export const JoinTheCreation = Loadable({
  loader: () => import('@/pages/joinTheCreation/JoinTheCreation'),
  loading: Loading
});
export const Cart = Loadable({
  loader: () => import('@/pages/cart/Cart'),
  loading: Loading
});
