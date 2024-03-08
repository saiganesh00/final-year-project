import Navbar from "@/components/normal/Navbar";
import Link from "next/link";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* <div >
        
        
      </div> */}
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
