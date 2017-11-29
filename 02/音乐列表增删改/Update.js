export default {
    template: `
        <div style="background-color: green;">
            ID:<input type="text" v-model="updateId" />
            名称:<input type="text" v-model="updateName" />
            <button @click = "updateMusic">更新</button>
        </div>
    `,
    props: ['musics'],
    data() {
        return {
            updateId: '',
            updateName: ''
        }
    }, methods: {
        updateMusic(){
           var music = this.musics.find( ele => ele.id == this.updateId);
           if(!music){
                alert('音乐不存在');
                return;
           }
           //更改英雄名称
           music.name = this.updateName;
       }
    }
}