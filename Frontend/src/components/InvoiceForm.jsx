import React from "react";

const InvoiceForm = ({ formData, handleChange }) => {
  return (
    <div className="no-print max-w-[400px] mx-auto p-4 rounded-md bg-blue-300 m-2">
      <h2 className="text-center text-2xl font-bold mb-6">Invoice Form</h2>
      <form className="space-y-6">
        {/* GSTIN */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            GSTIN:
          </label>
          <input
            type="text"
            name="gstin"
            value={formData.gstin}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* PAN */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            PAN:
          </label>
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description of Good */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description of Good:
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* HSN Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            HSN CODE:
          </label>
          <input
            type="text"
            name="hsnCode"
            value={formData.hsnCode}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity:
          </label>
          <input
            type="number"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Unit */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Unit:
          </label>
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rate:
          </label>
          <input
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discount:
          </label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Value of Supply */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Value of Supply:
          </label>
          <input
            type="number"
            name="valueOfSupply"
            value={formData.valueOfSupply}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Payment Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Payment Details:
          </label>
          <textarea
            name="paymentDetails"
            value={formData.paymentDetails}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
