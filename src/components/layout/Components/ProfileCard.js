import React, { useState } from "react";
import { Avatar } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput, Stack } from "@mantine/core";

const ProfileCard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [visible, { toggle }] = useDisclosure(false);
  const [confirm, setConfirm] = useState(false);
  const CloseModal = () => {
    close();
    setConfirm(false);
  };
  return (
    <>
      {!confirm ? (
        <Modal.Root opened={opened} onClose={close} centered={true}>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Body>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ fontSize: "19px" }}>Change Password?</h4>
                <p style={{ color: "#8C90AA" }}>
                  Are you sure that you want Change password
                </p>
                <div
                  style={{
                    display: "flex",
                    minWidth: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    className="purple-button"
                    onClick={() => {
                      setConfirm(true);
                    }}
                  >
                    {" "}
                    Confirm
                  </button>
                  <button className="grey-button" onClick={close}>
                    Cancel
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      ) : (
        <Modal.Root
          opened={opened}
          onClose={close}
          transitionProps={{
            transition: "fade",
            duration: 600,
            timingFunction: "linear",
          }}
          centered={true}
        >
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>
                <div className=" gap-3 mb-4">
                  <button
                    className="modal-close "
                    style={{ background: "#1C1C1C0D" }}
                    onClick={CloseModal}
                  >
                    <i
                      class="fa-solid fa-arrow-left"
                      style={{ color: "black" }}
                    ></i>
                  </button>
                  <p className="profile-header mt-3">Change Password</p>
                  <p className="sub-text">
                    Set your New Password So you can access your data
                  </p>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Stack>
                <PasswordInput
                  label="Password"
                  defaultValue="secret"
                  visible={visible}
                  variant="filled"
                  onVisibilityChange={toggle}
                />
                <PasswordInput
                  label="Confirm password"
                  defaultValue="secret"
                  visible={visible}
                  variant="filled"
                  onVisibilityChange={toggle}
                />
              </Stack>
              <div className="mt-3 ">
                <div className="purple-button" onClick={CloseModal}>
                  Confirm
                </div>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      )}

      <div>
        <p className="profile-header">Profile</p>
        <div className="profile-card">
          <Avatar
            hiddenFrom="sm"
            src={
              "https://s3-alpha-sig.figma.com/img/8ffb/4d8f/ddd7e2907c52f531b2d2d2f2583f3323?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvSkzrIw4EbMOeFr7RmlU5fZVz-YLjwN-HGAg9jQ1kyITCaZ7OaAqtekLTLMqN1JL0odIxnmZ1MvrwN9UODEXiziNcWFHBw-ne3zPL6HsVXbMKtaq9kCUXLL8SNPduDFmOlzsDU-TMZJVVSO5brC3CD9-vxUu7A6SBX96syChHplTWmxerfoViFrMuOY9WNaFH2qOtdcSePIA6dJHsRt7vSUUVkx2SEyG6-QD99hxfrGT1IEKUShFgR0RAGeMDQgYkaI0uITzzW8GuE4OM5SjtQg1GhJwlwreChznFRgIzwU~T0IO4s0OBY98wwnHxrFCK3LOG7VSiHr-qyQEwny1w__"
            }
            alt="no image here"
            size="90px"
          />
          <Avatar
            visibleFrom="md"
            src={
              "https://s3-alpha-sig.figma.com/img/8ffb/4d8f/ddd7e2907c52f531b2d2d2f2583f3323?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvSkzrIw4EbMOeFr7RmlU5fZVz-YLjwN-HGAg9jQ1kyITCaZ7OaAqtekLTLMqN1JL0odIxnmZ1MvrwN9UODEXiziNcWFHBw-ne3zPL6HsVXbMKtaq9kCUXLL8SNPduDFmOlzsDU-TMZJVVSO5brC3CD9-vxUu7A6SBX96syChHplTWmxerfoViFrMuOY9WNaFH2qOtdcSePIA6dJHsRt7vSUUVkx2SEyG6-QD99hxfrGT1IEKUShFgR0RAGeMDQgYkaI0uITzzW8GuE4OM5SjtQg1GhJwlwreChznFRgIzwU~T0IO4s0OBY98wwnHxrFCK3LOG7VSiHr-qyQEwny1w__"
            }
            alt="no image here"
            size="130px"
          />
          <div className="d-flex flex-column  justify-content-center text-left ">
            <h5>MS Kishore</h5>
            <div>
              <p className="sub-text">Kishore@gmail.com</p>
              <p className="sub-text" style={{marginTop:"-16px"}}>8770100421</p>
            </div>
          </div>
        </div>
        <NavLink to="/a-profile">
          <div className="nav-links">
            <div className="cont">
              <p className="header">Edit</p>
              <p className="sub-text" style={{ marginTop: "-15px" }}>
                you can edit you all information from here
              </p>
            </div>

            <div>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </NavLink>

        <div className="nav-links" onClick={open}>
          <div className="cont">
            <p className="header">Change Password</p>
            <p className="sub-text" style={{ marginTop: "-15px" }}>
              you can Change your password from here
            </p>
          </div>
          <div>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div className="nav-links">
          <div className="cont">
            <p className="header">Term Of Use</p>
          </div>
          <div>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <NavLink to="/a-security">
          <div className="nav-links">
            <div className="cont">
              <p className="header">Privacy Policy</p>
            </div>
            <div>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ProfileCard;
