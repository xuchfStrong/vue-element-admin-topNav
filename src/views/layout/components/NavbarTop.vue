<template>
  <div class="navbar-top">
    <el-row>
      <el-col :span="4" class="logo-container">
        <span class="topbar-logos">自动部署管理系统</span>
      </el-col>
      <el-col :span="20">
        <el-menu
          :default-active="defaultActiveIndex"
          :router="true"
          :background-color="variables.navBarTopBg"
          :text-color="variables.navBarTopText"
          :active-text-color="variables.navBarTopTextActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item
            v-for="item in permission_routers"
            v-if="!item.hidden&&item.children"
            :key="item.path"
            :index="item.path" >
            <template slot="title">
              <navitem :icon="item.meta.icon||item.meta.icon" :title="generateTitle(item.meta.title)"/>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <div class="right-menu">
        <template v-if="device!=='mobile'">
          <search class="right-menu-item" />
          <error-log class="errLog-container right-menu-item hover-effect"/>
          <screenfull class="right-menu-item hover-effect"/>
          <el-tooltip :content="$t('navbar.size')" effect="dark" placement="bottom">
            <size-select class="right-menu-item hover-effect"/>
          </el-tooltip>
          <lang-select class="right-menu-item hover-effect"/>
          <el-tooltip :content="$t('navbar.theme')" effect="dark" placement="bottom">
            <theme-picker class="right-menu-item hover-effect"/>
          </el-tooltip>
        </template>

        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
          <el-tooltip :content="name" effect="dark" placement="bottom">
            <div class="avatar-wrapper">
              <svg-icon icon-class="user" class-name="user-avatar"/>
              <i class="el-icon-caret-bottom"/>
            </div>
          </el-tooltip>
          <el-dropdown-menu slot="dropdown">
            <!-- <router-link to="/">
              <el-dropdown-item>
                {{ $t('navbar.dashboard') }}
              </el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
              <el-dropdown-item>
                {{ $t('navbar.github') }}
              </el-dropdown-item>
            </a> -->
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-row>
  </div>
</template>

<script>
import Navitem from './Navitem'
import { mapGetters } from 'vuex'
import { generateTitle } from '@/utils/i18n'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'
import Search from '@/components/HeaderSearch'
import variables from '@/styles/variables.scss'

export default {
  components: {
    Navitem,
    ErrorLog,
    Screenfull,
    SizeSelect,
    LangSelect,
    ThemePicker,
    Search
  },
  data() {
    return {
      defaultActiveIndex: '/',
      loading: false,
      nickname: ''
    }
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar',
      'name',
      'avatar',
      'device'
    ]),
    variables() {
      return variables
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    handleSelect(index) {
      this.defaultActiveIndex = index
      const routers = this.permission_routers // 获取路由对象
      for (var i = 0; i < routers.length; i++) {
        if (routers[i].path === index) {
          this.$store.commit('CHANGE_NAVMENU', routers[i].children)
        }
      }
    },
    generateTitle
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/variables.scss";
.navbar-top {
  height: 50px;
  line-height: 50px;
  // box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  transition: margin-left .18s;
    z-index: 1002;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    .logo-container {
      background-color: $navBarTopBg;
      height: 50px;
      .topbar-logos {
        color: $navBarTopLogo;
        line-height: 50px;
        font-size: 20px;
        position: absolute;
        left: 20px;
      }
    }
  .el-menu.el-menu--horizontal {
    border-bottom: solid 0 #e6e6e6;
  }
  .el-menu--horizontal > .el-menu-item {
    height: 50px;
    line-height: 50px;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    position: absolute;
    right: 10px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: $navBarTopText;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 10px;

      .avatar-wrapper {
        margin-top: 0px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 20px;
          height: 20px;
          border-radius: 0;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -15px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

