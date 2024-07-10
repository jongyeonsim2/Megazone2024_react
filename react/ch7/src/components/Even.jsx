import { useEffect } from "react";

/***
 * 컴포넌트의 용도는 Unmount 단계를 확인하는 목적
 * => useEffect() 를 Unmount 단계에 실행이 되도록 구현이 필요
 */

const Even = () => {
  // useEffect() 의 실행은 mount 단계에서 실행
  // useEffect() 의 종료는 unmount 단계에서 실행
  useEffect(() => {
    // clean function : useEffect 에서의 반환되는 함수

    // useEffect() 종료의 의미
    // => unmount 단계를 확인하기 위함
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수</div>;
};
export default Even;
