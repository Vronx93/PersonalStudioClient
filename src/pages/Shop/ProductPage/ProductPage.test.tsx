import { mockItem1 } from "../../../test/mocks/mockData"
vi.mock("react-router-dom", async (importOriginal) => {
    const actual : object = await importOriginal()
    return {
        ...actual,
        useLoaderData: vi.fn(() => {return {shopItem: mockItem1}
    })
}})
vi.mock("../../../api/api", () => ({
    getImage: vi.fn(() => {
        return(new Promise<Blob>((resolve) => {
            resolve((new Blob([""], { type: 'image/jpeg' })))
        }))
    })
}))
vi.mock("../../../components/ProductImagesList/ProductImagesList", () => ({
    default: vi.fn(() => {return <p>Images should be here</p>})
}))
global.URL.createObjectURL = vi.fn(() => 'mock.url');

describe("ProductPage", () => {
    test("should render product details", () => {
        // render(<MemoryRouter><ProductPage /></MemoryRouter>)
    })
    test("should render addToCartBtn", () => {
        
    })
    test("should render quantity input, and update price on change", () => {
        
    })
})