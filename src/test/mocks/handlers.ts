import { http, HttpResponse } from "msw";
// import shirtImg from "./mockImages/Koszulka.jpg";

// const imageId = "a031bd9e-3344-4736-acbd-6fe55ce6b25d"

export const successGetHandlers = [
  http.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/Gadgets`, () => {
    return HttpResponse.json(
      [
        {
          id: "65f0c996da08122ab6bc9431",
          name: "T-shirt",
          description: "Super t-shirt",
          price: 49,
          count: 99,
          imageDetails: [
            {
              imageId: "1fa85f64-5717-4562-b3fc-2c963f66afa6",
              isPrimary: true,
            },
          ],
        },
        {
          id: "65f0c996da08122ab6bc9436",
          name: "Adidasy",
          description: "Super adidasy",
          price: 249,
          count: 99,
          imageDetails: [
            {
              imageId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              isPrimary: true,
            },
          ],
        },
      ],
      { status: 200 }
    );
  }),
  http.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/Pockets`, () => {
    return HttpResponse.json(
      [
        {
          id: "65f0c996da08122cd6bc9431",
          name: "Pakiet podstawowy",
          description: "Świetny na start",
          price: 499,
          imageIds: [],
        },
        {
          id: "65g0c996da08144cd6bc9431",
          name: "Pakiet zaawansowany",
          description: "Dla koksów",
          price: 999,
          imageIds: [],
        },
      ],
      { status: 200 }
    );
  }),
  http.get(
    `${import.meta.env.VITE_REACT_APP_API_URL}/api/Images/:imageId`,
    async () => {
      const buffer = await fetch(`./mockImages/Koszulka.jpg`).then((response) =>
        response.arrayBuffer()
      );
      return HttpResponse.arrayBuffer(buffer, {
        headers: {
          "Content-Type": "image/*",
        },
      });
    }
  ),
];
export const emptyGetHandlers = [
  http.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/Gadgets`, () => {
    return HttpResponse.json([], { status: 200 });
  }),
  http.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/Pockets`, () => {
    return HttpResponse.json([], { status: 200 });
  }),
  http.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/Images/:id`, () => {
    return Response.json([], { status: 200 });
  }),
];

export const errorGetHandlers = [
  http.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/Gadgets`, () => {
    return HttpResponse.json(
      { message: "GetItems Error Message" },
      { status: 400 }
    );
  }),
  http.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/Pockets`, () => {
    return Response.json(
      { message: "GetTrainingPackages Error Message" },
      { status: 400 }
    );
  }),
  http.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/Images/:id`, () => {
    return Response.json({ message: "GetImage Error Message" });
  }),
];

// export async function getImage(imageId : string) {
//     const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/Images/${imageId}`, {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//     if(!response.ok) {
//         throw {
//             status: response.status,
//             message: "Podczas ładowania zdjęcia wystąpił błąd."
//         }
//     }
//     const data = response.blob()
//     console.log("getItemImageData", data)
//     return data
// }
