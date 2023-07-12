describe("test", () => {

  function contains(n:number[], num:number) {
    return n.includes(num)
  }

  it("verify " , () => {

    const includes = contains([2,3,4], 2)
    expect(includes).toBe(true)

  })
})