import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { SearchUsers } from "./_search_users";
import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "./_action";
import { User } from "@/types/User";

export default async function AdminDashboard(params: { searchParams: { search?: string } }) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = params.searchParams.search;
  const users: User[] = query ? await clerkClient.users.getUserList({ query }) : [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">This is the admin dashboard</h1>
      <p className="text-gray-600 mb-6">This page is restricted to users with the admin role.</p>

      <SearchUsers />

      {users.map((user: User) => {
        return (
          <div key={user.id} className="border border-gray-300 rounded-lg p-4 mb-4">
            <div className="text-lg font-semibold">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-gray-500">
              {
                user.emailAddresses.find(
                  (email) => email.id === user.primaryEmailAddressId
                )?.emailAddress
              }
            </div>
            <div className="font-bold">{user.publicMetadata.role as string}</div>
            <div className="flex space-x-2 mt-2">
              
              <form action={setRole} className="inline">
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="doctor" name="role" />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                  Make Doctor
                </button>
              </form>
              
            </div>
          </div>
        );
      })}
    </div>
  );
}
