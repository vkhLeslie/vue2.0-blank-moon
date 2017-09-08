const index = resolve => require(['../components/index'], resolve);
 const routes = [
   {
     name: 'index',
     path: '/',
     component: index
   },
 ];


 export default routes;
