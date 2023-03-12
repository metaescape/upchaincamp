1. 修改 Counter 合约，仅有部署者可以调用 count()

   [Counter.sol](./Counter.sol)

2. 使用 hardhat 部署修改后的 Counter

   [deploy.js](script/deploy.js)

3. 使用 Hardhat 测试 Counter:

   [count_test.js](test/count_test.js)
   - Case1: 部署者成功调用 count()
   - Case2: 其他地址调用 count() 失败
4. 代码开源到区块浏览器(npx hardhat verify ...) /写上合约地址
