'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';

export const UserInfo = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user && (
            <div>
                <Image src={`${user.picture}`} alt={`${user.name}`} width={50} height={50} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>

                <Link href="/api/auth/logout">Logout</Link>
            </div>
        )
    );
}