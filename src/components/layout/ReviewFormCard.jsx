
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Covexlogo from "../../assets/covex_logo.png";
import Warning from '../../assets/warning.png'
import { enumerate, hasSymptoms, beautifyDate } from '../../helper/functions';
import { RenderIf } from "@alanngo/custom-components/dist"
import "./reviewForm.css"

const ReviewFormCard = ({ data }) =>
(
    <div className="reviewContent">
        <Row>
            <Col xs={2}>
                {<img className="logotype" src={data.icu ? Warning : Covexlogo} alt="Covax-19 Logo" />}
            </Col>

            <Col className="details" xs={3}>
                <ul>
                    <li>💉 {data.company}</li>
                    <li>🗓️ {beautifyDate(data.date)}</li>
                    <li>
                        <RenderIf condition={data.age}>🎂 {data.age} years old</RenderIf>
                    </li>
                    <li>
                        <RenderIf condition={hasSymptoms(data.reactions)}>
                            🤢 Preexisting Conditions: {(enumerate(data.conditions, `-`))}                        
                        </RenderIf>
                    </li>
                    <li>
                        <RenderIf condition={hasSymptoms(data.reactions)}>
                            🤒 Symptoms: {enumerate(data.reactions, `-`)}
                        </RenderIf>
                    </li>
                </ul>
            </Col>

            <Col >
                <p className="comment">
                    {data.comments}
                </p>
            </Col>
            <Col xs={3}>
                <p className="location">
                    {data.city} {data.region} {data.country}
                </p>

            </Col>

        </Row>
    </div>
)
export default ReviewFormCard;
