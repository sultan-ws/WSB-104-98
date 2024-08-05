import Link from "next/link";

export default function Home() {
  return (
   <div>
    hello
    <Link href='/about'>abput</Link>
        <Link href='/contact'>Contact</Link>
   </div>
  );
}
