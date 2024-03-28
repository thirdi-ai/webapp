export default function CampaignsListPage({ campaigns, showCampaignForm }) {
  return (
    <main className="relative w-full p-[30px]">
      <h1 className="text-3xl mb-8">Upload Campaign Data</h1>
      <table>
        <thead className="font-bold border border-black">
          <tr>
            <th className="px-4 py-1">Campaign Name</th>
            <th className="px-4 py-1">Campaign Goal</th>
            <th className="px-4 py-1">Status</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {campaigns.map((campaign, index) => {
            return (
              <tr key={index}>
                <td className="px-4 py-1">{campaign.campaign_name}</td>
                <td className="px-4 py-1">{campaign.goal}</td>
                <td className="px-4 py-1">{campaign.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={showCampaignForm} className="btn mt-4">Add New Campaign</button>
    </main>
  );
}
