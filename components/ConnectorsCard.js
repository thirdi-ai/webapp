export default function ConnectorsCard() {
  return (
    <div>
      <Card>
        <div className="w-full h-full flex place-items-center relative gap-7">
          <div className="card-image bg-white-400 rounded-[18px] w-[64px] h-[62px] relative">
            <Image src={asset11} alt="csv file" fill />
          </div>
          <div className="card-text w-full flex flex-col gap-2 relative">
            <h1 className="text-base text-black-400">CSV Data Connector</h1>
            <p className="text-[12px] leading-[14.64px] text-black-600 w-[360px]">
              Maximize ROI across your campaigns by using a portfolio strategy
              with a shared budget
            </p>
            <div className="flex-center w-full relative">
              <p className="text-[12px] leading-[14.64px] text-grey-400 w-[420px]">
                Recommended because you have campaigns that share a bid strategy
                but have separate budgets
              </p>
              <button className="btn w-[168px]">Upload</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
