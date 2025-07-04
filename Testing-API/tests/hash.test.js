
// const hashedPassword=require('../testing');
// const bcrypt = require('bcrypt');


// describe("testing the hashed password",function(){
//   it("should hash a password correctly",async function(){
//     const password='abcdefghijklmnopqrstuvwxyz';
//     const hashed=await hashedPassword(password);

//      // ✅ Check: Hashed password should not match plain text
//     expect(hashed).not.toBe(password);

//     // ✅ Check: Hashed password can be verified using bcrypt
//     const isMatch = await bcrypt.compare(password, hashed);
//     expect(isMatch).toBe(true);
    
//   })
// });


const hashedPassword = require('../testing');
const bcrypt = require('bcrypt');

describe("🔐 Password Hashing Tests", () => {
  test("should hash a password correctly", async () => {
    const password = 'abcdefghijklmnopqrstuvwxyz';
    
    const hashed = await hashedPassword(password);

    // ✅ Hashed password should NOT be equal to plain text
    expect(hashed).not.toBe(password);

    // ✅ Verify the password using bcrypt.compare
    const isMatch = await bcrypt.compare(password, hashed);
    expect(isMatch).toBe(true);
  });

  test("should not match incorrect password", async () => {
    const password = 'securepassword';
    const hashed = await hashedPassword(password);

    const isMatch = await bcrypt.compare('wrongpassword', hashed);
    expect(isMatch).toBe(false);
  });
});


// describe() block groups tests (optional for one test).
// test() is equivalent to it(), used directly.

// 🔹 Use describe() when:
// You are grouping multiple related tests.
// You want better structure, readability, or organization in larger test files.
// You might have common setup/teardown logic (like beforeEach() or afterEach()).
// ✅ Example (Common in industry):

// describe("User authentication tests", () => {
//   test("should hash a password correctly", async () => {
//     // test 1
//   });

//   test("should not match wrong password", async () => {
//     // test 2
//   });

//   test("should throw error for invalid input", async () => {
//     // test 3
//   });
// });



// 🔹 Use test() directly (without describe) when:
// You're writing a quick, simple test file.
// There's only one test, or a couple of unrelated tests.

// test("adds 1 + 2 to equal 3", () => {
//   expect(1 + 2).toBe(3);
// });



// const hashedPassword = require('../testing');
// const bcrypt = require('bcrypt');

// test("should hash a password correctly", async () => {
//   const password = 'abcdefghijklmnopqrstuvwxyz';
//   const hashed = await hashedPassword(password);

//   // ✅ Check: Hashed password should not match plain text
//   expect(hashed).not.toBe(password);

//   // ✅ Check: Hashed password can be verified using bcrypt
//   const isMatch = await bcrypt.compare(password, hashed);
//   expect(isMatch).toBe(true);
// });


