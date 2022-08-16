import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiAws,
  DiDocker,
} from 'react-icons/di';
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiSocketdotio
} from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <DiJavascript1 />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            Javascript{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <DiNodejs />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            NodeJS{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <DiReact />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            React{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <DiAws />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            Amazon Web Services{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <DiDocker />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            Docker{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <SiTypescript />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            TypeScript{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <SiRedux />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            Redux{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <SiExpress />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            ExpressJS{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <DiMongodb />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            MongoDB{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <SiSocketdotio />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            Socket.io{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <SiNextdotjs />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            NextJS{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <DiGit />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            Git{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <SiFirebase />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            Firebase{' '}
          </p>
        </Row>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Row>
          <DiPython />
        </Row>
        <Row>
          <p className='purple' style={{ fontSize: '0.26em' }}>
            Python{' '}
          </p>
        </Row>
      </Col>
    </Row>
  );
}

export default Techstack;
