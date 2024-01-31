import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  return (
    <>
      <div className="flex justify-center items-center my-20 text-2xl w-full h-full">
        <div className="p-10 border border-gray-300 rounded-xl">
          <div className="font-bold">Do you want to manage your life?</div>
        </div>
      </div>
      <div className="my-20 flex justify-around w-full items-stretch mx-36">
        <Link href="/calenda" className="flex-1">
          <div className="p-10 text-bold bg-white rounded-md text-black text-xl text-center w-1/2 h-full">
            <p className="text-xl">CALENDA!</p>
            <p className="text-center mt-3">
              <FontAwesomeIcon icon={faCalendarDays} />
            </p>
          </div>
        </Link>
        <Link href="/todolist" className="flex-1">
          <div className="p-10 text-bold bg-white rounded-md text-black text-xl text-center w-1/2 h-full">
            <p className="text-xl">TODO-LIST!</p>
            <p className="text-center mt-3">
              <FontAwesomeIcon icon={faList} />
            </p>
          </div>
        </Link>
        <Link href="/notetaking" className="flex-1">
          <div className="p-10 text-bold bg-white rounded-md text-black text-xl text-center w-1/2 h-full">
            <p className="text-xl">NOTE-TAKING!</p>
            <p className="text-center mt-3">
              <FontAwesomeIcon icon={faBook} />
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Main;
