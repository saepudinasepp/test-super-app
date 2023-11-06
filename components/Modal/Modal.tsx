import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";

interface DialogModalProps {
    open: boolean;
    size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    handler: (value?: any) => void;
    heightFit?: boolean;
    children: any;
    title: string;
}

const DialogModal = ({ open, size, handler, heightFit = true, children, title }: DialogModalProps) => {
    return (
        <Dialog
            open={open}
            size={size}
            handler={handler}
            dismiss={{
                escapeKey: false,
                outsidePress: false,
            }}
            className="bg-white text-black dark:bg-black dark:text-white-light"
        >
            <DialogHeader className="flex items-center justify-between dark:text-white-light">
                <p className="text-md">{title}</p>
                <IoMdClose onClick={handler} className="h-8 w-8 cursor-pointer rounded-full p-1 shadow-md" />
            </DialogHeader>

            <DialogBody divider className="relative border-none">
                <div
                    className={`${
                        heightFit ? "!h-fit" : "h-[60vh] md:h-[60vh]"
                    } no-scrollbar overflow-y-scroll rounded-xl  bg-white  text-sm  text-black shadow-md dark:bg-black dark:text-white-light`}
                >
                    {children}
                </div>
            </DialogBody>
        </Dialog>
    );
};

export default DialogModal;
