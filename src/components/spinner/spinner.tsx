import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner({ loading }: { loading: boolean }) {
    return (
        <ClipLoader
            color={"#000"}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}