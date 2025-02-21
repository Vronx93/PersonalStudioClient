import { useQueryClient } from "@tanstack/react-query";
import { deleteMessage } from "../../api/api";
import { CoachInterface, MessageInterface } from "../../interfaces";
import AdminMessageListElelemt from "../AdminMessageListElement/AdminMessageListElelemt";
import SmallDropdownList from "../SmallDropdownList/SmallDropdownList";
import styles from "./AdminMessageList.module.css";

export default function AdminMessageList({
	messages,
	coaches,
}: {
	messages: MessageInterface[];
	coaches: CoachInterface[];
}) {
	const queryClient = useQueryClient();

	function findCoach(coachId: string) {
		const foundCoach = coaches.find((coach) => coach.id === coachId);
		return foundCoach?.name;
	}

	async function handleMessageDelete(messageId: string) {
		await deleteMessage(messageId);
		queryClient.invalidateQueries({ queryKey: ["messages"] });
	}

	return (
		<ul className={styles.container}>
			{messages.length > 0 &&
				messages.map((element) => (
					<li className={styles.listItem} key={crypto.randomUUID()}>
						<SmallDropdownList
							titleStyle={styles.title}
							listStyle={styles.list}
							title={`Wiadomość do ${findCoach(element.coachId)}`}
							listItemsElements={[
								<AdminMessageListElelemt
									element={element}
									key={crypto.randomUUID()}
									deleteFn={handleMessageDelete}
								/>,
							]}
						/>
					</li>
				))}
		</ul>
	);
}
