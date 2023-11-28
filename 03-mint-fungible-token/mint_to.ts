import {
    Keypair,
    Connection,
    Commitment,
    clusterApiUrl,
    PublicKey,
} from "@solana/web3.js";
import bs58 from "bs58"
import "dotenv/config"
import { mintTo } from "@solana/spl-token";

const start = async () => {
    const COMMITMENT: Commitment = "finalized"
    const CONNECTION = new Connection(clusterApiUrl("devnet"), COMMITMENT)
    const PAYER = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""))
    const temp = await mintTo(CONNECTION, PAYER, new PublicKey("CfhGJVEcwWxnUydFeq8xiajngBXnpmFj9cSm4ypXR1P3"), new PublicKey("8Zj9NL8WPBXW2cVPHo818oVtfKmKTTc4P32kriocLwso"), PAYER.publicKey, 1)
    console.log(temp.toString());
}

start();