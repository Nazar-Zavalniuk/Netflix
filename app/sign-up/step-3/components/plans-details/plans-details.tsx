import { v4 as uuidv4 } from "uuid";

import { Detail } from "../../types";

import styles from "./plans-details.module.css";

interface ListItemProps {
  info: Detail;
}

function ListItem(props: ListItemProps) {
  const { info } = props;

  const [label, value] = info;

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemContentWrapper}>
        <div className={styles.label}>{label}</div>
        <div className={styles.value}>{value}</div>
      </div>
    </li>
  );
}

interface PlansDetailsProps {
  details: Detail[] | undefined;
}

export function PlansDetails(props: PlansDetailsProps) {
  const { details } = props;

  const detailsList = details?.map((info) => {
    const key = uuidv4();

    return <ListItem key={key} info={info} />;
  });

  return (
    <ul role="tabpanel" className={styles.list}>
      {detailsList}
    </ul>
  );
}
