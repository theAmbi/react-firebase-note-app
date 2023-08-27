import React from "react";
import { Container } from "../../styles/Container.styled";
import { PPolicy } from "../../styles/PPolicy.styled";
import { details } from "../../PolicyDetails";

interface DetailsProps {
    id: number,
    title: string,
    description: string,
}

const PrivacyPolicy:React.FC<DetailsProps> = () => {
  return (
    <Container>
      <PPolicy>
        <h2>QuizNote Privacy Policy</h2>
        <div className="content">
          <p>
            Welcome to QuikNote! This page outlines our privacy policy to help
            you understand how we collect, use, and safeguard your personal
            information.
          </p>

          <div className="flex">
            {details.map(({id, title, description}) => {
                return <div key={id} className="card">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            })}
          </div>

          
          {/* <h4>Contact Us</h4>
          <p>
            If you have any questions or concerns about our privacy policy,
            please contact us at privacy@quiknoteapp.com.
          </p> */}
        </div>
      </PPolicy>
    </Container>
  );
};

export default PrivacyPolicy;
