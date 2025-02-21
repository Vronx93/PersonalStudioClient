import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  OnlinePlanPostOptionInterface,
  ShoppingCartTrainingPlanInterface,
} from "../interfaces";

const ShoppingCartTrainingPlansContext =
  createContext<ShoppingCartTrainingPlanInterface | null>(null);

export function useShoppingCartTrainingPlansContext() {
  const context = useContext(ShoppingCartTrainingPlansContext);
  if (!context) {
    throw new Error(
      "Component should be wrapped by ShoppingCartTrainingPlansProvider "
    );
  }
  return context;
}

function useShoppingCartTrainingPlans() {
  const localStorageOption = localStorage.getItem("onlineOption");
  const [onlineTrainingPlan, setOnlineTrainingPlan] =
    useState<OnlinePlanPostOptionInterface | null>(
      localStorageOption ? JSON.parse(localStorageOption) : null
    );

  useEffect(() => {
    localStorage.setItem("onlineOption", JSON.stringify(onlineTrainingPlan));
  }, [onlineTrainingPlan]);

  const addPlanToCart = (plan: OnlinePlanPostOptionInterface) => {
    setOnlineTrainingPlan(plan);
  };

  const removePlanFromCart = () => {
    setOnlineTrainingPlan(null);
  };

  return {
    onlineTrainingPlan,
    addPlanToCart,
    removePlanFromCart,
  };
}

export function ShoppingCartTrainingPlansProvider({
  children,
}: {
  children: ReactNode;
}) {
  const onlineTrainingPlanInterface: ShoppingCartTrainingPlanInterface =
    useShoppingCartTrainingPlans();
  return (
    <ShoppingCartTrainingPlansContext.Provider
      value={onlineTrainingPlanInterface}
    >
      {children}
    </ShoppingCartTrainingPlansContext.Provider>
  );
}
