import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import Link from "next/link";
import { Children } from "react";

const DashboardLayout = ({children}) => {
    return(
        <>
        <div style={{display:'flex', minHeight:'100vh'}}>
            <aside style={{background:'pink', paddingTop:'2rem', paddingRight:'1.5rem'}}>
                <ul style={{marginBottom:'0.5rem', listStyleType:'none', display:'flex', flexDirection:"column", gap:'1rem'}}>
                    <li>
                        <Link href='/blog'>
                        <span style={{display:'block', color:'black', fontWeight:'bold'}}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog/first'>
                        <span style={{display:'block', color:'black', fontWeight:'bold'}}>Pusrchase request</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog/second'>
                        <span style={{display:'block', color:'black', fontWeight:'bold'}}>Upload receipts</span>
                        </Link>
                    </li>
                </ul>
            </aside>
            <section style={{display:'flex', flex:'1'}}>{children}</section>
        </div>
        </>
    );
};

export default DashboardLayout;
  