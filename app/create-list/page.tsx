import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from "next/navigation";
import { AddProductForm, Modal } from "@/app/components"

const CreateListPage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/")
  }

  return (
    <div className="w-[100%] flex flex-col items-center">
      <AddProductForm />
    </div>
  )
}

export default CreateListPage