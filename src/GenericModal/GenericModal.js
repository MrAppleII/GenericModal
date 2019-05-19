import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

GenericModal.propTypes = {
  showModalStatus: PropTypes.bool,
  onModalOpen: PropTypes.func,
  onModalClose: PropTypes.func,
  modalWidth: PropTypes.string,
}
GenericModal.defaultProps = {
  showModalStatus: false,
  modalWidth: "350px",
  onModalOpen: function() {
   
  },
}

function GenericModal({
  showModalStatus,
  onModalClose,
  onModalOpen,
  modalWidth,
  children,
}) {
  const onMaskClick = e => {
    onModalClose()
  }
  try {
    
  useEffect(() => {
    // Update the document title using the browser API
    if (showModalStatus) {
       
            onModalOpen()
       
    }
  })

 
    return showModalStatus ? (
      <>
        <FadeWrapper>
          <ModelMask>
            <ModalWrapper onClick={onMaskClick}>
              <ModalContainer
                onClick={e => {
                  // We are simply preventing the e based function up above from misfiring
                  e.stopPropagation()
                }}
                style={{ maxWidth: modalWidth }}
              >
                <ModalHeader>
                  <ModalDefaultButton />

                  <ModalHeaderCenterItem />

                  <ModalDefaultButton onClick={onModalClose}>
                    X
                  </ModalDefaultButton>
                </ModalHeader>
                <ModalBody>{children}</ModalBody>
                <ModalHeader>
                  <ModalDefaultButton />
                  <ModalHeaderCenterButton>
                    <div onClick={onModalClose}>Cancel</div>
                  </ModalHeaderCenterButton>

                  <ModalDefaultButton />
                </ModalHeader>
              </ModalContainer>
            </ModalWrapper>
          </ModelMask>
        </FadeWrapper>
      </>
    ) : null
  } catch(e) {
    return (
      <ModelMask>
        <ModalWrapper onClick={onMaskClick}>
          <ModalContainer
            onClick={e => {
              // We are simply preventing the e based function up above from misfiring
              e.stopPropagation()
            }}
          >
            <ModalHeader>
              <ModalHeaderCenterItem>Oops</ModalHeaderCenterItem>
            </ModalHeader>
            <ModalBody>Something went wrong here.</ModalBody>
            <ModalHeader>
              <ModalDefaultButton />
              <ModalHeaderCenterButton>
                <div onClick={onModalClose}>Okay</div>
              </ModalHeaderCenterButton>

              <ModalDefaultButton />
            </ModalHeader>
          </ModalContainer>
        </ModalWrapper>
      </ModelMask>
    )
  }
}

// Styling for the Modal Components **********
const ModelMask = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
`
const fadeInEffect = keyframes`
from {
    opacity: 0;
}
 

`
const FadeWrapper = styled.div`
  animation: ${fadeInEffect} both cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-duration: 0.3s;
`
/* This styling is for the corner buttons containing the content */

const ModalDefaultButton = styled.a`
  flex: 0 0 12px;
  cursor: pointer;
  font-weight: normal !important;
`
const ModalWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`
/* This styling is for the actual border containing the content */
const ModalContainer = styled.div`
  z-index: 101;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif !important;
  transition: all 0.3s ease;
`
const ModalHeaderCenterItem = styled.div`
  flex-grow: 1;
  text-align: center;
`
const ModalHeaderCenterButton = styled.div`
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
`
const ModalHeader = styled.h3`
  margin-top: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalBody = styled.div`
  margin: 20px 0;
`

export default GenericModal
