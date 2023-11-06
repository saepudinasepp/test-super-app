import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

interface InputDateProps {
    label: string;
    required?: boolean;
}

const InputDate = ({ label, required = false }: InputDateProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null | any>(null);

    const handleDateChange = (dates: Date[] | Date) => {
        if (Array.isArray(dates)) {
            setSelectedDate(dates[0]);
        } else {
            setSelectedDate(dates);
        }
    };

    return (
        <div>
            <label className="break-words text-[0.875rem] text-[#212529]">
                {label} {required && <sup className="mb-2 text-sm text-[#fa5252]">*</sup>}
            </label>
            <Flatpickr
                render={(_, ref) => <input type="text" className="rounded-sm border border-[#ced4da]" placeholder="Pilih Tanggal" ref={ref} />}
                onChange={handleDateChange}
                value={selectedDate}
                options={{
                    dateFormat: "d/m/Y",
                    altInput: true,
                    altFormat: "j F, Y",
                }}
            />
        </div>
    );
};

export default InputDate;
