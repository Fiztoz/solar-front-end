import { createContext, useContext, useRef, useState } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

const DialogContext = createContext({});

export const useDialognContext = () => useContext(DialogContext);

const Dialog = ({ children }) => {
  const { isOpen: alertIsOpen, onOpen: onOpenAlert, onClose: onCloseAlert } = useDisclosure();
  const alertCancelRef = useRef();
  const [alertContent, setAlertContent] = useState({ text: "", head: "" });
  const openAlert = (text = "", head = "") => {
    setAlertContent({ text: text, head: head });
    !alertIsOpen ? onOpenAlert() : null;
  };
  const value = {
    actions: {
      openAlert,
    },
  };
  return (
    <DialogContext.Provider value={value}>
      {children}
      <AlertDialog isOpen={alertIsOpen} leastDestructiveRef={alertCancelRef} onClose={onCloseAlert} autoFocus={false}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            {alertContent.head != "" && (
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {alertContent.head}
              </AlertDialogHeader>
            )}
            {alertContent.text != "" && (
              <AlertDialogBody>
                <Flex justify="center" pt="16px">
                  {alertContent.text}
                </Flex>
              </AlertDialogBody>
            )}
            <AlertDialogFooter>
              <Flex justify="center" w="100%">
                <Button variant="primary-outline" ref={alertCancelRef} onClick={onCloseAlert}>
                  ตกลง
                </Button>
              </Flex>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </DialogContext.Provider>
  );
};

export default Dialog;
