public with sharing class getContactList {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact() {
        List<Contact> lstContacts = [SELECT Id, FirstName, LastName, Email FROM Contact];
        return lstContacts;
    }
}