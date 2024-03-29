module nftc::License{
// Create and query authorized content
    use std::string;
    use aptos_std::smart_vector::SmartVector;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin;
    use aptos_framework::timestamp;


    struct License has key{
        token:coin::Coin<AptosCoin>,
        time_limit: u64,
        Scope_of_authorization: SmartVector<vector<string::String>>,
        // create_time: timestamp::CurrentTimeMicroseconds,
    }
    fun create_license(){

    }
    // get license
    public fun get_license() {

    }

}