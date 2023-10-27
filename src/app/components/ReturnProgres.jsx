"use client";

import React from "react";
import styled from "styled-components";
import "../../app/globals.css";
// import StepProgressBar from "react-step-progress";
// import the stylesheet
// import "react-step-progress/dist/index.css";

export default function ReturnProgres() {
  const step1Content = (
    <h1>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting,s
    </h1>
  );
  const step2Content = (
    <h1>
      standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic
      typesetting,s
    </h1>
  );
  const step3Content = (
    <h1>
      It has survived not only five centuries, but also the leap into electronic
      typesetting,s
    </h1>
  );
  const step4Content = <h1>Final process</h1>;
  // setup the step content

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    // return a boolean
    // return true for checking validate process
    return true;
  }

  function step3Validator() {
    return true;
    // return a boolean
  }
  function step4Validator() {
    return true;
    // return a boolean
  }
  function onFormSubmit() {
    alert("Item returned successful");
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  return (
    <div className="">
      <h1 className="text-3xl">retruns process need to fixed</h1>
      {/* <StepProgressBar
        startingStep={0}
        onSubmit={onFormSubmit}
        steps={[
          {
            label: "Item 1",
            subtitle: "Reason for return customer details",
            name: "step 1",
            content: step1Content,
          },
          {
            label: "Item 2",
            subtitle: "Reason for return customer details",
            name: "step 2",
            content: step2Content,
            validator: step2Validator,
          },
          {
            label: "Item 3",
            subtitle: "Reason for return customer details",
            name: "step 3",
            content: step3Content,
            validator: step3Validator,
          },
          {
            label: "Item 4",
            subtitle: "Reason for return customer details",
            name: "step 4",
            content: step4Content,
            validator: step4Validator,
          },
        ]}
        wrapperClass="wrapperClass"
        primaryBtnClass="primaryBtnClass"
        secondaryBtnClass="secondaryBtnClass"
        subtitleClass="subtitleClass"
        contentClass="contentClass"
        stepClass="stepClass"
        buttonWrapperClass="buttonWrapperClass"
        progressClass="progressClass"
        labelClass="labelClass"
        submitBtnName=""
        previousBtnName=""
      /> */}
    </div>
  );
}

// "use client";
// import React, { useState } from "react";
// import styled from "styled-components";

// const MainContainer = styled.div`
//   width: 100%;
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 0 16px;
// `;

// const StepContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 70px;
//   position: relative;
//   :before {
//     content: "";
//     position: absolute;
//     background: #f3e7f3;
//     height: 4px;
//     width: 100%;
//     top: 50%;
//     transform: translateY(-50%);
//     left: 0;
//   }
//   :after {
//     content: "";
//     position: absolute;
//     background: #4a154b;
//     height: 4px;
//     width: ${({ width }) => width};
//     top: 50%;
//     transition: 0.4s ease;
//     transform: translateY(-50%);
//     left: 0;
//   }
// `;

// const StepWrapper = styled.div`
//   position: relative;
//   z-index: 1;
// `;

// const StepStyle = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: #ffffff;
//   border: 3px solid
//     ${({ step }) => (step === "completed" ? "#4A154B" : "#F3E7F3")};
//   transition: 0.4s ease;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const StepCount = styled.span`
//   font-size: 19px;
//   color: #f3e7f3;
//   @media (max-width: 600px) {
//     font-size: 16px;
//   }
// `;

// const StepsLabelContainer = styled.div`
//   position: absolute;
//   top: 66px;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// const StepLabel = styled.span`
//   font-size: 19px;
//   color: #4a154b;
//   @media (max-width: 600px) {
//     font-size: 16px;
//   }
// `;

// const ButtonsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 0 -15px;
//   margin-top: 100px;
// `;

// const ButtonStyle = styled.button`
//   border-radius: 4px;
//   border: 0;
//   background: #4a154b;
//   color: #ffffff;
//   cursor: pointer;
//   padding: 8px;
//   width: 90px;
//   :active {
//     transform: scale(0.98);
//   }
//   :disabled {
//     background: #f3e7f3;
//     color: #000000;
//     cursor: not-allowed;
//   }
// `;

// const CheckMark = styled.div`
//   font-size: 26px;
//   font-weight: 600;
//   color: #4a154b;
//   -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
//   -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
//   transform: scaleX(-1) rotate(-46deg);
// `;

// const steps = [
//   {
//     label: "Address",
//     step: 1,
//   },
//   {
//     label: "Shipping",
//     step: 2,
//   },
//   {
//     label: "Payment",
//     step: 3,
//   },
//   {
//     label: "Summary",
//     step: 4,
//   },
// ];

// const ReturnProgres = () => {
//   const [activeStep, setActiveStep] = useState(1);

//   const nextStep = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const prevStep = () => {
//     setActiveStep(activeStep - 1);
//   };

//   const totalSteps = steps.length;

//   const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

//   return (
//     <MainContainer>
//       <StepContainer width={width}>
//         {steps.map(({ step, label }) => (
//           <StepWrapper key={step}>
//             <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
//               {activeStep > step ? (
//                 <CheckMark>L</CheckMark>
//               ) : (
//                 <StepCount>{step}</StepCount>
//               )}
//             </StepStyle>
//             <StepsLabelContainer>
//               <StepLabel key={step}>{label}</StepLabel>
//             </StepsLabelContainer>
//           </StepWrapper>
//         ))}
//       </StepContainer>
//       <ButtonsContainer>
//         <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
//           Previous
//         </ButtonStyle>
//         <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
//           Next
//         </ButtonStyle>
//       </ButtonsContainer>
//     </MainContainer>
//   );
// };

// export default ReturnProgres;
