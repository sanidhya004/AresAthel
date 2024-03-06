import React from 'react'
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TableComp from './TableComp'
const RecentBooking = () => {
    const [opened, { open, close }] = useDisclosure(false)
  return (
   <>
   <Modal.Root opened={opened} onClose={close} centered={true} size="55rem">
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
            <div className=" gap-3 mb-4">
                  <button
                    className="modal-close "
                    style={{ background: "#1C1C1C0D" }}
                    onClick={close}
                  >
                    <i
                      class="fa-solid fa-arrow-left"
                      style={{ color: "black" }}
                    ></i>
                  </button>
                  <p className="profile-header mt-3">Recent Bookings</p>
                 
                </div>
            </Modal.Title>
      
          </Modal.Header>
          <Modal.Body><TableComp/></Modal.Body>
        </Modal.Content>
      </Modal.Root>
   <div style={{background:"white",borderRadius:"16px",padding:"30px",maxWidth:"80vw",marginBottom:"10px"}}>
                 <div className="d-flex justify-content-between">
                 <h5>Recent Bookings</h5>
                <p onClick={open}>View All</p>
                 </div>
               
                 <div className="table-cont" style={{overflow:"scroll"}}>
                 <TableComp/>
                 </div>
    </div>
   </>
  )
}

export default RecentBooking