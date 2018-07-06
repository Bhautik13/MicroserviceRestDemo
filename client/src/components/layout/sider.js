import React from 'react'
import {Icon, Switch} from 'antd'
import styles from './main.less'
import {config} from '../../utils'
import Menus from './menu'

function Sider({siderFold, darkTheme, location, changeTheme,changeLock, navOpenKeys, changeOpenKeys}) {
  const menusProps = {
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys
  }
  return (
    <div>
      <div className={styles.logo}>
        <img src={config.logoSrc}/> {siderFold ? '' : <span>{config.logoText}</span>}
      </div>
      <Menus {...menusProps}/> {!siderFold ? <div className={styles.switchtheme}>
            
            <Switch
              onChange={changeTheme}
              defaultChecked={darkTheme}
              checkedChildren='Dark'
              unCheckedChildren='Light'/>
              
           <Switch
         
          onChange={changeLock}
          checkedChildren={<Icon type="lock" />}
          unCheckedChildren={<Icon type="unlock" />}/>
          </div>
        : ''}
    </div>
  )
}

export default Sider
