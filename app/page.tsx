import UserInformation from "@/components/UserInformation";

export default function Home() {
  return (
    <div className="grid">
      <section>
        {/* user information */}
        <UserInformation />
      </section>
      <section>
        {/* post form  */}
        {/* post feed */}
      </section>
      <section>{/* widget */}</section>
    </div>
  );
}
