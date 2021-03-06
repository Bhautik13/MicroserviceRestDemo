﻿import React from 'react'
import TweenOne from 'rc-tween-one';
import {Button} from 'antd';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
TweenOne
  .plugins
  .push(SvgMorphPlugin);

class Demo extends React.Component {

  constructor(props) {
    super(props);
      this.animation = { rotate: 360, repeat: -1, duration: 1000 };
   
  }
  render() {
    return (
      <div style={{
        textAlign: 'center',
        marginTop: 40
      }}>
      <h1>Coming Soon</h1>
        <svg
          width="130"
          height="230"
          version="1.2"
          style={{
          display: 'block',
          margin: '0 auto'
        }}>

          <g>
            <TweenOne
              animation={this.animation}
              component="path"
              attr="attr"
              d="M971.12,1693.88a1.85,1.85,0,1,0,0-3.69H917.74a1.85,1.85,0,1,0,0,3.69h53.38Z"
              transform="translate(-873.9 -1575.14)"
              fill="#f4534e"/>
            <TweenOne
              animation={this.animation}
              component="path"
              attr="attr"
              d="M984.91,1630.66a6.13,6.13,0,1,0,6.13,6.13A6.13,6.13,0,0,0,984.91,1630.66Zm0,8a1.9,1.9,0,1,1,1.9-1.9A1.91,1.91,0,0,1,984.91,1638.69Z"
              transform="translate(-873.9 -1575.14)"
              fill="#f4534e"/>
            <TweenOne
              animation={this.animation}
              component="path"
              attr="attr"
              d="M927.38,1635.09a2.67,2.67,0,0,0,2.12.78,2.72,2.72,0,0,0,2-1.11A29,29,0,0,0,908,1588.7a28.8,28.8,0,0,0-17,5.53,2.71,2.71,0,0,0-.32,4.1Z"
              transform="translate(-873.9 -1575.14)"
              fill="#f4534e"/>
            <TweenOne
              animation={this.animation}
              component="path"
              attr="attr"
              d="M947.27,1578.44a11.32,11.32,0,0,0-16,0L921,1588.75a31.14,31.14,0,0,1,16,16l10.3-10.29A11.32,11.32,0,0,0,947.27,1578.44Z"
              transform="translate(-873.9 -1575.14)"
              fill="#f4534e"/>
            <g>
              <TweenOne
                animation={this.animation}
                component="path"
                attr="attr"
                d="M889.26,1637.79a1.34,1.34,0,0,1-.94-2.28l6.6-6.6a1.34,1.34,0,0,1,1.89,1.89l-6.6,6.6A1.33,1.33,0,0,1,889.26,1637.79Z"
                transform="translate(-873.9 -1575.14)"
                fill="#66cdcc"/>
              <TweenOne
                animation={this.animation}
                component="path"
                attr="attr"
                d="M884.57,1613.64h-9.34a1.34,1.34,0,0,1,0-2.67h9.34A1.34,1.34,0,1,1,884.57,1613.64Z"
                transform="translate(-873.9 -1575.14)"
                fill="#66cdcc"/>
              <TweenOne
                animation={this.animation}
                component="path"
                attr="attr"
                d="M913.41,1651.82a1.34,1.34,0,0,1-1.34-1.34v-9.34a1.34,1.34,0,0,1,2.67,0v9.34A1.34,1.34,0,0,1,913.41,1651.82Z"
                transform="translate(-873.9 -1575.14)"
                fill="#66cdcc"/>
            </g>
            <TweenOne
              animation={this.animation}
              component="path"
              attr="attr"
              d="M980.81,1629l-32.23-32.23-1.89,1.89,32,32A8.84,8.84,0,0,1,980.81,1629Z"
              transform="translate(-873.9 -1575.14)"
              fill="#66cdcc"/>
            <TweenOne
              animation={this.animation}
              component="path"
              attr="attr"
              d="M950.43,1675l30.39-30.39a8.84,8.84,0,0,1-2.17-1.61l-31.17,31.17A16.75,16.75,0,0,1,950.43,1675Z"
              transform="translate(-873.9 -1575.14)"
              fill="#66cdcc"/>
            <TweenOne
              animation={this.animation}
              component="path"
              attr="attr"
              d="M958.29,1687.52a14.23,14.23,0,0,0-27.73,0h27.73Z"
              transform="translate(-873.9 -1575.14)"
              fill="#f4534e"/>
          </g>

        </svg>
      </div>
    );
  }
}
Demo.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool
};
export default Demo