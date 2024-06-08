function TaskSection2() {
  return (
    <>
      <div class="w-11/12 px-5 py-10 mx-auto lg:px-32">
        <div class="flex flex-col w-full mx-auto mb-2 prose text-left prose-md">
          <h1 className="font-medium text-2xl text-slate-700">
            Here is the background information on your task
          </h1>
          <p className="text-slate-600 my-10">
            You’ve been asked to assist with some development to add a chart to
            a trader’s dashboard allowing them to better identify
            under/over-valued stocks.
          </p>
          <p className="text-slate-600">
            The trader would like to be able to monitor two historically
            correlated stocks and be able to visualise when the correlation
            between the two weakens (i.e. one stock moves proportionally more
            than the historical correlation would imply). This could indicate a
            potential trade strategy to simultaneously buy the relatively
            underperforming stock and sell the relatively outperforming stock.
          </p>
          <p className="text-slate-600 my-10">
            Assuming the two prices subsequently converge, the trade should be
            profitable. Most data visualisation for our traders is built on
            JPMorgan Chase's Perspective data visualisation software, which is
            now open source. If you want to explore that, a link is provided in
            the resources section. Before implementing this request using
            perspective, first, you’ll need to interface with the relevant
            financial data feed and make the necessary adjustments to facilitate
            the monitoring of potential trade opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
export default TaskSection2;
