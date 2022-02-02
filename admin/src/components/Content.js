function Content({data}) {
  return (
    <div className="table-body">
      <table className="table">
        <thead>
            <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Token address</th>
            <th scope="col">Unclaimed Tokens</th>
            <th scope="col">Claimed Tokens</th>
            <th scope="col">Claim</th>
            </tr>
        </thead>
        <tbody>
            {
                data ?
                data && data.tableData.map((row, i) =>
                <tr key={i}>
                    <th scope="row">{row.projectName}</th>
                    <td scope="row">{row.tokenAddress}</td>
                    <td scope="row">{row.unclaimedToken}</td>
                    <td scope="row">{row.claimedToken}</td>
                    <td scope="row">{row.claim}</td>
                </tr>) :
                <tr>nothing</tr>
            }
        
        </tbody>
        </table>
    </div>
  );
}

export default Content;
