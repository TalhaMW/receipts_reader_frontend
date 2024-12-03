import { get_process_images } from "./api/api";

import Table from "./component/Table.component"

import Modal from "./component/ReceiptModel.component"

import React, { useEffect, useState } from "react";
import Header from "./layout/Header.component";
import Main from "./layout/Main";



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [receiptData,setReceiptData] = useState([]); 
  
  



  console.log(window.localStorage.getItem("api_data"));

  async function getData(){
    const res =await get_process_images();
    console.log("RES ",res);
    if(res?.processed_images){
      setReceiptData(res?.processed_images)

    }
  }
  console.log({receiptData});
  
  useEffect(() => {

    getData()
    
  }, []);

  const columns = [
    { key: "id", title: "ID" },
    { key: "file_name", title: "Name" },
    { key: "Date", title: "Date" },
    { key: "details", title: "Details" },
  ];


  const openModal = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <div className="">
      <Header/>
      <Main>
      <h1 className="text-2xl font-semibold mb-4">RECEIPTS</h1>
      <Table columns={columns} data={receiptData} onDetailsClick={openModal} />
        </Main>


      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Receipt Details"
        receiptData={selectedRow}
      >
        {selectedRow && (
          <div>
            <p><strong>ID:</strong> {selectedRow.id}</p>
            <p><strong>Name:</strong> {selectedRow.file_name}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;

