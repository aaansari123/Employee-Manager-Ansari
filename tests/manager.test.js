const Manager = require("../lib/manager");

describe("manager class", () => {
    describe("getRole method", () => {
      it("return role", () => {
        const manager = new Manager( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        manager.getRole();
        expect("manager");
      })  
  })
  describe("getName method", () => {
      it("return name", () => {
        const manager = new Manager( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        manager.getName();
        expect("tom");
      })  
  })
  describe("getId method", () => {
      it("return id", () => {
        const manager = new Manager( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        manager.getId();
        expect(12);
      })  
  })
  describe("getEmail method", () => {
      it("return email", () => {
        const manager = new Manager( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        manager.getEmail();
        expect("tom@email.com");
      })  
  })
  describe("getUnique method", () => {
    it("return officeNumber", () => {
      const manager = new Manager( [
        { name: "tom", id: 12, email: "tom@email.com", officeNumber: 43 }
      ]);
      manager.getUnique();
      expect(43);
    })  
})
  });