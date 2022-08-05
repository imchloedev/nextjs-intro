import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Movie() {
  const router = useRouter();
  const [title, id] = router.query.params || [];

  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {},
  };
}
