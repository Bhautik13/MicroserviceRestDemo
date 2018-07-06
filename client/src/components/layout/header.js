import React from 'react'
import {Menu, Icon, Popover, Badge, M} from 'antd'
import styles from './main.less'
import Menus from './menu'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup;
function Header({
  user,
  logout,lock,SignUp,
  switchSider,
  siderFold,
  isNavbar,
  menuPopoverVisible,
  location,
  switchMenuPopover,
  navOpenKeys,
  changeOpenKeys
}) {
  let handleClickMenu = e => e.key === 'logout' && logout()
  
  const menusProps = {
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys
  }
  return (
    <div className={styles.header}>
      {isNavbar
        ? <Popover 
            placement='bottomLeft'
            onVisibleChange={switchMenuPopover}
            visible={menuPopoverVisible}
            overlayClassName={styles.popovermenu + ' deneme' }
            trigger='click'
            content={<Menus {
            ...menusProps
          } />}>
            <div className={styles.siderbutton}>
              <Icon type='bars'/>
            </div>
          </Popover>
        : <div className={styles.siderbutton} onClick={switchSider}>
          <Icon type={siderFold
            ? 'menu-unfold'
            : 'menu-fold'}/>
        </div>}
      <Menu className='header-menu' mode='horizontal' onClick={handleClickMenu}>
        <SubMenu
          style={{
          float: 'right'
        }}
          title={<span> <Icon type="user"/>John Doe </span>}>
          <MenuItemGroup title="Settings">
            <Menu.Item key="profile" > <a href="#/pages/profile"  rel="noopener noreferrer">Profile</a></Menu.Item>
            <Menu.Item key='logout'>
              <a>Sign Out</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu
          style={{
          float: 'right'
        }}
          title={< span > <Badge count={5}>
          <Icon type="notification"/>
        </Badge> </span>}></SubMenu>
      </Menu>
    </div>
  )
}

export default Header
