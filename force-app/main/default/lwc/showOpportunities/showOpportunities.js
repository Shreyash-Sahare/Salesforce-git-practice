import { LightningElement, api, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountOpp.getAccount';

const columns = [
{ label: 'Opportunity Name', fieldName: 'Name', type: 'text' },
{ label: 'Stage Name', fieldName: 'StageName', type: 'text' },
{ label: 'Amount', fieldName: 'Amount', type: 'currency', typeAttributes: { currencyCode: 'USD' } }
];

export default class ShowOpportunities extends LightningElement {
@api recordId;
opportunities;
columns = columns;

@wire(getAccount, { accountId: '$recordId' })
wiredOpportunities({ error, data }) {
if (data) {
this.opportunities = data;
} else if (error) {
console.error('Error fetching opportunities:', error);
}
}
}