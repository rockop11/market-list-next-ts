import { getSession } from '@auth0/nextjs-auth0';
import { UnloggedCard, ActionButton } from "@/app/components";

const Page = async () => {
	const session = await getSession()

	return (
		<div className="flex justify-center">
			{
				session?.user ? (
					<div className="
						flex flex-wrap gap-4 justify-center
						w-[100%]
						md:max-w-[425px]
					">
						<ActionButton url="/create-list" label="Crear Lista" />
						<ActionButton url="/history" label="Historial" />
						<ActionButton url="/profile" label="Mi Perfil" />
					</div>
				) : (
					<UnloggedCard />
				)
			}
		</div>
	)
}

export default Page