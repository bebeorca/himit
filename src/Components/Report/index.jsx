import Image from "next/image";

const ReportCard = ({ logo, title, total }) => {
    return (
        <div className="border-solid border-4 border-black p-4 rounded-xl w-full">
            <Image src={`./${logo}.svg`} width={30} height={30} alt={title} />
            <h1 className="font-bold pt-4">{title}</h1>
            <h1 className="font-bold text-4xl py-5">{total}</h1>
            <div className="py-5">
                <a className="text-xs font-bold flex items-center gap-2 w-fit" href="">
                    SEE MORE
                    <Image src="./r-arrow.svg" width={12} height={12} alt="r-arrow" />
                </a>
            </div>
        </div>
    );
}

export default ReportCard