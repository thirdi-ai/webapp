import CompanyInfoForm from "@/components/HomePage/CompanyInfoForm";

export default function HomePage() {
  const d = new Date();
  const newDate = d.toLocaleDateString("default", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <main className="p-7">
      <p className="text-xl">{newDate}</p>
      <h1 className="text-[62px] mb-6">Welcome!</h1>
      <div>
        <CompanyInfoForm/>
      </div>
    </main>
  );
}
