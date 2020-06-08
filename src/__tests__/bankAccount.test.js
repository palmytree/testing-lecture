import bankAccount from '../bankAccount'

describe('Bank account methods and properties', () => {
  // What ever is inside this code will run before each test
  beforeEach(() => {
    bankAccount.balance = 1000
  })

  // Other available conditions available
  // beforeAll()
  // afterAll()
  // afterEach()

  test('Initial balance is 1000', () => {
    expect(bankAccount.balance).toBe(1000)
  })

  test('depositMoney should correctly alter balance', () => {
    bankAccount.depositMoney(1000)
    expect(bankAccount.balance).toBe(2000)
  })

  test('withdraw function correctly alters balance', () => {
    bankAccount.withdrawMoney(5000)
    expect(bankAccount.balance).toBe(-4000)
  })
})
