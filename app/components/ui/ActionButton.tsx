import Link from "next/link"

interface ActionButtonProps {
    url: string;
    label: string;
}

export const ActionButton = ({ url, label }: ActionButtonProps) => {
    return (
        <Link href={url} className="
            border border-blue-300
            bg-blue-300
            p-2 rounded-lg w-[90%] h-[80px] 
            flex items-center justify-center
            hover:bg-blue-500
        ">
            {label}
        </Link>
    )
}
