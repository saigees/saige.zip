export type KeyCapProps = {
    key: string;
}
export default function KeyCap({ key }: KeyCapProps) {
    return (
        <div className="bg-black bg-opacity-50 border border-black border-opacity-10 text-white p-1 rounded-lg flex items-center justify-center">
            <p>{key}</p>
        </div>
    )
}