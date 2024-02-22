// import { MySearchIcon } from "@/Icons";

export default function Header(){
    return <main>
        <header className="content-top h-[60px] flex justify-between items-center border-b border-grey px-6 bg-daisy">
        <form>
          <div className="relative flex items-center gap-2 border border-grey rounded-md p-2">
            {/* <MySearchIcon className="w-4 h-4 mb-1" style={{ stroke: "grey" }} /> */}
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="text-[15px] outline-none bg-transparent w-[400px]"
            />
          </div>
        </form>
        <div>
          <div className="border-2 border-gray-500 rounded-full ">
            <div className="bg-grey w-8 h-8 rounded-full m-[2px]"></div>
          </div>
        </div>
      </header>
    </main>
}