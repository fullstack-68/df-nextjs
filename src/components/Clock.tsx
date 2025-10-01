import { type FC } from "react";
import styles from "../styles/style.module.css";
import { revalidatePath } from "next/cache";

interface Props {
  withRefetch?: boolean;
}
const Clock: FC<Props> = async ({ withRefetch }) => {
  // This clock will not refresh in production mode when refreshing the browser.
  const res = await fetch("http://localhost:3001/clock");
  // const res = await fetch("http://localhost:3001/clock", {
  //   next: { revalidate: 1 },
  // });
  const json = await res.json();
  const clock = json.data;

  async function refetch() {
    "use server";
    revalidatePath("/");
  }

  if (!withRefetch) {
    return <kbd>{clock}</kbd>;
  } else {
    return (
      <article>
        <div className={styles.clockWrapper}>
          <span className={styles.clockText}>{clock}</span>
          <form action={refetch}>
            <button>Refetch</button>
          </form>
        </div>
      </article>
    );
  }
};

export default Clock;
