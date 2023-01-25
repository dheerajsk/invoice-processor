import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function InvoiceForm(){

    const [invoice, setInvoice] = useState({});
    const navigate = useNavigate();

    const {id} = useParams();
    console.log(id);
    // update form
    useEffect(()=>{
        fetch("http://localhost:4100/api/invoice/"+id)
        .then((res)=> res.json())
            .then((parsedResult)=> {
                console.log(parsedResult);
                setInvoice(parsedResult);
            });
    }, []);

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(invoice);
        fetch("http://localhost:4100/api/invoice",
        {
            method:invoice._id ? "PUT" : "POST",
            body:JSON.stringify(invoice),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then(res=>   {navigate("/");})
    }

    return(
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Enter Customer Name</label>
                    <input 
                    readOnly={id}
                    value={invoice.customerName}
                    onInput={(e)=>{setInvoice({...invoice, customerName:e.target.value})}} 
                    
                    type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Enter Order #</label>
                    <input 
                    readOnly={id}
                     value={invoice.orderNo}
                     onInput={(e)=>{setInvoice({...invoice, orderNo:e.target.value})}} 
                     type="number" className="form-control" />
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Enter Amount</label>
                            <input 
                            readOnly={id}
                             value={invoice.amount}
                             onInput={(e)=>{setInvoice({...invoice, amount:e.target.value})}} 
                             type="number" className="form-control" />
                        </div>
                    </div>
                        <div className="col-6">
                            <div className="mb-3">
                            <label htmlFor="" className="form-label">Enter Quantity</label>
                            <input 
                            readOnly={id}
                             value={invoice.quantity}
                             onInput={(e)=>{setInvoice({...invoice, quantity:e.target.value})}} 
                             type="number" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Total Amount</label>
                            <input 
                            readOnly={id}
                             value={invoice.total}
                             onInput={(e)=>{setInvoice({...invoice, total:e.target.value})}} 
                             type="number" className="form-control" />
                        </div>
                    </div>
                        <div className="col-6">
                            <div className="mb-3">
                            <label htmlFor="" className="form-label">Taxes</label>
                            <input 
                            readOnly={id}
                             value={invoice.totalTax}
                             onInput={(e)=>{setInvoice({...invoice, totalTax:e.target.value})}} 
                             type="number" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Final Amount</label>
                            <input 
                            readOnly={id}
                            value={invoice.finalAmount}
                            onInput={(e)=>{setInvoice({...invoice, finalAmount:e.target.value})}} 
                            type="number" className="form-control" />
                        </div>
                    </div>
                        <div className="col-6">
                            <div className="mb-3">
                            <label htmlFor="" className="form-label">Status</label>
                            <select className="form-select"
                            value={invoice.status}
                            onChange={(e)=>{console.log(e.target.value); setInvoice({...invoice, status:e.target.value})}} 
                            >
                                <option value="OnHold">On Hold</option>
                                <option value="Submitted">Submitted</option>
                                <option value="Completed">Completed</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className="btn btn-success" type="submit">Save</button>
                
            </form>
        </div>
    );
}

export default InvoiceForm;