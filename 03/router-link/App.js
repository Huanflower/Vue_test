export default{
    template: `
        <div>
            <router-link :to="{ name: 'home'}">组件去首页</router-link>
            <router-link :to="{ name: 'home'}">组件去首页</router-link>
            <router-link :to="{ name: 'home'}">组件去首页</router-link>

            <router-view></router-view>
        </div>
    `
}