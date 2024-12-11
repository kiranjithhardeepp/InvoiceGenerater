import React from "react";

const InvoiceTemplate = ({ data }) => {
  return (
    <div>
      <div className="m-2 border-solid border-2 border-gray-500">
        <h1 className="text-center font-bold m-1">Tax Invoice</h1>
        <h1 className="text-right mr-3 font-bold text-blue-600">
          BION RENEWABLE ENERGY SERVICES
        </h1>
        <div className="mt-6">
          <table className="w-full border-t-2 border-b-2 border-gray-500">
            <tr>
              <td className="border-r-2 text-right border-gray-500">GSTIN:</td>
              <td className=" border-gray-500">{data.gstin}</td>
            </tr>
            <tr className="border-t-2 border-gray-500">
              <td className="border-r-2 text-right border-gray-500">PAN:</td>
              <td className=" border-gray-500">{data.pan}</td>
            </tr>
            <tr>
              <td className="w-1/2 align-top border-r-2 border-t-2  border-gray-500">
                <div className="text-sm text-neutral-600 p-2">
                  <p className="font-bold">Supplier Company INC</p>
                  <p>Number: 23456789</p>
                  <p>VAT: 23456789</p>
                  <p>6622 Abshire Mills</p>
                  <p>Port Orlofurt, 05820</p>
                  <p>United States</p>
                </div>
              </td>
              <td className="w-1/2 align-top text-right border-t-2  border-gray-500 ">
                <div className="text-sm text-neutral-600 p-2 ">
                  <p className="font-bold">Customer Company</p>
                  <p>Number: 123456789</p>
                  <p>VAT: 23456789</p>
                  <p>9552 Vandervort Spurs</p>
                  <p>Paradise, 43325</p>
                  <p>United States</p>
                </div>
              </td>
            </tr>
          </table>
          <table className="w-full border-collapse border-spacing-0">
            <thead>
              <tr>
                <td className="border-b-2 border-r-2 pb-3 pl-3 text-center font-bold border-gray-500">
                  SL
                </td>
                <td className="border-r-2 border-b-2 text-center pb-3 pl-2 font-bold border-gray-500">
                  Description of Good
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 font-bold border-gray-500">
                  HSN CODE
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 text-center font-bold border-gray-500">
                  QTY
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 text-center font-boldy border-gray-500">
                  UNIT
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 text-center font-boldy border-gray-500">
                  RATE
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 text-center font-boldy border-gray-500">
                  DISCOUNT
                </td>
                <td className="border-b-2 pb-3 pl-2 pr-3 text-center font-boldy border-gray-500">
                  VALUE OF SUPPLY
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-3 pl-3 border-r-2 border-gray-500">
                  1.
                </td>
                <td className="border-b py-3 pl-2 border-r-2 border-gray-500">
                  {data.description}
                </td>
                <td className="border-b py-3 pl-2 text-right border-r-2 border-gray-500">
                  {data.hsnCode}
                </td>
                <td className="border-b py-3 pl-2 text-center border-r-2 border-gray-500">
                  {data.qty}
                </td>
                <td className="border-b py-3 pl-2 text-center border-r-2 border-gray-500">
                  {data.unit}
                </td>
                <td className="border-b py-3 pl-2 text-center border-r-2 border-gray-500">
                  {data.rate}
                </td>
                <td className="border-b py-3 pl-2 pr-3 text-center border-r-2 border-gray-500">
                  {data.discount}
                </td>
                <td className="border-b py-3 pl-2 pr-3 text-center border-gray-500">
                  {data.valueOfSupply}
                </td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-500">
                <td className=" border-r-2 text-right border-gray-500">
                  Total:
                </td>
                <td className=" border-gray-500 text-right">
                  {data.valueOfSupply}
                </td>
              </tr>
              <tr className="border-b-2 border-gray-500">
                <td className=" border-gray-500">TOTAL AMOUNT</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex">
          <div className="p-1">
            Certified that the particulars given above are true and correct.
          </div>
          <div className="ml-auto p-1 font-bold">FOR KAKKATU BULDING</div>
        </div>

        <div className="flex">
          <div className="text-sm text-neutral-700 mt-1 p-1">
            <p className="text-main font-bold">PAYMENT DETAILS</p>
            <p>{data.paymentDetails}</p>
          </div>
          <div className="ml-auto p-1">Authorized Signature</div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
