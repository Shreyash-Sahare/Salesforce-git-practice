import { LightningElement, api, wire } from 'lwc';
import opportunityByAccountId from '@salesforce/apex/opportunityClass.opportunityByAccountId';
const columns = [
    { label: 'Name', fieldName: 'Name'},
    { label: 'StageName', fieldName: 'StageName'},
    { label: 'Amount', fieldName: 'Amount', type: 'Currency'},
];

export default class OpportunityRecords extends LightningElement {
    columns = columns;
    opportunities;

    @api accountId;
    @wire (opportunityByAccountId,{accountId:'$accountId'}) opportunities;
}