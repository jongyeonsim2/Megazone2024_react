import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id} 일자의 Diary</div>;
};

export default Diary;
