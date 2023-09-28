import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import atob from "atob";

export default function ProductTable({ data }) {
  const [pagination, setPagination] = useState(1);

  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg h-80 ">
            <table className="min-w-full divide-y divide-gray-200  overflow-y-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Invoice
                  </th>
                  {/* <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th> */}
                </tr>
              </thead>
              {data.slice(pagination * 5 - 5, pagination * 5).map((item) => {
                // {
                //   const base64String = item.invoice;
                //   const byteCharacters = atob(base64String);
                //   const byteNumbers = new Array(byteCharacters.length);

                //   for (let i = 0; i < byteCharacters.length; i++) {
                //     byteNumbers[i] = byteCharacters.charCodeAt(i);
                //   }

                //   const byteArray = new Uint8Array(byteNumbers);
                //   const blob = new Blob([byteArray], {
                //     type: "application/pdf",
                //   });
                //   const url = URL.createObjectURL(blob);
                //   const a = document.createElement("a");
                //   a.href = url;
                //   a.download = "Invoice_doc";
                //   document.body.appendChild(a);
                //   a.click();
                //   document.body.removeChild(a);
                //   URL.revokeObjectURL(url);
                // }

                return (
                  <tbody className=" border-b-2 border-gray-200 max-h-16 overflow-y-scroll">
                    <tr className=" ">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {item.product}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {item.quantity}
                      </td>
                      <td>
                        <a
                          href={item.invoice}
                          download="Invoice_doc"
                          className=" mt-5 px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                        >
                          <button className="px-2 py-1 bg-neutral-300 hover:bg--600 hover:text-black text-white mx-2 rounded-md">
                            <FaDownload className="inline mr-1 -mt-1 " />
                            Download invoice
                          </button>
                        </a>
                      </td>

                      {/* <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                         <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
                                        </a>
                                    </td> */}
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="flex gap-3 justify-center mt-3 ">
            <button
              onClick={() =>
                pagination === 1
                  ? setPagination(1)
                  : setPagination(pagination - 1)
              }
              disabled={pagination === 1}
              className={`${
                pagination === 1 ? "opacity-20 cursor-not-allowed" : ""
              }`}
            >
              <FaArrowLeft />
            </button>
            {[...Array(Math.ceil(data.length / 5))].map((page, index) => {
              return (
                <button onClick={() => setPagination(index + 1)}>
                  {index + 1}
                </button>
              );
            })}
            <button
              onClick={() =>
                pagination === Math.ceil(data.length / 5)
                  ? setPagination(Math.ceil(data.length / 5))
                  : setPagination(pagination + 1)
              }
              disabled={pagination === Math.ceil(data.length / 5)}
              className={`${
                pagination === Math.ceil(data.length / 5)
                  ? "opacity-20 cursor-not-allowed"
                  : ""
              }`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
