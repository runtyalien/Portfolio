import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-16 py-24">
        <HomeBtn />
        {children}
    </main>
  );
}
