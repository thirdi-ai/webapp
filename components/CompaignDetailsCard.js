import Card from "@/components/Card";

export default function CompaignDetailsCard() {
  return (
    <Card>
      <div className="card-details">
        <p className="desc">Compaign Performance</p>
        <h1 className="title">Acme Summer Sale</h1>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col justify-start gap-1">
          <h5 className="text-base">Impressions</h5>
          <span className="text-3xl font-semibold">3,456</span>
          <p className="text-sm text-black text-opacity-60">
            +12% last 30 days
          </p>
        </div>
        <div className="flex flex-col justify-start gap-1">
          <h5 className="text-base">Clicks</h5>
          <span className="text-3xl font-semibold">1,234</span>
          <p className="text-sm text-black text-opacity-60">-5% last 30 days</p>
        </div>
      </div>
    </Card>
  );
}
