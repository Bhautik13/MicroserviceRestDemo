import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import Login from './login'
import Header from '../components/layout/header'
import LockPage from '../routes/pages/lockscreen'

import Bread from '../components/layout/bread'
import Footer from '../components/layout/footer'
import Sider from '../components/layout/sider'
import styles from '../components/layout/main.less'
import {Spin, LocaleProvider, Switch} from 'antd'
import {classnames, config} from '../utils'
import '../components/layout/common.less'
import enUS from 'antd/lib/locale-provider/en_US';

function App({children, location, dispatch, app}) {
  const {
    login,
    loading,
    loginButtonLoading,
    user,
    siderFold,
    darkTheme,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    lock,
    SignUp
  } = app
  const loginProps = {
    loading,
    loginButtonLoading,
    onOk(data) {
      dispatch({type: 'app/login', payload: data})
    }
  }

  const headerProps = {
    user,
    siderFold,
    location,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    switchMenuPopover() {
      dispatch({type: 'app/switchMenuPopver'})
    },
    logout() {
      dispatch({type: 'app/logout'})
    },
    switchSider() {
      dispatch({type: 'app/switchSider'})
    },
    changeLock() {
      dispatch({type: 'app/changeLock'})
    },
    changeSignUp() {
      dispatch({type: 'app/changeSignUp'})
    },
    changeOpenKeys(openKeys) {
      localStorage.setItem('navOpenKeys', JSON.stringify(openKeys))
      dispatch({
        type: 'app/handleNavOpenKeys',
        payload: {
          navOpenKeys: openKeys
        }
      })
    }
  }

  const siderProps = {
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeTheme() {
      dispatch({type: 'app/changeTheme'})
    },
    changeOpenKeys(openKeys) {
      localStorage.setItem('navOpenKeys', JSON.stringify(openKeys))
      dispatch({
        type: 'app/handleNavOpenKeys',
        payload: {
          navOpenKeys: openKeys
        }
      })
    },
    changeLock() {
      dispatch({type: 'app/changeLock'})
    },
    changeSignUp() {
      dispatch({type: 'app/changeSignUp'})
    }
  }
  if (SignUp) {
    return (
      <div>
        <Spin tip='Loading...' spinning={loading} size='large'>
          Signup Page
        </Spin>
      </div>
    )
  } else if (lock) {
    return (
      <div>
        <LockPage/>
      </div>
    )

  } else if (config.needLogin) {
    if (!login) {
      return (
        <div>

          <div className={styles.spin}>
            <Login {...loginProps}/>
          </div>

        </div>
      )
    }
  }

  if ((login || !config.needLogin)) {
    return (
      <div
        className={classnames(styles.layout, {
        [styles.fold]: isNavbar
          ? false
          : siderFold
      }, {
        [styles.withnavbar]: isNavbar
      })}>
        {!isNavbar
          ? <aside
              className={classnames(styles.sider, {
              [styles.light]: !darkTheme
            })}>
              <Sider {...siderProps}/>
            </aside>
          : ''}

        <div className={styles.main}>
          <div className={styles.spin}>
            <Spin tip='Loading...' spinning={loading} size='large'>
              <Header {...headerProps}/>
              <Bread location={location}/>
              <div className={styles.container}>
                <div className={styles.content}>
                  {children}
                </div>
              </div>
              <Footer/>
            </Spin>
          </div>
        </div>

      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  login: PropTypes.bool,
  lock: PropTypes.bool,
  SignUp: PropTypes.bool,
  user: PropTypes.object,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool
}

export default connect(({app}) => ({app}))(App)
