import { redirect } from "next/navigation";
import { AddProductForm } from "../components"
import { getSession } from '@auth0/nextjs-auth0';

const CreateListPage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/")
  }

  return (
    <div className="w-[100%] flex flex-col items-center pt-4">
      <AddProductForm />
    </div>
  )
}

export default CreateListPage