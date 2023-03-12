1. 修改 Counter 合约，仅有部署者可以调用 count()

   [Counter.sol](contracts/Counter.sol)

2. 使用 hardhat 部署修改后的 Counter

   [deploy.js](scripts/deploy.js)

3. 使用 Hardhat 测试 Counter:

   [count_test.js](test/count_test.js)

   - Case1: 部署者成功调用 count()
   - Case2: 其他地址调用 count() 失败

4. 代码开源到区块浏览器(npx hardhat verify ...) /写上合约地址

[合约 0x289c1f2b256d432df5CCAc83E109C6160691100f goerliscan](https://goerli.etherscan.io/address/0x289c1f2b256d432df5CCAc83E109C6160691100f)
