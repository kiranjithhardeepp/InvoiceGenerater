import React, { useState } from "react";
import InvoiceTemplate from "../components/InvoiceTemplate";
import InvoiceForm from "../components/InvoiceForm";

const Invoice = () => {
  const [formData, setFormData] = useState({
    gstin: "",
    pan: "",
    description: "",
    hsnCode: "",
    qty: "",
    unit: "",
    rate: "",
    discount: "",
    valueOfSupply: "",
    paymentDetails: "",
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const printPdf = () => {
    window.print();
  };

  return (
    <div>
      {/* Pass handleChange to InvoiceForm as a prop */}
      <InvoiceForm formData={formData} handleChange={handleChange} />

      <div className="mt-7">
        <div className="flex">
          <button
            type="button"
            onClick={printPdf}
            className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Print invoice
          </button>
        </div>
        {/* Pass formData as a prop to InvoiceTemplate */}
        <InvoiceTemplate data={formData} />
      </div>
    </div>
  );
};

export default Invoice;
