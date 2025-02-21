import { Suspense, useEffect, useState } from "react";
import ContactCoach from "../../components/ContactCoach/ContactCoach";
import { getCoaches, messageCoach } from "../../api/api";
import { QueryClient, useQuery } from "@tanstack/react-query";
import {
	Await,
	defer,
	redirect,
	useActionData,
	useLoaderData,
	useSearchParams,
} from "react-router-dom";
import { CoachInterface } from "../../interfaces";
import { z } from "zod";
import validator from "validator";

const coachesDataQuery = () => {
	return {
		queryKey: ["coachesList"],
		queryFn: async () => await getCoaches(),
		staleTime: 1000 * 60 * 10,
	};
};

const MessageSchema = z.object({
	coachId: z.string().uuid(),
	firstName: z
		.string()
		.min(2, { message: "Imię powinno zawierać minimum 2 litery." })
		.max(50, { message: "Imię nie powinno być dłuższe niż 50 znaków." }),
	lastName: z
		.string()
		.min(2, { message: "Nazwisko powinno zawierać minimum 2 litery." })
		.max(50, {
			message: "Nazwisko nie powinno być dłuższe niż 50 znaków.",
		}),
	phoneNumber: z.string().refine(validator.isMobilePhone, {
		message: "Nieprawidłowy numer telefonu.",
	}),
	emailAddress: z.string().email({ message: "Nieprawidłowy email." }),
	message: z
		.string()
		.min(20, { message: "Wiadomość powinna zawierać minimum 20 znaków." }),
});

async function loader({ queryClient }: { queryClient: QueryClient }) {
	const query = coachesDataQuery();
	const data =
		queryClient.getQueryData(query.queryKey) ??
		(await queryClient.fetchQuery(coachesDataQuery()));
	return defer({ data });
}

async function action({
	request,
	queryClient,
}: {
	request: Request;
	queryClient: QueryClient;
}) {
	const formData = await request.formData();
	const coachId = formData.get("coachId") as string;
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;
	const phoneNumber = formData.get("phone") as string;
	const emailAddress = formData.get("email") as string;
	const message = formData.get("message") as string;
	const messageData = {
		coachId,
		firstName,
		lastName,
		phoneNumber,
		emailAddress,
		message,
	};
	const isValid = MessageSchema.safeParse(messageData);
	if (isValid.success) {
		await messageCoach({ formData: messageData });
		queryClient.invalidateQueries({ queryKey: ["messages"] });
		return redirect(`/coaches/contact/${coachId}?message=success`);
	} else {
		return isValid.error.errors.map((error) => ({
			path: error.path[0],
			message: error.message,
		}));
	}
}

export default function ContactCoachPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [errorMessages, setErrorMessages] = useState<JSX.Element[] | null>(
		null
	);
	console.log(errorMessages);
	const messageParam = searchParams.get("message");
	const formErrors = useActionData() as Awaited<
		{ path: string[]; message: string }[]
	>;
	const loaderData = useLoaderData() as Awaited<{ data: CoachInterface[] }>;
	const { data: coachesList } = useQuery({
		...coachesDataQuery(),
		initialData: loaderData.data,
	});

	useEffect(() => {
		if (formErrors) {
			setSearchParams({ message: "failure" });
			setErrorMessages(
				formErrors.map((error) => (
					<p
						key={crypto.randomUUID()}
						style={{
							color: "red",
							marginLeft: "5.7%",
							marginBlock: "1rem",
							textAlign: "center",
						}}>
						{error.message}
					</p>
				))
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formErrors]);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
	return (
		<>
			{messageParam === "success" && (
				<p
					style={{
						color: "green",
						textAlign: "center",
						marginTop: "5rem",
					}}>
					Wiadomość została wysłana. Trener skontaktuje się z Tobą w
					ciągu najbliższych 48 godzin.
				</p>
			)}
			{errorMessages && messageParam === "failure" && (
				<div style={{ marginTop: "3rem" }}>{errorMessages}</div>
			)}
			<Suspense fallback={<p>Pobieranie listy trenerów..</p>}>
				<Await resolve={coachesList}>
					{(coaches) => <ContactCoach coachList={coaches} />}
				</Await>
			</Suspense>
		</>
	);
}

ContactCoachPage.loader = loader;
ContactCoachPage.action = action;
