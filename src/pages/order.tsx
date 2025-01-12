import React , {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
// import DisplayTable from '../components/dashboard/display-table';
import { DashboardLayout } from '../components/dashboard-layout';
import OrderTable, { createData } from '../components/OrderTable';
// import Page from './add';

// if (typeof window !== "undefined") {
//   ReactDOM.render(
//   <DisplayTable />,
//   document.getElementById('root')
//   );
// }

function Order(){
  const [orders,setOrders] = useState<any[]>([])
  // console.log('orders: ', orders);
  const items: { FullName: string; Phone: string; Email: string; Address: string; history: any; }[] = [
    // {
      // FullName : order[0].
    // }

  ]
  // console.log('items: ', items);
  const getOrders = async () => {

    const req = await fetch('https://oxinab-dashboard.netlify.app/api/getallorders');
    const res = await req.json()
    res.forEach((item:any) =>{
      // console.log('item: ', item);
      // const pro =   {
      //   id : item._id,
      //   total: item.total,
      //   FullName : `${item.info.firstName} ${item.info.lastName}`,
      //   Phone : `${item.info.phone}`,
      //   Email : `${item.info.email}`,
      //  Address : `${item.info.address1, item.info.address2}`,

      //   history : [
      //    item.products.map((product:any)=>  {
      //     return  {title : product.title,
      //       id : product._id,
      //       qty: product.qty,
      //       price : product.price,}
      //    })

      //   ]
      //  }
 const pro = createData(`${`(${item?.uploadDate}) ${ item.info.firstName}`} ${item.info.lastName}`, `${item.info.phone}`,

  `${item.info.email}`,
  `${item.info.address1}, ${item.info.address2}`
  ,


    // item.products.map((product:any)=>  {
      //  {title : product.title,
      //  id : item.products._id,
      //  qty: product.qty,
      //  price : product.price,}
    // })

 item.products,
 item._id,
  // [
  //   item.products.map((product:any)=>  {
  //    return  {title : product.title,
  //      id : product._id,
  //      qty: product.qty,
  //      price : product.price,}
  //   })

  // ]
  )

      items.push(
            pro

       )
     })
     setOrders(items)
  }
  useEffect(() => {
    getOrders()


  }, [])
//   createData('Full Name', '97125122', 'email@gmail.com', 'address',[{title:'Product name',id:'fooer',qty:1,price:200},{title:'Product name',id:'fooer',qty:1,price:200}]),




 return (
  <OrderTable rows={orders}/>
 )
}
Order.getLayout = (page:any) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
export default Order;

