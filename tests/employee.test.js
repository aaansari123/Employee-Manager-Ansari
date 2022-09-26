const Employee = require("../lib/employee");


describe("employee class", () => {
  describe("getRole method", () => {
    it("return role", () => {
      const employee = new Employee( [
        { name: "tom", id: 12, email: "tom@email.com" }
      ]);
      employee.getRole();
      expect("Employee");
    })  
})
describe("getName method", () => {
    it("return name", () => {
      const employee = new Employee( [
        { name: "tom", id: 12, email: "tom@email.com" }
      ]);
      employee.getName();
      expect("tom");
    })  
})
describe("getId method", () => {
    it("return id", () => {
      const employee = new Employee( [
        { name: "tom", id: 12, email: "tom@email.com" }
      ]);
      employee.getId();
      expect(12);
    })  
})
describe("getEmail method", () => {
    it("return email", () => {
      const employee = new Employee( [
        { name: "tom", id: 12, email: "tom@email.com" }
      ]);
      employee.getEmail();
      expect("tom@email.com");
    })  
})
});
