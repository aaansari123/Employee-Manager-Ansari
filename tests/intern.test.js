const Intern = require("../lib/intern");

describe("intern class", () => {
    describe("getRole method", () => {
      it("return role", () => {
        const intern = new Intern( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        intern.getRole();
        expect("intern");
      })  
  })
  describe("getName method", () => {
      it("return name", () => {
        const intern = new Intern( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        intern.getName();
        expect("tom");
      })  
  })
  describe("getId method", () => {
      it("return id", () => {
        const intern = new Intern( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        intern.getId();
        expect(12);
      })  
  })
  describe("getEmail method", () => {
      it("return email", () => {
        const intern = new Intern( [
          { name: "tom", id: 12, email: "tom@email.com" }
        ]);
        intern.getEmail();
        expect("tom@email.com");
      })  
  })
  describe("getUnique method", () => {
    it("return school", () => {
      const intern = new Intern( [
        { name: "tom", id: 12, email: "tom@email.com", school: 'drexel' }
      ]);
      intern.getUnique();
      expect("drexel");
    })  
})
  });
  