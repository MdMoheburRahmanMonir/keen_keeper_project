import Dashboard from "@/components/Dashboard"; 
import Friends from "@/components/Friends";
import KeenkeeperFooter from "@/components/KeenkeeperFooter";

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto text-center">
        <Dashboard></Dashboard> 
        <Friends></Friends>
      </div> 
      <KeenkeeperFooter></KeenkeeperFooter>
    </div>
  );
}
