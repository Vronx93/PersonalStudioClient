import {
	CreateTransformationInterface,
	MessageCoachInterface,
	OnlinePlanPostOptionInterface,
	ProductOrderInterface,
	UserDataFormInterface,
	createItemInterface,
} from "../interfaces";

export async function registerAdmin({
	email,
	password,
	password2,
}: {
	email: string;
	password: string;
	password2: string;
}) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Auth/register`,
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
				confirmPassword: password2,
			}),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas rejestracji wystąpił błąd.",
		};
	}
	return response;
}

export async function logIn({
	email,
	password,
}: {
	email: string;
	password: string;
}) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Auth/login`,
		{
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText:
				"Błąd podczas logowania. Upewnij się, że podałeś właściwy email i hasło.",
		};
	}
	return response;
}

export async function logOut() {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Auth/logout`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Wystąpił błąd podczas wylogowywania.",
		};
	}
	return response;
}

export async function getShopItems() {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Gadgets`,
		{
			method: "GET",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText:
				"Podczas ładowania asortymentu sklepowego wystąpił błąd. Proszę spróbować ponownie.",
		};
	}
	const data = response.json();
	return data;
}

export async function addShopItem({
	itemData,
}: {
	itemData: createItemInterface;
}) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Gadgets`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				name: itemData.name,
				shortDescription: itemData.shortDescription,
				description: itemData.description,
				price: itemData.price,
				count: itemData.count,
				availableSizes: itemData.availableSizes,
			}),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Wystąpił błąd podczas dodawania przedmiotu.",
		};
	}
	const data = response.json();
	return data;
}

export async function getShopItem(itemId: string) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Gadgets/${itemId}`,
		{
			method: "GET",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas ładowania przedmiotu wystąpił błąd.",
		};
	}
	const data = response.json();
	return data;
}

export async function updateShopItem({
	id,
	itemData,
}: {
	id: string;
	itemData: createItemInterface;
}) {
	const requestBody = {
		name: itemData.name,
		description: itemData.description,
		shortDescription: itemData.shortDescription,
		price: itemData.price,
		count: itemData.count,
		availableSizes: itemData.availableSizes,
	};
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Gadgets/${id}`,
		{
			method: "PUT",
			body: JSON.stringify(requestBody),
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas aktualizacji przedmiotu wystąpił błąd.",
		};
	}
	return response;
}

export async function deleteShopItem(itemId: string) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Gadgets/${itemId}`,
		{
			method: "DELETE",
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas usuwania przedmiotu wystąpił błąd.",
		};
	}
	return response;
}

export async function addImage({
	productId,
	imageContent,
	isPrimary,
}: {
	productId: string;
	imageContent: string;
	isPrimary: boolean;
}) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Images`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				productId: productId,
				imageContent: imageContent,
				isPrimary: isPrimary,
			}),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas dodawania zdjęcia wystąpił błąd.",
		};
	}
	return response;
}

export async function getImage(imageId: string) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Images/${imageId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas ładowania zdjęcia wystąpił błąd.",
		};
	}
	const data = URL.createObjectURL(await response.blob());
	return data;
}

export async function removeImage(imageId: string) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Images/${imageId}`,
		{
			method: "DELETE",
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas usuwania zdjęcia wystąpił błąd.",
		};
	}
	return response;
}

export async function deleteTrainingPackage(packageId: string) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Pockets/${packageId}`,
		{
			method: "DELETE",
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas usuwania przedmiotu wystąpił błąd.",
		};
	}
	return response;
}

interface CreateOrderInterface {
	products?: ProductOrderInterface[];
	userData: UserDataFormInterface;
	onlineOptionName?: string;
}

export async function createOrder({
	products,
	userData,
	onlineOptionName,
}: CreateOrderInterface) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Orders`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				products: products,
				customer: userData,
				onlineOptionName: onlineOptionName,
			}),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas dokonywania zakupu wystąpił błąd.",
		};
	}
	const data = await response.text();
	return data;
}

export async function updateOrderStatus(orderId: string, status: string) {
	const response = await fetch(
		`${
			import.meta.env.VITE_REACT_APP_API_URL
		}/api/Orders/${orderId}/status/${status}`,
		{
			method: "put",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText:
				"Podczas aktualizacji statusu zamówienia wystąpił błąd.",
		};
	}
	return response;
}

export async function getCoaches() {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Coaches`,
		{
			method: "get",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas ładowania listy trenerów wystąpił błąd.",
		};
	}
	const data = response.json();
	return data;
}

export async function addCoachApi({
	name,
	description,
}: {
	name: string;
	description: string;
}) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Coaches`,
		{
			method: "post",
			body: JSON.stringify({
				name,
				description,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas dodawania trenera wystąpił błąd.",
		};
	}
	const coachId = response.json();
	return coachId;
}

export async function deleteCoach(coachId: string) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Coaches/${coachId}`,
		{
			method: "delete",
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas usuwania trenera wystąpił błąd.",
		};
	}
	return response;
}

export async function getCoach(coachId: string) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Coaches/${coachId}`,
		{
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas pobierania danych o trenerze wystąpił błąd.",
		};
	}
	const data = response.json();
	return data;
}

