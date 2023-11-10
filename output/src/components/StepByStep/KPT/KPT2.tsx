import React from "react";
import StepByStepWrap from "../StepByStepWrap";
import img2 from "../../../img/ProgressBar/KPT2.png";
import WritingPageBtnWrap from "../../WritingPageBtn";

//Step by Step KPT 회고 페이지 2
interface KPT2Props {
  content: string[];
  handleComplete: () => void;
  inputContent: string;
  setInputContent: (inputContent: string) => void;
  isContentFilled: boolean; // isContentFilled 속성 추가
  setContent: (content: string[]) => void; // setContent 속성 추가
}

export default function KPT2({
  content,
  handleComplete,
  inputContent,
  setInputContent,
  isContentFilled, // isContentFilled 속성 추가
  setContent, // setContent 속성 추가
}: KPT2Props) {
  const handleNext = () => {
    if (inputContent.trim().length > 0) {
      const updatedContent = [...content, inputContent]; // content 배열에 inputContent 추가
      setContent(updatedContent); // content 업데이트
      setInputContent("");
      handleComplete();
    }
  };
  return (
    <>
      <StepByStepWrap>
        <div className="progressBar_container">
          <img src={img2} alt="progressBar" />
        </div>
        <div className="mainContent_container">
          <div className="mainContent_Btn">Problem</div>
          <div className="main_text_container">
            <p>아쉬운 결과를 만들었고,</p>
            <p>
              <span style={{ fontWeight: 700 }}>
                계속해서 유지해 나가야할 것
              </span>
              을 작성해주세요.
            </p>
          </div>
          <div>
            <textarea
              className="mainContent_Input"
              placeholder="텍스트를 입력해주세요"
              value={inputContent}
              onChange={(e) => {
                const text = e.target.value; // 200자를 초과하는 입력 방지
                if (text.length <= 200) {
                  setInputContent(text);
                }
              }}
              style={{ resize: "none" }} // 사이즈 조절 방지
            ></textarea>
            <p className="text_num">{inputContent.length}/200</p>
          </div>
        </div>
        <WritingPageBtnWrap>
          <button className="temporary_btn" disabled={!isContentFilled}>
            임시 저장
          </button>
          <button
            className="completed_btn"
            style={{
              backgroundColor: isContentFilled ? "#79CD96" : " #305D40",
            }}
            disabled={!isContentFilled}
            onClick={handleNext}
          >
            다음
          </button>
        </WritingPageBtnWrap>
      </StepByStepWrap>
    </>
  );
}
