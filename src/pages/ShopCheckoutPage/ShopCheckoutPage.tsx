import { redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../api/api";
import ShopCheckoutForm from "../../components/ShopCheckoutForm/ShopCheckoutForm";
import { useEffect } from "react";
import { z } from "zod";
import validator from "validator";

const UserDataSchema = z.object({
  email: z.string().email({ message: "Nieprawidłowy adres email." }),
  firstName: z
    .string()
    .min(2, { message: "Imię powinno zawierać minimum 2 litery." })
    .max(50, { message: "Imię nie powinno być dłuższe niż 50 znaków." }),
  lastName: z
    .string()
    .min(2, { message: "Nazwisko powinno zawierać minimum 2 litery." })
    .max(50, { message: "Nazwisko nie powinno być dłuższe niż 50 znaków." }),
  phoneNumber: z.string().refine(validator.isMobilePhone, {
    message: "Nieprawidłowy numer telefonu.",
  }),
  city: z.string(),
  street: z.string(),
  postalCode: z
    .string()
    .max(6, { message: "Podany kod pocztowy jest zbyt długi." }),
  streetNumber: z
    .string()
    .max(3, { message: "Podano nieprawidłowy numer ulicy." }),
  apartmentNumber: z
    .string()
    .max(3, { message: "Podano nieprawidłowy numer mieszkania." })
    .optional(),
});

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  // user data
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phone") as string;
  const location = formData.get("location") as string;
  const zipCode = formData.get("zipCode") as string;
  const street = formData.get("street") as string;
  const streetNumber = formData.get("streetNumber") as string;
  const apartmentNumber = formData.get("apartmentNumber") as string;
  const userData = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    city: location,
    street: street,
    postalCode: zipCode,
    streetNumber: streetNumber,
    apartmentNumber: apartmentNumber,
  };

  const isUserDataValid = UserDataSchema.safeParse(userData);
  if (isUserDataValid.success) {
    // products data
    const products = formData.getAll("product") as unknown as string[];
    // training plan data
    const trainingPlanOnline = formData.get("onlineOptionName") as string;
    if (products) {
      // create object array from array of arrays
      const listOfProductObjects: {
        id: string;
        quantity: number;
        size: string;
      }[] = [];
      for (const product of products) {
        listOfProductObjects.push({
          id: product.split(",")[0],
          quantity: parseInt(product.split(",")[1]),
          size: product.split(",")[2],
        });
      }
      if (listOfProductObjects.length === products.length) {
        const redirectUrl = await createOrder({
          products: listOfProductObjects,
          userData: userData,
          onlineOptionName: trainingPlanOnline || "",
        });
        // cleaning shoppingCart
        localStorage.removeItem("shoppingCart");
        localStorage.removeItem("onlineOption");
        return redirect(redirectUrl);
      } else {
        throw new Error("Błąd podczas mapowania listy produktów.");
      }
    }
    if (trainingPlanOnline) {
      const redirectUrl = await createOrder({
        userData: userData,
        onlineOptionName: trainingPlanOnline,
      });
      // cleaning shoppingCart
      localStorage.removeItem("shoppingCart");
      localStorage.removeItem("onlineOption");
      return redirect(redirectUrl);
    }
  }
  return isUserDataValid.error?.errors.map((error) => ({
    path: error.path[0],
    message: error.message,
  }));
}

export default function ShopCheckoutPage() {
  const formErrors = useActionData() as Awaited<
    { path: string[]; message: string }[]
  >;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      {formErrors && (
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          {formErrors.map((error) => (
            <p
              style={{ color: "red", marginLeft: "5.7%", marginBlock: "1rem" }}
            >
              {error.message}
            </p>
          ))}
        </div>
      )}
      <ShopCheckoutForm />
    </>
  );
}
