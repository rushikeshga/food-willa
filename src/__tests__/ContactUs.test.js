const { render, screen } = require("@testing-library/react");
const { default: Contact } = require("../Pages/Contact");
import "@testing-library/jest-dom"
describe("Testing of contact us page",()=>{
  beforeEach(()=>{
    console.log("beforeEach");
})
beforeAll(()=>{
  console.log("beforeAll");
});
afterAll(()=>{
  console.log("afterAll");
})
afterAll(()=>{
  console.log("afterEach");
})

      test('Should Render Button in contact page', () => {
        render(<Contact/>)
        const Text = screen.getByText("Submit");
        expect(Text).toBeInTheDocument();
      });
      test('Should Render Button in contact page', () => {
        render(<Contact/>)
        const Text = screen.getByText("Submit");
        expect(Text).toBeInTheDocument();
      });
      
      test('Should Render Text in contact page', () => {
        render(<Contact/>)
        const Text = screen.getByPlaceholderText("Name")
        expect(Text).toBeInTheDocument();
      });
    
      test('Should Render inputboxes in contact page', () => {
        render(<Contact/>)
        const input = screen.getAllByRole("textbox")
        expect(input.length).not.toBe(3);
      });
})