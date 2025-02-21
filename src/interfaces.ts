/* eslint-disable @typescript-eslint/ban-types */
import { UUID } from "crypto";

export interface HistoryElementInterface {
	title: string;
	descriptionList: string[];
	imagesList: string[];
	altForImages: string;
}

export interface CoachInterface {
	id: string;
	name: string;
	description: string;
	imageDetails: { imageId: string; isPrimary: boolean }[] | [];
}

export interface MessageCoachInterface {
	coachId: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	emailAddress: string;
	message: string;
}

export interface MessageInterface {
	id: string;
	coachId: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	emailAddress: string;
	message: string;
	createdDate: string;
}

export interface SocialsListElementInterface {
	name: string;
	imgUrl: string;
	text: string;
	profileUrl: string;
}

export interface stepToSuccessInterface {
	title: string;
	index: number;
	imgUrl: string;
	textContent: string;
}

export interface trainingPackageInterface {
	id: string;
	name: string;
	description: string;
	price: number;
	imageDetails: { imageId: string; isPrimary: boolean }[] | [];
}

export interface newTrainingPackage {
	name: string;
	price: number;
	description: string;
}

export interface shopItemInterface {
	id: string;
	name: string;
	shortDescription: string;
	description: string;
	price: number;
	count: number;
	imageDetails: { imageId: string; isPrimary: boolean }[] | [];
	availableSizes: availableSizesDictionary;
}

export interface createItemInterface {
	name: string;
	price: number;
	count: number;
	shortDescription: string;
	description: string;
	availableSizes: availableSizesDictionary;
}

export interface errorInterface {
	message: string;
}

export interface availableSizesDictionary {
	[key: string]: number;
}

export interface ShoppingCartContextInterface {
	shoppingCart: shoppingCartItemInterface[] | [];
	setShoppingCart: Function;
	addToCart: Function;
	removeFromCart: Function;
	handleQuantityChange: Function;
	resetCart: Function;
	countTotalPrice: Function;
}

export interface shoppingCartItemInterface {
	id: string;
	name: string;
	description: string;
	shortDescription: string;
	price: number;
	count: number;
	imageDetails: { imageId: string; isPrimary: boolean }[] | [];
	quantity: number | string;
	path: string;
	availableSizes: availableSizesDictionary;
	color?: string;
	size?: string;
}

export interface currentUploadImageInterface {
	image: File;
	randomId: UUID;
}

export interface AddToCartBtnProps {
	item: {
		id: string;
		name: string;
		description: string;
		price: number;
		count?: number;
		imagesIds?: string[] | [];
	};
	quantity: number;
	path: string;
	size?: string;
	buttonStyle?: string;
}

export interface ProductOrderInterface {
	id: string;
	quantity: number;
	size: string;
}

export interface ApiGetOrderInterface {
	id: string;
	paymentId: string;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	city: string;
	street: string;
	houseNumber: string;
	postalCode: string;
	apartmentNumber?: string;
	deliveryDetails: string;
	paymentStatus: string;
	orderStatus: string;
	gadgets: {
		name: string;
		totalUnitPrice: number;
		size?: string;
		count: number;
		totalPrice: number;
	}[];
}

export interface UserDataFormInterface {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	city: string;
	street: string;
	postalCode: string;
	streetNumber: string;
	apartmentNumber: string;
}

export interface OnlinePlanPostOptionInterface {
	name: string;
	price: number;
	taxInPercent: number;
	monthCount: number;
}

export interface OnlinePlanGetOptionInterface {
	name: string;
	price: number;
	taxInPercent: number;
	monthCount: number;
	totalPrice: number;
}

export interface ShoppingCartTrainingPlanInterface {
	onlineTrainingPlan: OnlinePlanPostOptionInterface | null;
	addPlanToCart: (plan: OnlinePlanPostOptionInterface) => void;
	removePlanFromCart: () => void;
}

export interface CreateTransformationInterface {
	name: string;
	lostWeight: number;
	yearsOld: number;
}

export interface TransformationProps {
	imgBefore: string;
	imgAfter: string;
	name: string;
	age: number;
	weightLost: number;
}

export interface GetTransformationData {
	id: string;
	name: string;
	lostWeight: number;
	yearsOld: number;
	imageBefore: string;
	imageAfter: string;
}
