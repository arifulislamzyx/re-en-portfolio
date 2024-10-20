import CV from "@/sections/Home/CV";
import Header from "@/sections/Home/Header";
import Interest from "@/sections/Home/Interest";
import Introduction from "@/sections/Home/Introduction";
import PastUpdates from "@/sections/Home/PastUpdates";
import Publications from "@/sections/Home/Publications";
import Updates from "@/sections/Home/LastUpdates";
import Quotes from "@/sections/Home/Quotes";

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <CV />
      <Interest />
      <Publications />
      <Updates />
      <PastUpdates />
      <Quotes />
    </div>
  );
}
