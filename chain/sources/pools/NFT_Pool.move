module nftc::NFT_Pool{
    use aptos_framework::coin;
    // friend nftc::Ticket;

    const  EINVALID_ADDRESS: u64 = 301;
    struct NFT_Pool<phantom CoinType> has key,store{
        token: coin::Coin<CoinType>
    }
}