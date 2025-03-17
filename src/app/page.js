import { feedbacks } from "@/Components/Feedback/dum";
import NavBar from "@/Components/NavBar";
import BottomNav from "@/Components/NavBar/bottom";
import ReportCard from "@/Components/Report";
import FormReport from "@/Components/Report/form";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="absolute left-0">
        <Image src="/bg.png" width={100} height={100} alt="komponen" />
      </div>
      <div className="px-14 md:px-44">
        <div className="flex justify-center font-jakarta pt-5">
          <NavBar />
        </div>
        <div className="flex md:text-8xl text-5xl font-bold justify-center items-center h-96 py-11 font-roboto">
          <h1 className="text-pgreen">Infras</h1>
          <h1 className="text-pyellow">Report</h1>
        </div>
        <div className="font-jakarta">
          <div className="flex justify-center py-6">
            <h1 className="text-4xl text-[#D1D5DB] font-light">Data Laporan</h1>
          </div>
          <div className="grid md:flex gap-4">
            <ReportCard title={"Laporan"} total={192} logo={"laporan"} />
            <ReportCard title={"Diproses"} total={50} logo={"diproses"} />
            <ReportCard
              title={"Selesai"}
              total={46}
              logo={"selesai lain lagi"}
            />
          </div>
        </div>
      </div>
      <div className="py-8 pb-80 gap-4 grid md:grid-cols-4">{feedbacks}</div>

      <div className="relative bg-black min-h-screen justify-center">
        {/* Form Container */}
        <div className="absolute -top-60 p-6 rounded-xl shadow-lg w-full">
          <FormReport />
          <BottomNav />
        </div>
      </div>
      <div className="bg-black pt-52 px-2 md:pt-0 md:flex md:justify-evenly h-96 pb-3">
        <div className="flex flex-col text-4xl font-bold justify-between font-roboto">
          <div className="flex">
            <h1 className="text-pgreen">Infras</h1>
            <h1 className="text-pyellow">Report</h1>
          </div>
          <div className="text-white text-lg hidden md:flex">
            <span className=" font-light">Copyright© 2025 </span>
            <span className="text-pyellow font-bold">InfrasReport</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white font-jakarta">
          <h1 className="font-bold">Contact</h1>
          <h1>+1234-456-789</h1>
          <h1>example@gmail.com</h1>
          <h1>Jl. Maju Makmur No.1 Surabaya, Jawa Timur</h1>
        </div>
        <div className="text-white hidden md:flex flex-col justify-between items-baseline align-bottom font-jakarta">
          <div></div>
          <h1>User Terms & Conditions | Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
}
