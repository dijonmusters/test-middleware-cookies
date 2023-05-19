import { headers, cookies } from "next/headers";

export default function Home() {
  console.log("running Server Component");
  const headerList = headers();
  const cookieList = cookies().getAll();
  return <pre>{JSON.stringify({ headerList, cookieList }, null, 2)}</pre>;
}
