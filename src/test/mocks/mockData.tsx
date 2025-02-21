export const mockUUID = crypto.randomUUID();
import mockAvatarImg from "../mocks/mockImages/mockAvatar.png";

export const mockGetOrder = {
  id: "d2c9a36a-693f-4565-9d28-354d00894886",
  paymentId: "1C81ZN1GB4240526GUEST000P01",
  email: "test@example.com",
  firstName: "Test",
  lastName: "User",
  phoneNumber: "082604",
  city: "Poland",
  street: "Fefefe",
  houseNumber: "324",
  postalCode: "30-698",
  apartmentNumber: "234",
  deliveryDetails: "",
  paymentStatus: "Pending",
  orderStatus: "NotCompleted",
  gadgets: [
    {
      name: "Przedmiot Testowy",
      totalUnitPrice: 199,
      size: "XXL",
      count: 3,
      totalPrice: 597,
    },
  ],
};

export const mockOnlineOptions = [
  {
    name: "Pakiet 3-miesięczny",
    price: 300,
    taxInPercent: 23,
    monthCount: 3,
    totalPrice: 369,
  },
  {
    name: "Pakiet 6-miesięczny",
    price: 600,
    taxInPercent: 23,
    monthCount: 6,
    totalPrice: 738,
  },
  {
    name: "Pakiet 12-miesięczny",
    price: 1000,
    taxInPercent: 23,
    monthCount: 12,
    totalPrice: 1230,
  },
];

export const mockItem1 = {
  id: "1",
  name: "T-shirt",
  description: "Bardzo fajny t-shirt",
  shortDescription: "Super koszulka",
  price: 59,
  count: 99,
  imageDetails: [
    {
      imageId: "b613539e-5183-4ae5-abd8-53b06d901e2d",
      isPrimary: true,
    },
    {
      imageId: "d5c100ba-3d91-49a0-a166-4abe2f5d60f8",
      isPrimary: false,
    },
  ],
  availableSizes: {
    XXL: 100,
  },
  quantity: 1,
  path: "mockPath.com",
};

export const mockItem2 = {
  id: "2",
  name: "Adidasy",
  description: "Wygodne i wytrzymałe adidasy",
  shortDescription: "Super koszulka",
  price: 229,
  count: 99,
  imageDetails: [
    {
      imageId: "b913539e-5183-4ae5-abd8-53b06d901e2d",
      isPrimary: true,
    },
    {
      imageId: "d1c100ba-3d91-49a0-a166-4abe2f5d60f8",
      isPrimary: false,
    },
  ],
  availableSizes: {
    XXL: 100,
  },
  quantity: 1,
  path: "mockPath.com",
};

export const mockTraining1 = {
  id: "66094f9625036526c90098af",
  name: "Super Pakiet",
  description: "tttttttttttttttttt",
  price: 234,
  imageDetails: [
    {
      imageId: "b613539f-5183-4ae5-abd8-53b06d901e2d",
      isPrimary: true,
    },
    {
      imageId: "d5c100bz-3d91-49a0-a166-4abe2f5d60f8",
      isPrimary: false,
    },
  ],
};

export const mockTraining2 = {
  id: "66094f9625036526c90099af",
  name: "Super Pakiet2",
  description: "ewgwegwegttttt",
  price: 933,
  imageDetails: [
    {
      imageId: "b613539e-5583-4ae5-abd8-53b06d901e2d",
      isPrimary: true,
    },
    {
      imageId: "d0c100ba-3d91-49a0-a166-4abe2f5d60f8",
      isPrimary: false,
    },
  ],
};

export const mockTrainingList = [mockTraining1, mockTraining2];

export const mockItemList = [mockItem1, mockItem2];

export const mockImageFile1 = new File(
  [""], // Empty array as placeholder for image content
  "example.jpg", // File name
  {
    type: "image/jpeg", // Image file type
    lastModified: 2846548, // Last modified date
  }
);

export const mockImageFile2 = new File(
  [""], // Empty array as placeholder for image content
  "example1.jpg", // File name
  {
    type: "image/jpeg", // Image file type
    lastModified: 2854548, // Last modified date
  }
);

export const mockImageArr = [mockImageFile1, mockImageFile2];

export const mockImageFileWithUUID1 = {
  image: mockImageFile1,
  randomId: crypto.randomUUID(),
};

export const mockImageArrWithUUID = [
  {
    image: mockImageFile1,
    randomId: crypto.randomUUID(),
  },
  {
    image: mockImageFile2,
    randomId: crypto.randomUUID(),
  },
];

export const mockReview1 = {
  imgUrl: mockAvatarImg,
  rate: 5,
  reviewText: "Super trener!",
  username: "ZadowolonyKlient21321",
};

export const mockReview2 = {
  imgUrl: mockAvatarImg,
  rate: 5,
  reviewText: "Super trener!",
  username: "ZadowolonyKlient21321",
};

export const mockReview3 = {
  imgUrl: mockAvatarImg,
  rate: 5,
  reviewText: "Super trener!",
  username: "ZadowolonyKlient21321",
};

export const mockReview4 = {
  imgUrl: mockAvatarImg,
  rate: 5,
  reviewText: "Świetny trener!",
  username: "ZadowolonyKlient5551",
};

export const mockReview5 = {
  imgUrl: mockAvatarImg,
  rate: 5,
  reviewText: "Super trener! :)",
  username: "ZadowolonyKlient22341",
};

export const mockReview6 = {
  imgUrl: mockAvatarImg,
  rate: 3,
  reviewText: "Średni trener",
  username: "ZadowolonyKlient21321",
};

export const mockReview7 = {
  imgUrl: mockAvatarImg,
  rate: 5,
  reviewText: "Super trener!",
  username: "ZadowolonyKlient21321",
};

export const mockReviewList = [mockReview1, mockReview2, mockReview3];
export const mockReviewList2 = [
  mockReview1,
  mockReview2,
  mockReview3,
  mockReview4,
  mockReview5,
  mockReview6,
  mockReview7,
];

export const mockImage1 = {
  imageId: "d1c100ba-3d91-49a0-a166-4abe2f5d60f8",
  isPrimary: false,
};

export const mockImage2 = {
  imageId: "d2c100ba-3d91-49a0-a166-4abe2f5d60f8",
  isPrimary: false,
};

export const mockImages = [mockImage1, mockImage2];

export const mockCoach1 = {
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  name: "string",
  description: "string",
  imageDetails: [
    {
      imageId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      isPrimary: true,
    },
  ],
};

export const mockCoach2 = {
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
  name: "string",
  description: "string",
  imageDetails: [
    {
      imageId: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
      isPrimary: true,
    },
  ],
};

export const mockCoachesList = [mockCoach1, mockCoach2];
