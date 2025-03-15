import { feedbacks } from "@/Components/Feedback/dum";
import NavBar from "@/Components/NavBar";
import ReportCard from "@/Components/Report";
import FormReport from "@/Components/Report/form";

export default function Home() {
  return (
    <div className="pb-36">
      <div className="px-44">
        <div className="flex justify-center font-jakarta pt-5">
          <NavBar />
        </div>
        <div className="flex text-7xl font-bold justify-center items-center h-96 py-11 font-roboto">
          <h1 className="text-pgreen">Infras</h1>
          <h1 className="text-pyellow">Report</h1>
        </div>
        <div className="font-jakarta">
          <div className="flex justify-center py-6">
            <h1 className="text-4xl text-[#D1D5DB] font-light">Data Laporan</h1>
          </div>
          <div className="flex gap-4">
            <ReportCard title={"Laporan"} total={192} logo={"laporan"} />
            <ReportCard title={"Diproses"} total={50} logo={"diproses"} />
            <ReportCard title={"Selesai"} total={46} logo={"selesai"} />
          </div>
        </div>
      </div>
      <div className="py-8 gap-4 grid grid-cols-4">{feedbacks}</div>
      <div className="px-44">
        <FormReport />
      </div>
    </div>
  );
}
