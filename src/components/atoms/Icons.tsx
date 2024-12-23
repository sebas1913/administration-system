import { LuBuilding } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { PiSuitcaseBold } from "react-icons/pi";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { PiTrashBold } from "react-icons/pi";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";


export const icons = {
    search: < IoSearch size={22}/>,
    suitcase: <PiSuitcaseBold size={22}/>,
    companie: <LuBuilding size={22}/>,
    add: <IoAddCircleOutline size={20}/>,
    close: <IoIosClose size={28}/>,
    edit: <LuPencil size={20}/>,
    delete: <PiTrashBold size={20}/>,
    nextPagination: <MdNavigateNext />,
    beforePagination: <MdNavigateBefore />
}