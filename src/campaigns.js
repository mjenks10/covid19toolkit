
import React from "react"
import CAMPAIGNS from "./campaignquality"
import DataTable from 'react-data-table-component'


function Campaign(prop){

const campaigns = CAMPAIGNS
const columns = [
  
  {
    selector: 'campaign_image_url',
    sortable: true,
    width : '80px',
    cell: row => <img src={row.campaign_image_url} height='45px' width='45px'></img>
  },
  {
    name: 'Campaign Title',
    selector: 'title',
    sortable: true,
    width: "300px",
  },
  {
    name: 'CampaignID',
    selector: 'campaign_id',
    sortable: true,
    width : '110px',
  },
  {
    name: 'Current Amount',
    width : '110px',
    selector: 'current_amount',
    sortable: true,
    cell: row => <div>${row.current_amount}</div>
  },

  {
    name: 'Average Donation',
    selector: 'avg_amount_donated',
    sortable: true,
    width: "110px",
    cell: row => <div>${row.avg_amount_donated.toFixed(2)}</div>
  },

  {
    name: 'Donators',
    selector: 'donators',
    width : '110px',
    sortable: true,
  },

  {
    name: 'Quality Score',
    selector: 'quality_score',
    width : '125px',
    sortable: true,
    cell: row => <div>{row.quality_score.toFixed(5)}</div>
  },
  {
    name: 'GoFundMe Url',
    selector: 'url',
    sortable: true,
    cell: row => <a style={{color:"blue"}} href ={row.url} target="_blank">GoFundMe Link</a>
  },
]
    return (
        <>
      <div style={{color:"white", paddingLeft:"100px", paddingRight:"100px"}}>
        <h1>Current Campaigns</h1>
        <DataTable
            pagination={true}
            defaultSortField={"quality_score"}
            defaultSortAsc = {false}
            columns={columns}
            data={campaigns}
        />
      </div>
    </>
    )
}export default Campaign
