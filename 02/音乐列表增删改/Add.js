export default {
    template: `
        <div style="background-color: orange;">
            ID:<input type="text" v-model="addId" />
            名称:<input type="text" v-model="addName" />
            <button @click = "addmusic">添加</button>
        </div>
    `,
    props: ['musics'],
    data(){
        return {
            addId: '',
            addName: ''
        }
    },methods: {
        addmusic(){
            this.musics.push({
                id: this.addId,
                name: this.addName
            })
        }
    }
}