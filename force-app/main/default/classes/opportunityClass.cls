public with sharing class opportunityClass {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> opportunityByAccountId(String accountId){
        return[
            SELECT Id, Name, StageName, Amount FROM Opportunity WHERE AccountId=:accountId
        ];
    } 
}