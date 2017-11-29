export default {
    template: `
        <div>
            <router-link :to="{name: 'home.music'}">我的音乐</router-link>
            <router-link :to="{name: 'home.movie'}">我的电影</router-link>

            <router-view></router-view>
        </div>
    `
}