import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

const HistoryListPage = async () => {

  const session = await getSession();

  if (!session) {
    redirect("/")
  }

  return (
    <div>History list page</div>
  )
}

export default HistoryListPage