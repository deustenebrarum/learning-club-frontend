import Image from "next/image";
import styles from "./page.module.css";
import { getPosts } from "@/api/posts";
import { obtainToken } from "@/api/auth";


export default async function Home() {

  const onAuthorize = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const token = await obtainToken(data.email, data.password);

    localStorage.setItem("token", token.token);
    console.log(token);
  };

  const data = await getPosts();
  return (
    <div className={styles.page}>
      <form onSubmit={onAuthorize}>
        <input type="text" name="login" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Authorize</button>
      </form>
      {data.results.map((post) => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
