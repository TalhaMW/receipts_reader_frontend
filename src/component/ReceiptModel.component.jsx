// import React from "react";
// import { AiOutlineClose, AiOutlineIdcard } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";
// import { BsPersonFill, BsCalendarEvent } from "react-icons/bs";
// import { FaDollarSign } from "react-icons/fa";

// const ReceiptModal = ({ isOpen, onClose, receiptData }) => {

//   console.log("Model ",receiptData);
  
//   if (!isOpen) return null;

//   // const calculateTotal = () => {
//   //   return receiptData?.Items
//   //     .reduce((acc, item) => acc + item.price * item.quantity, 0)
//   //     .toFixed(2);
//   // };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white w-11/12 max-w-lg rounded-lg shadow-lg p-6 transform transition-all scale-100">
//         {/* Receipt Header */}
//         <div className="text-center border-b pb-4 mb-4">
//           <h2 className="text-xl font-bold text-gray-800 flex justify-center items-center gap-2">
//             Receipt
//           </h2>
//           <p className="text-sm text-gray-500">Thank you for your business!</p>
//         </div>

//         {/* Receipt Details */}
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="flex items-center gap-2 text-gray-700 font-medium">
//               <AiOutlineIdcard className="text-blue-500" /> Receipt ID:
//             </span>
//             <span className="text-gray-900 line-clamp-1 w-32 ">{receiptData?.id}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="flex items-center gap-2 text-gray-700 font-medium">
//               <BsPersonFill className="text-blue-500" /> Name:
//             </span>
//             <span className="text-gray-900 w-32 line-clamp-1">{receiptData?.file_name}</span>
//           </div>
//           {/* <div className="flex justify-between items-center">
//             <span className="flex items-center gap-2 text-gray-700 font-medium">
//               <MdEmail className="text-blue-500" /> Email:
//             </span>
//             <span className="text-gray-900">{receiptData?.email}</span>
//           </div> */}
//         </div>

//         {/* Items List */}
//         {
//         receiptData.Items!=="NONE" &&
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold text-gray-700 mb-2">Items</h3>
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-4 py-2 text-gray-600 font-medium">Item</th>
//                 <th className="px-4 py-2 text-gray-600 font-medium">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {receiptData?.Items?.map((item, index) => (
//                 <tr key={index} className="border-b hover:bg-blue-50">
//                   <td className="px-4 py-2 text-gray-800">{item?.item_name}</td>
//                   <td className="px-4 py-2 text-gray-800">${item?.price}</td>
  
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
// }

//         {/* Receipt Footer */}
//         <div className="border-t pt-4 mt-4 text-center">
//           {receiptData.total!=="NONE"&&
          
//           <div className="flex justify-between items-center">
//             <span className="flex items-center gap-2 text-gray-700 font-medium">
//               <FaDollarSign className="text-blue-500" /> Subtotal:
//             </span>
//             <span className="text-gray-900">${receiptData?.total}</span>
//           </div>
//           }
// {receiptData.Date!=="NONE" && 
//           <p className="text-sm text-gray-500 flex justify-center items-center gap-2 mt-2">
//             <BsCalendarEvent className="text-blue-500" /> Issued on {receiptData?.Date}
//           </p>
// }
//           <button
//             onClick={onClose}
//             className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition flex items-center gap-2 justify-center"
//           >
//             <AiOutlineClose /> Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReceiptModal;

























import React from "react";
import { AiOutlineClose, AiOutlineIdcard, AiOutlineInfoCircle } from "react-icons/ai";
import { BsPersonFill, BsCalendarEvent } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";

const ReceiptModal = ({ isOpen, onClose, receiptData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-11/12 max-w-lg rounded-lg shadow-lg p-6 transform transition-all scale-100">
        {/* Receipt Header */}
        <div className="text-center border-b pb-4 mb-4">
          <h2 className="text-xl font-bold text-gray-800 flex justify-center items-center gap-2">
            Receipt
          </h2>
          <p className="text-sm text-gray-500">Thank you for your business!</p>
        </div>

        {/* Receipt Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-gray-700 font-medium">
              <AiOutlineIdcard className="text-blue-500" /> Receipt ID:
            </span>
            <span className="text-gray-900 line-clamp-1 w-32 ">{receiptData?.id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-gray-700 font-medium">
              <BsPersonFill className="text-blue-500" /> Name:
            </span>
            <span className="text-gray-900 w-32 line-clamp-1">{receiptData?.file_name}</span>
          </div>
        </div>

        {/* Items List */}
        {/* {receiptData.Items !== "NONE" && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Items</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-gray-600 font-medium">Item</th>
                  <th className="px-4 py-2 text-gray-600 font-medium">Price</th>
                </tr>
              </thead>
              <tbody>
                {receiptData?.Items?.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-blue-50">
                    <td className="px-4 py-2 text-gray-800">{item?.item_name}</td>
                    <td className="px-4 py-2 text-gray-800">${item?.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}

              {/* Items List */}
              {receiptData.Items !== "NONE" && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Items</h3>
            <div className="max-h-48 overflow-y-auto border rounded-md">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-gray-100 z-10">
                  <tr className="border-b">
                    <th className="px-4 py-2 text-gray-600 font-medium">Item</th>
                    <th className="px-4 py-2 text-gray-600 font-medium">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {receiptData?.Items?.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-blue-50">
                      <td className="px-4 py-2 text-gray-800">{item?.item_name}</td>
                      
                      <td className="px-4 py-2 text-gray-800">{item?.price!=="NONE"?"$"+item.price:"NA"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Spending Insights */}
        <div className="mt-6 p-4 border rounded-md bg-gray-100">
          <div className="flex items-start gap-2 text-gray-600">
            <div>
            <AiOutlineInfoCircle className=" text-yellow-600 mt-1" />

            </div>
            <p className="text-gray-600 text-sm leading-6">
           {receiptData?.spending_insights}
            </p>
          </div>
        </div>

        {/* Receipt Footer */}
        <div className="border-t pt-4 mt-4 text-center">
          {receiptData.total !== "NONE" && (
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-gray-700 font-medium">
                <FaDollarSign className="text-blue-500" /> Subtotal:
              </span>
              <span className="text-gray-900">${receiptData?.total}</span>
            </div>
          )}
          {receiptData.Date !== "NONE" && (
            <p className="text-sm text-gray-500 flex justify-center items-center gap-2 mt-2">
              <BsCalendarEvent className="text-blue-500" /> Issued on {receiptData?.Date}
            </p>
          )}
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition flex items-center gap-2 justify-center"
          >
            <AiOutlineClose /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
