export default function Toast({ message, type }) {

    return (
        <div
            className={`
                fixed top-5 left-1/2 -translate-x-1/2 z-50
                px-5 py-3 rounded-xl shadow-2xl
                text-white font-semibold
                ${type === "success" ? "bg-green-500" : "bg-red-500"}
            `}
        >
            {message}
        </div>
    );
}