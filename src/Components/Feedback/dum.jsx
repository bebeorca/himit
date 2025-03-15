import FeedbackCard from ".";

export const feedbacks = [];
for (let i = 0; i < 8; i++) {
    feedbacks.push(
        <FeedbackCard
            key={i}
            from={"twit"}
            name={"Fa"}
            pic={"user"}
            username={"victorfatanmi"}
            text={
                "Semoga laporan-laporan yang masuk segera ditindaklanjuti oleh pihak yang berwenang"
            }
        />
    );
}