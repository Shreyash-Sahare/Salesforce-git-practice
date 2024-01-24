public with sharing class accountClass {

    public Account actObj{get;set;}
    public accountClass() {
        actObj = new Account();
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return[
            SELECT id, Name, type from Account
        ];
    }
}