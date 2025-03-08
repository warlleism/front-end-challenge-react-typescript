import "./style.scss"
export default function MeetingStatus({ status, position }: { status: string, position?: boolean }) {

    const statusColor: any = {
        "ATA DEFINITIVA": ["#E0E7DC", "#164300"],
        "ATA PRELIMIBAR": ["#FAF8DA", "#51340D"],
        "PENDENTE ASSINATURA": ["#EEE7DC", "#473219"],
    }
    return (
        <div
            className={`statusContainer ${position === false ? "" : "absolute"}`}
            style={{
                color: statusColor?.[status]?.[1],
                backgroundColor: statusColor?.[status]?.[0]
            }}>{status}
        </div>
    )
}