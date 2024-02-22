import Link from "next/link"

export const UnloggedCard = () => {
    return (
        <div className='flex flex-col gap-4 p-4 rounded-lg'>
            <h3>Debes iniciar sesion</h3>

            <Link
                href="/api/auth/login"
                className="
                    block border border-blue-500 bg-blue-500 rounded-lg
                    w-[100%] text-center p-1
                  text-white
                ">
                Login
            </Link>
        </div>
    )
}
