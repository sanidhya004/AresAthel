import React from "react";
import { NavLink } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button,Table } from "@mantine/core";
const PlanCard = ({ price, plans }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const[success,successHandler]=useDisclosure(false)
  const elements = [
    { position: <b>Ref Number</b>, mass: 12.011 },
    { position: <b>Payment Time</b>, mass: 12.011 },
    { position: <b>Payment Method</b>, mass: 12.011 },
    { position: <b>Sender Name</b>, mass: 12.011 },
    { position: <b>Amount</b>, mass: 12.011 },
    { position: <b>Admin Fee</b>, mass: 12.011 },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
     <Modal.Root opened={success} onClose={()=>{successHandler.open()}} centered>
        <Modal.Overlay />
        <Modal.Content>
          
          <Modal.Body style={{padding:"30px"}}>
          <div className="check-main">
                      <div class="check-container">
                        <div class="check-background">
                          <svg
                            viewBox="0 0 65 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 25L27.3077 44L58.5 7"
                              stroke="white"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke="#7257FF"
                            />
                          </svg>
                        </div>
                      </div>
                      <p style={{ fontSize: "26px", color: "#7257FF" }}>$38</p>
                      <p>Booking Confirmed for Novie Plan </p>
                    </div>
                    <div className="data-table ">
                      <Table>
                        <Table.Tbody>{rows}</Table.Tbody>
                      </Table>
                    </div>
                    <div className="mt-3"><NavLink to="/"> <button style={{width:"100%",padding:"12px 24px 12px 24px",background:"#7257FF",color:"white",borderRadius:"8px"}} onClick={()=>{ close(); successHandler.open()}}>Continue</button></NavLink></div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <Modal.Root opened={opened} onClose={close} size="37rem">
        <Modal.Overlay />
        <Modal.Content style={{ background: "transparent" }}>
          <Modal.Header
            style={{
              background: "#7257FF",
              color: "white",
            }}
          >
            <Modal.Title
              style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}
            >
              <div onClick={close}>
                <button className="modal-close">
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
              </div>
              <div>
                <p style={{ fontWeight: "600", fontSize: "21px" }}>
                  Intermediate
                </p>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "white", padding: "30px",display:"flex",justifyContent:"center",alignItems:"center" }}>
            <div>
            <div>
             
             </div>
              <div className="mt-1">
                <div className="plan-select-box">
                  <div className="plan-select">
                    <div></div>
                    <div className="plan-select-right">
                      <h4>
                        Phase 1{" "}
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#7257FF",
                            marginLeft: "4px",
                          }}
                        >
                          $147/month
                        </span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque nisl
                        lectus sed odio adipiscing et.
                      </p>
                    </div>
                  </div>
                  <div className="plan-select">
                    <div></div>
                    <div className="plan-select-right">
                      <h4>
                        Phase 1{" "}
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#7257FF",
                            marginLeft: "4px",
                          }}
                        >
                          $147/month
                        </span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque nisl
                        lectus sed odio adipiscing et.
                      </p>
                    </div>
                  </div>
                  <div className="plan-select">
                    <div></div>
                    <div className="plan-select-right">
                      <h4>
                        Phase 1{" "}
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#7257FF",
                            marginLeft: "4px",
                          }}
                        >
                          $147/month
                        </span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque nisl
                        lectus sed odio adipiscing et.
                      </p>
                    </div>
                  </div>
                  <div className="plan-select">
                    <div></div>
                    <div className="plan-select-right">
                      <h4>
                        Phase 1{" "}
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#7257FF",
                            marginLeft: "4px",
                          }}
                        >
                          $147/month
                        </span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque nisl
                        lectus sed odio adipiscing et.
                      </p>
                    </div>
                  </div>
                  
                </div>
                <button style={{width:"100%",padding:"15px 24px 15px 24px",background:"#7257FF",color:"white",borderRadius:"8px"}} onClick={()=>{ close(); successHandler.open()}}>Select Plan</button>
              </div>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <div
        style={{
          width: "318px",
          height: "540px",
          background: "white",
          borderRadius: "16px",
          padding: "30px 16px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ fontWeight: "600" }}>Novice</p>
          <div>{price}</div>
          <div>{plans}</div>
        </div>

        <button
          onClick={open}
          style={{
            width: "90%",
            background: "#7257FF",
            color: "white",
            borderRadius: "16px",
            padding: "10px 53px 10px 53px",
          }}
        >
          Start Plan
        </button>
      </div>
    </>
  );
};

export default PlanCard;