export async function updateCoach({
	coachId,
	name,
	description,
}: {
	coachId: string;
	name?: string;
	description?: string;
}) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Coaches/${coachId}`,
		{
			method: "put",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				name,
				description,
			}),
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas aktualizacji danych trenera wystąpił błąd.",
		};
	}
	return response;
}

export async function messageCoach({
	formData,
}: {
	formData: MessageCoachInterface;
}) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/ContactRequests`,
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText:
				"Podczas wysyłania wiadomośći wystąpił błąd. Proszę spróbować ponownie.",
		};
	}
	return response;
}

export async function addOnlinePlanOption({
	name,
	price,
	taxInPercent,
	monthCount,
}: OnlinePlanPostOptionInterface) {
	const response = await fetch(
		`${
			import.meta.env.VITE_REACT_APP_API_URL
		}/api/Trainings/online/options`,
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				options: [
					{
						name,
						price,
						taxInPercent,
						monthCount,
					},
				],
			}),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas dodawania opcji planu online wystąpił błąd.",
		};
	}
	return response;
}

export async function getOnlinePlanOptions() {
	const response = await fetch(
		`${
			import.meta.env.VITE_REACT_APP_API_URL
		}/api/Trainings/online/options`,
		{
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText:
				"Podczas pobierania opcji pakietu online wystąpił błąd.",
		};
	}
	const data = response.json();
	return data;
}

export async function deleteOnlineOption(optionName: string) {
	const response = await fetch(
		`${
			import.meta.env.VITE_REACT_APP_API_URL
		}/api/Trainings/online/options/${optionName}`,
		{
			method: "delete",
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Usunięcie opcji online nie powiodło się.",
		};
	}
	return response;
}

export async function addTransformation({
	name,
	lostWeight,
	yearsOld,
}: CreateTransformationInterface) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Transformations`,
		{
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			method: "post",
			body: JSON.stringify({
				name,
				lostWeight,
				yearsOld,
			}),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas dodawania transformacji wystąpił błąd.",
		};
	}
	const data = response.json();
	return data;
}

export async function addImgBeforeTransformation({
	transformationId,
	imageBeforeContent,
}: {
	transformationId: string;
	imageBeforeContent: string;
}) {
	const response = await fetch(
		`${
			import.meta.env.VITE_REACT_APP_API_URL
		}/api/Transformations/image/before/${transformationId}`,
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				imageBeforeContent,
			}),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText:
				"Podczas dodawania zdjęcia z przed transformacji wystąpił błąd.",
		};
	}
	return response;
}

export async function addImgAfterTransformation({
	transformationId,
	imageAfterContent,
}: {
	transformationId: string;
	imageAfterContent: string;
}) {
	const response = await fetch(
		`${
			import.meta.env.VITE_REACT_APP_API_URL
		}/api/Transformations/image/after/${transformationId}`,
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				imageAfterContent,
			}),
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText:
				"Podczas dodawania zdjęcia po transformacji wystąpił błąd.",
		};
	}
	return response;
}

export async function getTransformations() {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Transformations`
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas pobierania listy transformacji wystąpił błąd.",
		};
	}
	const data = response.json();
	return data;
}

export async function deleteTransformation(id: string) {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Transformations/${id}`,
		{
			method: "delete",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas usuwania transformacji wystąpił błąd.",
		};
	}
	return response;
}

export async function getOrders() {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Orders`,
		{
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas pobierania listy zamówień wystąpił błąd.",
		};
	}
	const data = response.json();
	return data;
}

export async function getMessages() {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/ContactRequests`,
		{
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText: "Podczas pobierania listy wiadomości wystąpił błąd.",
		};
	}
	const data = response.json();
	return data;
}

export async function deleteMessage(messageId: string) {
	const response = await fetch(
		`${
			import.meta.env.VITE_REACT_APP_API_URL
		}/api/ContactRequests/${messageId}`,
		{
			method: "delete",
			credentials: "include",
			headers: {
				"Content-type": "application/json",
			},
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText:
				"Podczas usuwania wiadomości wystąpił błąd. Odśwież stronę i spróbuj ponownie.",
		};
	}
	return response;
}

export async function getLatestProduct() {
	const response = await fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/Gadgets/latest`,
		{
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	if (!response.ok) {
		throw {
			status: response.status,
			statusText:
				"Podczas pobierania danych o najnowszym produkcie wystąpił błąd.",
		};
	}
	const data = response.json();
	return data;
}
