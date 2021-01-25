// ** FETCHDATA TEST FILE **
import { fetchData } from "./fetchData";
import axios from "axios";

jest.mock('axios');

describe("fetchData", () => {
  it("fetches data from an api", async () => {

    axios.mockResolvedValue({
      data: [
        {
          Title: "testTitle1",
          Year: "testYear1",
        }
      ],
    });

    let result= await fetchData('react', 1)
    expect(result).toEqual({
      data: [
        {
          Title: "testTitle1",
          Year: "testYear1",
        }
      ],
    });
  });

  it("fetches erroneously data from an api", async () => {
    axios.mockResolvedValue(() => Promise.reject(new Error('Network Error')))
      
    let result= await fetchData('react', 1)
    expect(result).rejects.toThrowError(Error('Network Error'))
  });

});
