const Engineer = require("../lib/engineer");

describe("engineer class", () => {
    describe("getRole method", () => {
      it("return role", () => {
        const engineer = new Engineer( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        engineer.getRole();
        expect("engineer");
      })  
  })
  describe("getName method", () => {
      it("return name", () => {
        const engineer = new Engineer( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        engineer.getName();
        expect("tom");
      })  
  })
  describe("getId method", () => {
      it("return id", () => {
        const engineer = new Engineer( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        engineer.getId();
        expect(12);
      })  
  })
  describe("getEmail method", () => {
      it("return email", () => {
        const engineer = new Engineer( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        engineer.getEmail();
        expect("tom@email.com");
      })  
  })
  describe("getUnique method", () => {
    it("return github", () => {
      const engineer = new Engineer( [
        { name: "tom", id: 12, email: "tom@email.com", github: 'tom123' }
      ]);
      engineer.getUnique();
      expect("tom123");
    })  
})
  });
  