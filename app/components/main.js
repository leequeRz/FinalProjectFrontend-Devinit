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
      <div className="my-20 flex justify-around w-full h-full">
        <Link href="/calenda">
          <div className="p-20  text-bold bg-white rounded-md text-black text-3xl text-center">
            <p className="text-4xl">CALENDA!</p>
            <p className="text-center mt-5 text-xl">
              <FontAwesomeIcon icon={faCalendarDays} />
            </p>
          </div>
        </Link>
        <Link href="/todolist">
          <div className="p-20  text-bold bg-white rounded-md text-black text-3xl text-center">
            <p className="text-4xl">TODO-LIST!</p>
            <p className="text-center mt-5 text-xl">
              <FontAwesomeIcon icon={faList} />
            </p>
          </div>
        </Link>
        <Link href="/notetaking">
          <div className="px-20 pt-20 pb-20 text-bold bg-white rounded-md text-black text-2xl text-center">
            <p className="text-4xl">Notetaking!</p>
            <p className="text-center mt-5 text-xl">
              <FontAwesomeIcon icon={faBook} />
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Main;
