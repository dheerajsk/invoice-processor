import {useEffect, useState} from "react";
import "../ListInvoice/ListInvoice.css";

function ListInvoice(){

    const [records, setRecords] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4100/api/invoice")
            .then(res=> res.json())
                .then(invoices=>{
                    setRecords(invoices);
                })
    },[]);

    return (
        <div className="container">

            <div className="mb-3">
                <a href="/new" className="btn btn-primary">New Invoice</a>
            </div>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">Customer Name</th>
      <th scope="col">Order #</th>
      <th scope="col">Amount</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col">Taxes</th>
      <th scope="col">Final Amount</th>
      <th scope="col">Status</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
{
    records.map(i=>
        <tr>
      <th scope="row">{i.customerName}</th>
      <td>{i.orderNumber}</td>
      <td>{i.amount}</td>
      <td>{i.quantity}</td>
      <td>{i.total}</td>
      <td>{i.taxes}</td>
      <td>{i.finalAmount}</td>
      <td
      className={i.status}
      >{i.status}</td>
      <td>
        <a href={i._id} className="btn btn-warning">
          Update
        </a>
      </td>
    </tr>
    )
}
    
  </tbody>
</table>
        </div>
    );
}

export default ListInvoice;