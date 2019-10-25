## Vote Net

**Problem**: 
1. According to the present Indian voting system, people are only allowed to vote from their own constituency, which makes it difficult for voters to reach back their hometowns, and in most cases, it is impossible for the voter to make a vote. This inability to vote siginificantly reduces the polling percentage.
2. Transparency and data security

**Etereum**
Ethereum is an open source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality. It supports a modified version of Nakamoto consensus via transaction-based state transitions.

**Solution**:
We propose a system that allow voters to vote remotely by visiting a VoteNet booth nearest to them. 

**How?**
When a voter goes in to a VoteNet booth, his Voter ID will be fetched using a Retina/Fingerprint scanner (Face Recognition for POC), which can be verified from his physical Voter ID Card, following which his data, which is securely kept on Blockchain, will be fetched from our own IPFS/IPNS node. furthermore, contesting candidates from the voter's candidates will be displayed, from which the user can cast his vote to one. The user's vote will remain anonymous and a total count of votes to that candidate will increase. The data, being on blockchain, is immutable and hence the voter's details cannot be modified or deleted.

**Tech Stack**:
- MERN for Front+Backend
- Flask+Python for Machine Learning (Face Recognition)
- IPFS/IPNS + Ethereum for Secure Data Storage
