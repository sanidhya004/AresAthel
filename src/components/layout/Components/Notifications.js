import React from "react";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Notifications = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Modal.Root opened={opened} onClose={close} size={"33rem"}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              <div className=" d-flex gap-3 mb-4">
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
                <p className="profile-header mt-3">Notifications(12)</p>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ padding: "0px 40px 0px" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  minHeight: "60%",
                  padding: "30px",
                }}
                className="rounded-4  "
              >
                <div className="d-flex flex-start flex-row mt-2 gap-3">
                  <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>

                  <div className="d-flex gap-3 items-center">
                    <h7>Dr.Joe</h7>

                    <p
                      className="m-0"
                      style={{ fontSize: "12px", color: " #3C3F5399" }}
                    >
                      {" "}
                      Ophthalmologist
                    </p>
                  </div>
                </div>
                <div className="d-flex  flex-column align-items-end ">
                  <p style={{ fontSize: "13px", marginLeft: "50px" }}>
                    Doctor has choose the Novice program P1 for you, Please pay
                    the amount to proceed.
                  </p>
                  <button
                    style={{
                      backgroundColor: "#7257FF",
                      padding: "6px 9px 6px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "smaller",
                    }}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  marginBottom: "-10px",
                }}
              >
                <p style={{ fontSize: "smaller", color: "#8C90AA" }}>9:00 Pm</p>
              </div>

              <hr />
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  minHeight: "60%",
                  padding: "30px",
                }}
                className="rounded-4  "
              >
                <div className="d-flex flex-start flex-row mt-2 gap-3">
                  <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>

                  <div className="d-flex gap-3 items-center">
                    <h7>Dr.Joe</h7>

                    <p
                      className="m-0"
                      style={{ fontSize: "12px", color: " #3C3F5399" }}
                    >
                      {" "}
                      Ophthalmologist
                    </p>
                  </div>
                </div>
                <div className="d-flex  flex-column align-items-end ">
                  <p style={{ fontSize: "13px", marginLeft: "50px" }}>
                    Doctor has choose the Novice program P1 for you, Please pay
                    the amount to proceed.
                  </p>
                  <button
                    style={{
                      backgroundColor: "#7257FF",
                      padding: "6px 9px 6px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "smaller",
                    }}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  marginBottom: "-10px",
                }}
              >
                <p style={{ fontSize: "smaller", color: "#8C90AA" }}>9:00 Pm</p>
              </div>

              <hr />
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  minHeight: "60%",
                  padding: "30px",
                }}
                className="rounded-4  "
              >
                <div className="d-flex flex-start flex-row mt-2 gap-3">
                  <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>

                  <div className="d-flex gap-3 items-center">
                    <h7>Dr.Joe</h7>

                    <p
                      className="m-0"
                      style={{ fontSize: "12px", color: " #3C3F5399" }}
                    >
                      {" "}
                      Ophthalmologist
                    </p>
                  </div>
                </div>
                <div className="d-flex  flex-column align-items-end ">
                  <p style={{ fontSize: "13px", marginLeft: "50px" }}>
                    Doctor has choose the Novice program P1 for you, Please pay
                    the amount to proceed.
                  </p>
                  <button
                    style={{
                      backgroundColor: "#7257FF",
                      padding: "6px 9px 6px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "smaller",
                    }}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  marginBottom: "-10px",
                }}
              >
                <p style={{ fontSize: "smaller", color: "#8C90AA" }}>9:00 Pm</p>
              </div>

              <hr />
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <div className="d-flex justify-content-between" style={{padding:"0px 20px 0px"}}>
        <h5>Notifications(12)</h5>
        <p
          className="view-all"
          style={{ fontSize: "13px", cursor: "pointer" ,fontWeight:"700",color:"#7257FF"}}
          onClick={open}
        >
          View All
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#F4F4F4",
          minHeight: "60%",
          padding: "16px",
        }}
        className="rounded-4  "
      >
        <div className="d-flex flex-start flex-row mt-2 gap-3">
          <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>

          <div className="d-flex gap-3 items-center">
            <h7>Dr.Joe</h7>

            <p
              className="m-0"
              style={{ fontSize: "12px", color: " #3C3F5399" }}
            >
              {" "}
              Ophthalmologist
            </p>
          </div>
        </div>
        <div className="d-flex  flex-column align-items-end ">
          <p style={{ fontSize: "13px", marginLeft: "50px" }}>
            Doctor has choose the Novice program P1 for you, Please pay the
            amount to proceed.
          </p>
          <button
            style={{
              backgroundColor: "#7257FF",
              padding: "6px 9px 6px",
              borderRadius: "10px",
              color: "white",
              fontSize: "smaller",
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
