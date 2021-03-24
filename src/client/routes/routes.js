import App from '../containers/App';
import ProductDetail from '../containers/ProductDetail';
import ResultList from '../containers/ResultList';

export default [
  {
    component: App,
    routes: [
      {
        exact: true,
        path: '/items',
        component: ResultList,
      },
      {
        exact: true,
        path: '/items/:id',
        component: ProductDetail,
      },
    ],
  },
];
