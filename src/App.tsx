import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import AboutMe from "./pages/AboutMe/AboutMe";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import AddShopItem, {
	action as addShopItemAction,
} from "./pages/Admin/AddShopItem/AddShopItem";
import Login from "./pages/Login/Login";
import ProductPage, {
	loader as productPageLoader,
	action as editProductAction,
} from "./pages/Shop/ProductPage/ProductPage";
import ProductsList, {
	loader as productListLoader,
} from "./pages/Shop/ProductsList/ProductsList";
import ShopLayout from "./layouts/ShopLayout/ShopLayout";
import TrainingPlansList, {
	loader as trainingPlansListLoader,
} from "./pages/Shop/TrainingPlanList/TrainingPlansList";
import Home, { loader as homeLoader } from "./pages/Home/Home";
import CoachesPage, {
	loader as coachesPageLoader,
} from "./pages/CoachesPage/CoachesPage";
import AddCoach, {
	action as addCoachAction,
} from "./pages/Admin/AddCoach/AddCoach";
import Studio from "./pages/Studio/Studio";
import ContactPage from "./pages/ContactPage/ContactPage";
import ShopCheckoutPage, {
	action as shopCheckoutAction,
} from "./pages/ShopCheckoutPage/ShopCheckoutPage";
import AddOnlinePlanOption, {
	action as addOnlinePlanAction,
} from "./pages/Admin/AddOnlinePlanOption/AddOnlinePlanOption";
import AddTransformation, {
	action as addTransformationAction,
} from "./pages/Admin/AddTransformation/AddTransformation";
import AdminOrdersPage from "./pages/Admin/AdminOrdersPage/AdminOrdersPage";
import AdminProducts from "./pages/Admin/AdminProducts/AdminProducts";
import EditProduct from "./pages/Admin/EditProduct/EditProduct";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminOnlineOptions from "./pages/Admin/AdminOnlineOptions/AdminOnlineOptions";
import AdminCoachListPage from "./pages/Admin/AdminCoachListPage/AdminCoachListPage";
import { AdminTransformations } from "./pages/Admin/AdminTransformations/AdminTransformations";
import RegisterAdminDevOnly from "./pages/Admin/RegisterDEV_ONLY/RegisterDEV_ONLY";
import ContactCoachPage from "./pages/ContactCoach/ContactCoachPage";
import AdminMessagesPage from "./pages/Admin/AdminMessagesPage/AdminMessagesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import EditCoach from "./pages/Admin/EditCoach/EditCoach";
import ErrorElement from "./components/ErrorElement/ErrorElement";

const queryClient = new QueryClient();

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <ErrorElement />,
			children: [
				{
					index: true,
					element: <Home />,
					loader: async () => await homeLoader(queryClient),
				},
				{
					path: "coaches",
					element: <CoachesPage />,
					loader: async () => await coachesPageLoader(queryClient),
				},
				{
					path: "coaches/contact/:id",
					element: <ContactCoachPage />,
					loader: async () =>
						await ContactCoachPage.loader({ queryClient }),
					action: async ({ request }) =>
						await ContactCoachPage.action({ request, queryClient }),
				},
				{
					path: "about",
					element: <AboutMe />,
				},
				{
					path: "studio",
					element: <Studio />,
				},
				{
					path: "contact",
					element: <ContactPage />,
				},
				{
					path: "checkout",
					element: <ShopCheckoutPage />,
					action: ({ request }) => shopCheckoutAction({ request }),
				},
				{
					path: "shop",
					element: <ShopLayout />,
					children: [
						{
							path: "trainings",
							element: <TrainingPlansList />,
							loader: async () =>
								trainingPlansListLoader(queryClient),
						},
						{
							path: "products",
							element: <ProductsList />,
							loader: async () =>
								await productListLoader(queryClient),
						},
						{
							path: "products/:id",
							element: <ProductPage />,
							loader: ({ params }) =>
								productPageLoader({ queryClient, params } as {
									queryClient: QueryClient;
									params: { id: string };
								}),
							action: async ({ request }) =>
								await editProductAction({ request }),
						},
					],
				},
				{
					path: "login",
					element: <Login />,
					action: async ({ request }) =>
						await Login.action({ request }),
				},
				{
					path: "privacy-policy",
					element: <PrivacyPolicyPage />,
				},
			],
		},
		{
			path: "/admin/",
			element: <AdminLayout />,
			errorElement: <ErrorElement />,
			children: [
				{
					index: true,
					element: <AdminOrdersPage />,
					loader: async () =>
						await AdminOrdersPage.loader(queryClient),
				},
				{
					path: "superhipertajnarejestracjaadmina",
					element: <RegisterAdminDevOnly />,
					action: async ({ request }) =>
						await RegisterAdminDevOnly.action({ request }),
				},
				{
					path: "messages",
					element: <AdminMessagesPage />,
					loader: async () =>
						await AdminMessagesPage.loader({ queryClient }),
				},
				{
					path: "products",
					element: <AdminProducts />,
					loader: async () =>
						await AdminProducts.loader({ queryClient }),
				},
				{
					path: "add-product",
					element: <AddShopItem />,
					action: async ({ request }) =>
						await addShopItemAction({ request, queryClient }),
				},
				{
					path: "add-coach",
					element: <AddCoach />,
					action: async ({ request }) =>
						await addCoachAction({ request, queryClient }),
				},
				{
					path: "add-online-option",
					element: <AddOnlinePlanOption />,
					action: async ({ request }) =>
						await addOnlinePlanAction({ request, queryClient }),
				},
				{
					path: "add-transformation",
					element: <AddTransformation />,
					action: async ({ request }) =>
						await addTransformationAction({ request, queryClient }),
				},
				{
					path: "edit-product/:id",
					element: <EditProduct />,
					loader: async ({ params }) =>
						await EditProduct.loader({ params, queryClient } as {
							params: { id: string };
							queryClient: QueryClient;
						}),
					action: async ({ request, params }) =>
						await EditProduct.action({
							request,
							params,
							queryClient,
						} as {
							request: Request;
							params: { id: string };
							queryClient: QueryClient;
						}),
				},
				{
					path: "online-options",
					element: <AdminOnlineOptions />,
					loader: () => AdminOnlineOptions.loader(queryClient),
				},
				{
					path: "coaches",
					element: <AdminCoachListPage />,
					loader: () => AdminCoachListPage.loader(queryClient),
				},
				{
					path: "edit-coach/:id",
					element: <EditCoach />,
					loader: async ({ params }) =>
						await EditCoach.loader({
							coachId: params.id as string,
							queryClient: queryClient,
						}),
					action: async ({ request, params }) =>
						await EditCoach.action({
							request,
							queryClient,
							coachId: params.id as string,
						}),
				},
				{
					path: "transformations",
					element: <AdminTransformations />,
					loader: () => AdminTransformations.loader({ queryClient }),
				},
			],
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
