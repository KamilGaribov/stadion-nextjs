import styles from "../styles/components/card.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { format } from 'url';
import Router from 'next/router'


function Card(props) {
  const router = useRouter()
  const { pathname, query } = router
  const reload = () => {
    router.push(format({ pathname, query }))
  }
  const incrementCounter = () => {
    const currentCounter = query.counter ? parseInt(query.counter) : 0
    const href = `/stadiums/?id=${id}`
    router.push(href, href, { shallow: true })
    // document.querySelector("#stadium").style.display = "block"
    document.querySelector("#stadium").innerHTML = "stadion: " + id
  }
  // const router = useRouter();
  const { id, name, city, district, price, star } = props.i;
  const direct = () => {
    const state = { page_id: 1, user_id: 5 };
    const title = "";
    const url = "/1";
    const href1 = "/stadiums/[id]"
    const href2 = `/stadiums/${id}`
    router.push(href1, href2, { shallow: true })
  };
  return (
    // <Link href="/test">
    <div className={styles.card} key={id} onClick={direct}>
      <div className={styles.info}>
        {/* <div className={styles.rating}>
          {star >= 1 ? (
            <img src="../static/images/star-true.png" />
          ) : (
            <img src="../static/images/star-false.png" />
          )}
          {star >= 2 ? (
            <img src="../static/images/star-true.png" />
          ) : (
            <img src="../static/images/star-false.png" />
          )}
          {star >= 3 ? (
            <img src="../static/images/star-true.png" />
          ) : (
            <img src="../static/images/star-false.png" />
          )}
          {star >= 4 ? (
            <img src="../static/images/star-true.png" />
          ) : (
            <img src="../static/images/star-false.png" />
          )}
          {star >= 5 ? (
            <img src="../static/images/star-true.png" />
          ) : (
            <img src="../static/images/star-false.png" />
          )}
        </div> */}
        <div className={styles.title}>
        {name.length >= 10 ? (
          <div className={styles.title_long}>{name}</div>
        ) : (
          <div className={styles.title_short} id="title">{name}</div>
        )}
          <div className={styles.rating}>
          {star >= 1 ? (
            <img src="../static/icons/star-true.png" />
          ) : (
            <img src="../static/icons/star-false.png" />
          )}
          {star >= 2 ? (
            <img src="../static/icons/star-true.png" />
          ) : (
            <img src="../static/icons/star-false.png" />
          )}
          {star >= 3 ? (
            <img src="../static/icons/star-true.png" />
          ) : (
            <img src="../static/icons/star-false.png" />
          )}
          {star >= 4 ? (
            <img src="../static/icons/star-true.png" />
          ) : (
            <img src="../static/icons/star-false.png" />
          )}
          {star >= 5 ? (
            <img src="../static/icons/star-true.png" />
          ) : (
            <img src="../static/icons/star-false.png" />
          )}
        </div>
        </div>
        <div className={styles.adress}>{city}, {district}</div>
        <div className={styles.price}>
          {price} <span>AZN</span>
        </div>
      </div>
      <div className={styles.avatar}><img src={props.avatar} /></div>
    </div>
    // </Link>
  );
}

export default Card;
