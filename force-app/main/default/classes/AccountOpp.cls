public with sharing class AccountOpp {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAccount(Id accountId) {
    return [SELECT Id, Name, StageName, Amount FROM Opportunity WHERE AccountId = :accountId];
    }
}