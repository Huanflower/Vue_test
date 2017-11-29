export default {
    template: `
        <div>
            我是详情
            {{hero}}
        </div>
    `,
    data(){
        return {
            heros: [{ id: 1, name: '李白' }, { id: 2, name: '娜可露露' }, { id: 3, name: '貂蝉' }, { id: 4, name: '西施' }, { id: 5, name: '王昭君' }],
            hero: ''
        }
    },
    created() {
        console.log(this.$route.params);

        var id = this.$route.query.id || this.$route.params.mid;
        this.hero = this.heros.find(ele =>ele.id == id)
    }
}