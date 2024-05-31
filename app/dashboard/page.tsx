import { auth, currentUser } from "@clerk/nextjs";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }
  if (checkRole("admin")) {
    redirect("/admin/dashboard");
  }
  if (checkRole("doctor")) {
    redirect("/doctor/dashboard");
  }
  

  return (
    <div className="mt-10 text-start max-w-xl mx-auto bg-neutral-200 p-5 rounded">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <ul className="list-none mt-10">
        <li className="mb-2">
          <span className="font-semibold">First Name:</span> {user.firstName}
        </li>
        <li className="mb-2">
          <span className="font-semibold">Last Name:</span> {user.lastName}
        </li>
        <li className="mb-2">
          <span className="font-semibold">Email:</span>{" "}
          {user.emailAddresses[0].emailAddress}
        </li>
      </ul>
    </div>
  );
}
