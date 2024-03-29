module nftc::NFT_Options{

    use std::option;
    use std::signer;
    use std::string;
    use aptos_framework::account;
    use aptos_framework::account::SignerCapability;
    use aptos_framework::object;
    use aptos_token_objects::collection;
    use aptos_token_objects::collection::uri;
    use aptos_token_objects::royalty;

    const ResourceAccountSeed: vector<u8> = b"nftseed";
    const CollectionDescription: vector<u8> = b"Copyrighted NFTs";
    const CollectionName:vector<u8> = b"name";
    const CollectionURI:vector<u8> = b"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg";
    struct ResourceCap has key{
        cap: SignerCapability
    }
    struct CollectionRefsStore has key,store{
        collection_mut_ref:collection::MutatorRef
    }

    fun init_module(sender:&signer)acquires ResourceCap {
        let (resource_signer,resource_cap) = account::create_resource_account(sender,ResourceAccountSeed);


        move_to(
        &resource_signer,
        ResourceCap {
            cap: resource_cap
        });

    let collection_cref = collection::create_unlimited_collection(
        &resource_signer,
        string::utf8(CollectionDescription),
        string::utf8(CollectionName),
        option::some(royalty::create(5, 100, signer::address_of(sender))),
        string::utf8(CollectionURI)
    );
        let collection_signer = object::generate_signer(&collection_cref);
        let collection_mut_ref = collection::generate_mutator_ref(&collection_cref);
        move_to(
            &collection_signer,
            CollectionRefsStore{
            collection_mut_ref
            }
        );
    }
    
}