import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/getContactList.getContact'
export default class contactComponent extends LightningElement{
    @wire (getContactList)contacts;
}