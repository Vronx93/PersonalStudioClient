import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { IsLoggedInContextProvider } from "../contexts/IsLoggedInContext";
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext";
import { CurrentUploadImagesContextProvider } from "../contexts/CurrentUploadImagesContext";
import { IsNavbarOfferOpenContextProvider } from "../contexts/IsNavbarOfferOpen";
import { ShoppingCartTrainingPlansProvider } from "../contexts/ShoppingCartTrainingPlans";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <IsLoggedInContextProvider>
      <QueryClientProvider client={new QueryClient()}>
        <ShoppingCartProvider>
          <ShoppingCartTrainingPlansProvider>
            <CurrentUploadImagesContextProvider>
              <IsNavbarOfferOpenContextProvider>
                {children}
              </IsNavbarOfferOpenContextProvider>
            </CurrentUploadImagesContextProvider>
          </ShoppingCartTrainingPlansProvider>
        </ShoppingCartProvider>
      </QueryClientProvider>
    </IsLoggedInContextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
