import Image from "next/image"

const FeedbackCard = ({ name, username, pic, from, text }) => {
    return (
        <div className="border-solid border-2 border-[#E5E7EB] p-3 grid gap-3 rounded-xl w-full">
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <Image src={`/${pic}.png`} width={56} height={56} alt={pic} className="rounded-full" />
                    <div className="flex flex-col">
                        <h1>{name}</h1>
                        <h1 className="text-[#9CA3AF]">{`@${username}`}</h1>
                    </div>
                </div>
                <div>
                    <Image src={`./${from}.svg`} width={56} height={56} alt="twit" />
                </div>
            </div>
            <div>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default FeedbackCard