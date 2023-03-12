const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("count", function () {
  let counterFactory, counter, owner, rest;

  beforeEach(async function () {
    [owner, ...rest] = await ethers.getSigners();
    counterFactory = await ethers.getContractFactory("Counter");
    counter = await counterFactory.deploy();
  });

  it("Case1: 部署者成功调用 count()", async function () {
    await counter.connect(owner).count();
    expect(await counter.counter()).to.equal(1);
  });

  it("Case2: 其他地址调用 count() 失败", async function () {
    for (const address of rest) {
      await expect(counter.connect(address).count()).to.be.revertedWith(
        "Only owner can call this function."
      );
    }
  });

  it("Case3: test add", async () => {
    await counter.connect(owner).add(5);
    expect(await counter.counter()).to.equal(5);
  });
});
