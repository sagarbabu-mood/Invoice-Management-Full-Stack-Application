/* import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const [invoices, setInvoices] = useState(() => {
    const savedInvoices = localStorage.getItem("invoices");
    return savedInvoices ? JSON.parse(savedInvoices) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const handleDelete = (id) => {
    const updatedInvoices = invoices.filter((inv) => inv.id !== id);
    setInvoices(updatedInvoices);
  };

  return (
    <div>
      <h1>Invoices</h1>
      <button onClick={() => navigate("/invoice-form")}>
        Create New Invoice
      </button>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.invoiceNumber} - {invoice.clientName} - ${invoice.amount} (
            {invoice.status})
            <button onClick={() => navigate(`/invoice-form/${invoice.id}`)}>
              Edit
            </button>
            <button onClick={() => handleDelete(invoice.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home; */

/* import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const [invoices, setInvoices] = useState(() => {
    const savedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    return savedInvoices;
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const handleDelete = (id) => {
    const updatedInvoices = invoices.filter((inv) => inv.id !== id);
    setInvoices(updatedInvoices);
  };

  return (
    <div className="home">
      <h1>Invoices</h1>
      <button onClick={() => navigate("/invoice-form")}>
        Create New Invoice
      </button>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id} className="invoice-item">
            <div>
              <strong>{invoice.invoiceNumber}</strong> - {invoice.clientName} -
              ${invoice.amount} ({invoice.status})
            </div>
            <div>
              <button onClick={() => navigate(`/invoice-form/${invoice.id}`)}>
                Edit
              </button>
              <button onClick={() => handleDelete(invoice.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home; */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const [invoices, setInvoices] = useState(() => {
    const savedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    return savedInvoices;
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const handleDelete = (id) => {
    const updatedInvoices = invoices.filter((inv) => inv.id !== id);
    setInvoices(updatedInvoices);
  };

  return (
    <>
      <div className="home">
        <h1>Invoices</h1>
        <button onClick={() => navigate("/invoice-form")}>
          Create New Invoice
        </button>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Client Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.invoiceNumber}</td>
                <td>{invoice.clientName}</td>
                <td>{invoice.date}</td>
                <td>${invoice.amount}</td>
                <td>{invoice.status}</td>
                <td>
                  <button
                    onClick={() => navigate(`/invoice-form/${invoice.id}`)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(invoice.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
