import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner({ loading, size }: { loading: boolean, size?: number }) {
    return (
        <ClipLoader
            color={"#000"}
            loading={loading}
            size={size ? size : 10}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}