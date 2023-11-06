import { Button, Dialog, DialogBody } from '@material-tailwind/react';
import { FaQuestion } from 'react-icons/fa6';

interface TableProps {
    open: boolean;
    header?: string;
    // inputs?: InputProps[] | InputProps;
    // switched?: SwitchProps;
    // dropdowns?: DropdownProps[] | DropdownProps;
    // textarea?: TextareaProps[] | TextareaProps;
    // initialData?: { [key: string]: string | boolean };
    setOpen: (open: boolean) => void;
    onConfirm?: () => void;
}

export default function ConfirmationModalTable({ open, setOpen, header, onConfirm }: TableProps) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        handleClose();
    };

    return (
        <section>
            <Dialog
                open={open}
                handler={handleOpen}
                size="xs"
                dismiss={{
                    escapeKey: false,
                    outsidePress: false,
                }}
                className="bg-white text-black dark:bg-black dark:text-white-light"
            >
                <DialogBody>
                    <FaQuestion className="mx-auto h-auto w-28 text-warning" />
                    <h2 className="mt-4 mb-8 text-center font-semibold text-black">{header}</h2>
                    <div className="flex items-center justify-center gap-4">
                        <Button color="green" size="sm" className="capitalize" onClick={handleClose}>
                            Tidak
                        </Button>

                        <Button color="red" size="sm" className="capitalize" onClick={handleConfirm}>
                            Ya
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </section>
    );
}
