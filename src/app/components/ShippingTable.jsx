import React from "react";

export default function ShippingTable({ data }) {
  return (
    <div className="flex flex-col overflow-auto">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 overflow-y-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Products
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
                    price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Expected Delivery
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Status
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
              {data.map((item) => {
                return (
                  <tbody className="divide-y divide-gray-200 max-h-16 overflow-y-scroll">
                    <tr className=" ">
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {item.orderID}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {item.product}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        ₹{item.price}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800  whitespace-nowrap">
                        {new Date(item.expectedDelivery).toLocaleDateString()}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm whitespace-nowrap ${
                          item.status === "Confirmed"
                            ? "text-blue-500"
                            : item.status === "Out for delivery"
                            ? "text-green-600"
                            : item.status === "Returned"
                            ? "text-neutral-500"
                            : "text-yellow-500 "
                        }`}
                      >
                        {item.status}
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
        </div>
      </div>
    </div>
  );
}
