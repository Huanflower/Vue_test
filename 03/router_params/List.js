export default {
    template: `
        <div>
            查询字符串方式：
            <ul>
                <li :class="index%2==0?'red':'green'" v-for="(hero,index) in heros" :key="index">
                {{hero.name}} <router-link :to=" {name: 'detail',query:{id:hero.id} }">查看详情</router-link>
                </li>
            </ul>

            path方式：
             <ul>
                <li :class="index%2==0?'red':'green'" v-for="(hero,index) in heros" :key="index">
                {{hero.name}} <router-link :to=" {name: 'detail2',params:{mid:hero.id} }">查看详情</router-link>
                </li>
            </ul>

        </div>
    `,
    data(){
        return {
            heros: [{ id: 1, name: '李白' }, { id: 2, name: '娜可露露' }, { id: 3, name: '貂蝉' }, { id: 4, name: '西施' }, { id: 5, name: '王昭君' }]
        }
    }
}