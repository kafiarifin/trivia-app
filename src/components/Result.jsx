import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import * as timesUp from '../media/6640-times-up.json';
import * as wrongAnswer from '../media/4698-wrong-answer.json';
import * as success from '../media/10193-cup.json';
import { Container, Row, Col, Button } from 'react-bootstrap';

const animationOptions = {
  loop: false,
  autoplay: true, 
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function Result({outcome, score, onRestart}) {
  if (outcome === 's') {
    return (
      <Container>
        <Row>
          <Col xs={10} className="offset-1 text-center mt-5">
            <Lottie
              options={{
                animationData: success.default,
                ...animationOptions
              }}
              width={'60%'}
              isStopped={false}
              isPaused={false}
            />
          </Col>
          <Col xs={10} className="offset-1 text-center">
            You finished the quiz successfully!
          </Col>
          <Col xs={10} className="offset-1 text-center">
            Total: {score} points
          </Col>
        </Row>
        <Row>
          <Col xs={10} className="offset-1 p-2 text-center">
            <Button variant="secondary w-100" onClick={onRestart}>Start a New Quiz</Button>
          </Col>
        </Row>
      </Container>
    );
  }

  if (outcome === 'w' || outcome === 't') {
    return (
      <Container>
        <Row>
          {outcome === 'w' ? 
            <>
              <Col xs={10} className="offset-1 text-center mt-5">
                <Lottie
                  options={{
                    animationData: wrongAnswer.default,
                    ...animationOptions
                  }}
                  width={'60%'}
                  isStopped={false}
                  isPaused={false}
                />
              </Col>
                <Col xs={10} className="offset-1 text-center">
                  Wrong answer!
                </Col>
              </>
            :
            <Col xs={10} className="offset-1 text-center mt-5">
              <Lottie
                options={{
                  animationData: timesUp.default,
                  ...animationOptions
                }}
                width={'60%'}
                isStopped={false}
                isPaused={false}
              />
            </Col>
          }
          <Col xs={10} className="offset-1 text-center">
            Total: {score} points
          </Col>
        </Row>
        <Row>
          <Col xs={10} className="offset-1 p-2 text-center">
            <Button variant="secondary w-100" onClick={onRestart}>Start a New Quiz</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

Result.propTypes = {
  outcome: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
}
