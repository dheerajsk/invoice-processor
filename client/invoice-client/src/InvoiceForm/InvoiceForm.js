import { useState } from "react";
import { useNavigate } from "react-router-dom";


function InvoiceForm(){

    const [invoice, setInvoice] = useState({});
    const navigate = useNavigate();

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(invoice);
        fetch("http://localhost:4100/api/invoice",
        {
            method:"POST",
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
                    value={invoice.customerName}
                    onInput={(e)=>{setInvoice({...invoice, customerName:e.target.value})}} 
                    
                    type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Enter Order #</label>
                    <input 
                     value={invoice.orderNumber}
                     onInput={(e)=>{setInvoice({...invoice, orderNumber:e.target.value})}} 
                     type="number" className="form-control" />
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Enter Amount</label>
                            <input 
                             value={invoice.amount}
                             onInput={(e)=>{setInvoice({...invoice, amount:e.target.value})}} 
                             type="number" className="form-control" />
                        </div>
                    </div>
                        <div className="col-6">
                            <div className="mb-3">
                            <label htmlFor="" className="form-label">Enter Quantity</label>
                            <input 
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
                             value={invoice.totalAmount}
                             onInput={(e)=>{setInvoice({...invoice, totalAmount:e.target.value})}} 
                             type="number" className="form-control" />
                        </div>
                    </div>
                        <div className="col-6">
                            <div className="mb-3">
                            <label htmlFor="" className="form-label">Taxes</label>
                            <input 
                             value={invoice.taxes}
                             onInput={(e)=>{setInvoice({...invoice, taxes:e.target.value})}} 
                             type="number" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Final Amount</label>
                            <input 
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