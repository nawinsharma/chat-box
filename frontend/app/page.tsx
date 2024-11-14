import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
export default async function LandingPage() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Navbar user={session?.user ?? null} />
      {/* Hero Section */}
      <Landing />

   
    </div>
  );
}
