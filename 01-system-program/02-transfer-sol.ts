import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('2MoJSDMkNsGR8rUQBsTkHosWxBHyPm7amCsqupeyHPEGYH2scW7mrhNUABdi5W7qH7udFFmBjbWpFK9R46mU4wJK')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('DkcryX2SuAKsVmFaVx551AJM747EYuF5BQwUEAUTimzj');
    const publicKeyTo = new Web3.PublicKey('7SebQ9Tp7SjuFsD54E2JD3WN4bTC4uUKXtChvREwi3Wa');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 15000,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();