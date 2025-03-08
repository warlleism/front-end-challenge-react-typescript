export default function MeetingStatus({ status }: { status: string }) {

    const statusColor: any = {
        "ATA DEFINITIVA": ["#E0E7DC", "#164300"],
        "ATA PRELIMIBAR": ["#FAF8DA", "#51340D"],
        "PENDENTE ASSINATURA": ["#EEE7DC", "#473219"],
    }
    return (
        <div style={{
            fontSize: 12,
            width: "190px",
            textAlign: "center",
            padding: "5px 10px",
            borderRadius: 100,
            fontWeight: 700,
            color: statusColor[status][1],
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
            backgroundColor: statusColor[status][0]
        }}>{status}
        </div>
    )
}