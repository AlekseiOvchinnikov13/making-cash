export const FAQ_DATA = [
  {
    label: 'What is a Blockchain?',
    text: `A&nbsp;blockchain is&nbsp;a&nbsp;type of&nbsp;distributed ledger technology (DLT) that consists of&nbsp;growing list of&nbsp;records, called blocks, that are securely linked together using cryptography. Each block contains a&nbsp;cryptographic hash of&nbsp;the previous block, a&nbsp;timestamp, and transaction data (generally represented as&nbsp;a&nbsp;Merkle tree, where data nodes are represented by&nbsp;leaves). The timestamp proves that the transaction data existed when the block was created. Since each block contains information about the previous block, they effectively form a&nbsp;chain (compare linked list data structure), with each additional block linking to&nbsp;the ones before&nbsp;it. Consequently, blockchain transactions are irreversible in&nbsp;that, once they are recorded, the data in&nbsp;any given block cannot be&nbsp;altered retroactively without altering all subsequent blocks.
           <br/><br/>
           Blockchains are typically managed by&nbsp;a&nbsp;peer-to-peer (P2P) computer network for use as&nbsp;a&nbsp;public distributed ledger, where nodes collectively adhere to&nbsp;a&nbsp;consensus algorithm protocol to&nbsp;add and validate new transaction blocks. Although blockchain records are not unalterable, since blockchain forks are possible, blockchains may be&nbsp;considered secure by&nbsp;design and exemplify a&nbsp;distributed computing system with high Byzantine fault tolerance.`
  },
  {
    label: 'What is a Proof-of-Stake?',
    text: `Proof-of-stake (PoS) protocols are a&nbsp;class of&nbsp;consensus mechanisms for blockchains that work by&nbsp;selecting validators in&nbsp;proportion to&nbsp;their quantity of&nbsp;holdings in&nbsp;the associated cryptocurrency. This is&nbsp;done to&nbsp;avoid the computational cost of&nbsp;proof-of-work schemes. The first functioning use of&nbsp;PoS for cryptocurrency was Peercoin in&nbsp;2012.
           <br/><br/>
           For a&nbsp;blockchain transaction to&nbsp;be&nbsp;recognized, it&nbsp;must be&nbsp;appended to&nbsp;the blockchain. In&nbsp;the proof of&nbsp;stake blockchain the appending entities are named minters or&nbsp;validators (in&nbsp;the proof of&nbsp;work blockchains this task is&nbsp;carried out by&nbsp;the miners); in&nbsp;most protocols, the validators receive a&nbsp;reward for doing&nbsp;so. For the blockchain to&nbsp;remain secure, it&nbsp;must have a&nbsp;mechanism to&nbsp;prevent a&nbsp;malicious user or&nbsp;group from taking over a&nbsp;majority of&nbsp;validation. PoS accomplishes this by&nbsp;requiring that validators have some quantity of&nbsp;blockchain tokens, requiring potential attackers to&nbsp;acquire a&nbsp;large fraction of&nbsp;the tokens on&nbsp;the blockchain to&nbsp;mount an&nbsp;attack.
           <br/><br/>
           Proof of&nbsp;work (PoW), another commonly used consensus mechanism, uses a&nbsp;validation of&nbsp;computational prowess to&nbsp;verify transactions, requiring a&nbsp;potential attacker to&nbsp;acquire a&nbsp;large fraction of&nbsp;the computational power of&nbsp;the validator network. This incentivizes consuming huge quantities of&nbsp;energy. PoS is&nbsp;more energy-efficient.
           <br/><br/>
           Early PoS implementations were plagued by&nbsp;a&nbsp;number of&nbsp;new attacks that exploited the unique vulnerabilities of&nbsp;the PoS protocols, eventually two dominant designs emerged: so&nbsp;called Byzantine Fault Tolerance-based and Chain-based approaches.`
  },
  {
    label: 'What is a Validator?',
    text: 'A&nbsp;blockchain validator is&nbsp;someone who is&nbsp;responsible for verifying transactions on&nbsp;a&nbsp;blockchain. Once transactions are verified, they are added to&nbsp;the distributed ledger. In&nbsp;proof of&nbsp;work (PoW) systems like Bitcoin, validators, also known as&nbsp;miners, solve complex computational math problems in&nbsp;order to&nbsp;win the right to&nbsp;verify transactions and receive rewards for the &laquo;work&raquo;. In&nbsp;proof of&nbsp;stake (PoS) systems validators are given rewards as&nbsp;long as&nbsp;they stake the network&rsquo;s token and correctly participate in&nbsp;the network. This mechanism helps secure the network by&nbsp;imposing the need to&nbsp;lock up&nbsp;value in&nbsp;the network in&nbsp;order to&nbsp;participate in&nbsp;the consensus decisions.'
  },
  {
    label: 'What is a Delegator?',
    text: `Even if&nbsp;it&nbsp;is&nbsp;not a&nbsp;Validator, there is&nbsp;a&nbsp;way to&nbsp;participate indirectly in&nbsp;the consensus process. It&nbsp;is&nbsp;to&nbsp;delegate stake to&nbsp;a&nbsp;specific Validator. Every node on&nbsp;the network can delegate stake to&nbsp;a&nbsp;specific Validator. This node is&nbsp;called Delegator.
           <br/><br/>
           The voting power of&nbsp;the delegated Validator will be&nbsp;increased by&nbsp;the delegated stake, and the compensation to&nbsp;be&nbsp;received by&nbsp;the Validator will also increase accordingly. At&nbsp;this time, the Delegator that has delegated his own stake will also receive a&nbsp;portion of&nbsp;the compensation that the Validator will receive as&nbsp;compensation for delegation. The stakes that have been deposited to&nbsp;become a&nbsp;Validator are bound to&nbsp;be&nbsp;unavailable while the node is&nbsp;acting as&nbsp;a&nbsp;Validator. If&nbsp;the Validator performs malicious actions such as&nbsp;not following the agreed consensus mechanism, some of&nbsp;or&nbsp;all of&nbsp;the deposits will disappear. This is&nbsp;a&nbsp;kind of&nbsp;punishment concept for the unfair conduct of&nbsp;the consensus process, which solves the Nothing at&nbsp;Stake problem of&nbsp;the traditional PoS algorithm.`
  },
  {
    label: 'What is a Node Operator?',
    text: `A&nbsp;node operator runs software that keeps a&nbsp;full copy of&nbsp;the blockchain and broadcasts transactions across the network. Nodes are needed in&nbsp;order to&nbsp;make blockchains work.
           <br/><br/>
           An&nbsp;operator ensures that nodes run with enough resources to&nbsp;keep nodes stable and performant. Nodes need to&nbsp;have enough RAM, disk space, bandwidth, etc.&nbsp;to&nbsp;stay operational and serve the network.`
  }
];