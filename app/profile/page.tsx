
import Image from 'next/image';
import Link from 'next/link';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
    const session = await getSession();

    if (!session) {
        redirect("/")
    }

    const { user } = session

    return (
        <>
            {
                user && (
                    <div>
                        <Image src={user?.picture} alt={user?.name} width={50} height={50} />
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                        <Link href="/api/auth/logout">Logout</Link>
                    </div>
                )
            }
        </>
    )
}

export default ProfilePage